// The reCAPTCHA site key is public by design, but Create React App only
// exposes build-time variables prefixed with REACT_APP_. Serving it from
// this endpoint lets Vercel use the requested RECAPTCHA_SITE_KEY name.

module.exports = (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  if (!process.env.RECAPTCHA_SITE_KEY) {
    return res.status(500).json({ ok: false, error: "reCAPTCHA is not configured." });
  }

  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600");
  return res.status(200).json({ siteKey: process.env.RECAPTCHA_SITE_KEY });
};
