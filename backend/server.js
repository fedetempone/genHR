import express from "express";
import fetch from "node-fetch"; // npm install node-fetch
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "https://genhr.onrender.com",
}));
app.use(express.json());

// API de contacto
app.post("/api/contact", async (req, res) => {
  const { name, email, company, phone, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ msg: "Campos requeridos incompletos" });

  try {
    const response = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.MAILERSEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: {
          email: process.env.MAILERSEND_FROM,
        },
        to: [
          { email: process.env.MAILERSEND_FROM }
        ],
        subject: `Nuevo contacto desde la web: ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company}\nTeléfono: ${phone}\nMensaje: ${message}`
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("MailerSend API error:", errorText);
      return res.status(500).json({ msg: "Error al enviar el mensaje" });
    }

    res.status(200).json({ msg: "Mensaje enviado" });
  } catch (error) {
    console.error("ERROR EN CONTACT API:", error);
    res.status(500).json({ msg: "Error al enviar el mensaje" });
  }
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
