// Vercel serverless function — handles contact form submissions.
// Runs on Vercel's servers, NOT in the browser, so the Mailtrap
// token (read from environment variables) is never exposed publicly.
//
// Env vars must be set in the Vercel dashboard
// (Project → Settings → Environment Variables):
//   MAILTRAP_TOKEN, MAILTRAP_TEMPLATE_UUID,
//   MAILTRAP_SENDER_EMAIL, MAILTRAP_SENDER_NAME,
//   CONTACT_RECIPIENT_EMAIL, RECAPTCHA_SECRET_KEY

const { MailtrapClient } = require("mailtrap");

const client = new MailtrapClient({ token: process.env.MAILTRAP_TOKEN });

const verifyRecaptcha = async (token) => {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    throw new Error("RECAPTCHA_SECRET_KEY is not configured.");
  }

  const verificationResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
      }).toString(),
    }
  );

  if (!verificationResponse.ok) {
    throw new Error("reCAPTCHA verification service request failed.");
  }

  const verification = await verificationResponse.json();
  return verification.success === true;
};

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const { source, fullName, email, subject, message, recaptchaToken } = req.body || {};

  // Email is the only field every form collects, so it's the one
  // hard requirement. The rest are optional (lead forms send only email).
  if (!email) {
    return res.status(400).json({ ok: false, error: "Email is required." });
  }

  if (source === "Contact Form") {
    if (!recaptchaToken) {
      return res.status(400).json({ ok: false, error: "reCAPTCHA verification is required." });
    }

    try {
      const isHuman = await verifyRecaptcha(recaptchaToken);

      if (!isHuman) {
        return res.status(400).json({ ok: false, error: "reCAPTCHA verification failed." });
      }
    } catch (err) {
      console.error("reCAPTCHA verification failed:", err);
      return res.status(502).json({ ok: false, error: "Unable to verify reCAPTCHA." });
    }
  }

  try {
    await client.send({
      from: {
        email: process.env.MAILTRAP_SENDER_EMAIL,
        name: process.env.MAILTRAP_SENDER_NAME || "WealthWize",
      },
      // Always deliver to the fixed recipient — never to anything
      // supplied by the visitor.
      to: [{ email: process.env.CONTACT_RECIPIENT_EMAIL }],
      // Let the business reply straight to the visitor.
      reply_to: { email, name: fullName || source || "Website Lead" },
      template_uuid: process.env.MAILTRAP_TEMPLATE_UUID,
      // The single template adapts to whichever fields are present.
      template_variables: {
        source: source || "Website",
        fullName: fullName || "",
        email,
        subject: subject || "",
        message: message || "",
      },
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Mailtrap send failed:", err);
    return res.status(502).json({ ok: false, error: "Failed to send message." });
  }
};
