import axios from "axios";

export const validateCaptcha = async (req, res, next) => {
  const { captchaToken } = req.body;

  if (!captchaToken) {
    return res.status(400).json({ msg: "Captcha no enviado." });
  }

  try {
    const secret = process.env.RECAPTCHA_SECRET; 
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captchaToken}`
    );

    if (!response.data.success || response.data.score < 0.5) {
      return res.status(400).json({ msg: "Captcha inválido." });
    }

    next();
  } catch (err) {
    console.error("Error validando captcha:", err);
    return res.status(500).json({ msg: "Error validando captcha." });
  }
};
