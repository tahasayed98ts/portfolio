import axios from "axios";

export default async function handler(req, res) {
  // 1. استقبال التوكن من الفرونت-إند
  const { token } = req.body;

  // 2. التحقق من وجود التوكن
  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  try {
    // 3. إرسال طلب التحقق إلى Google
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY, // احتفظ به في .env.local
          response: token,
        },
      }
    );

    // 4. تحقق من الاستجابة
    if (!response.data.success) {
      console.error("reCAPTCHA failed:", response.data["error-codes"]);
      return res.status(400).json({
        error: "reCAPTCHA verification failed",
        details: response.data["error-codes"],
      });
    }

    // 5. إذا نجح التحقق
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("reCAPTCHA server error:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
}
