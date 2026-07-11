// Vercel serverless function — handles contact form submissions.
// Runs on Vercel's servers, NOT in the browser, so the Mailtrap
// token (read from environment variables) is never exposed publicly.
//
// Env vars must be set in the Vercel dashboard
// (Project → Settings → Environment Variables):
//   MAILTRAP_TOKEN, MAILTRAP_TEMPLATE_UUID,
//   MAILTRAP_SENDER_EMAIL, MAILTRAP_SENDER_NAME,
//   CONTACT_RECIPIENT_EMAIL

const { MailtrapClient } = require("mailtrap");

const client = new MailtrapClient({ token: process.env.MAILTRAP_TOKEN });

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const { fullName, email, subject, message } = req.body || {};

  // Validate before sending anything.
  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: "All fields are required." });
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
      reply_to: { email, name: fullName },
      template_uuid: process.env.MAILTRAP_TEMPLATE_UUID,
      template_variables: { fullName, email, subject, message },
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Mailtrap send failed:", err);
    return res.status(502).json({ ok: false, error: "Failed to send message." });
  }
};
