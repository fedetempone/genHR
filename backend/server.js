import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "https://genhr.onrender.com", 
}));
app.use(express.json());

// nodemailes con MailerSend SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.mailersend.net",
  port: 587,
  auth: {
    user: process.env.MAILERSEND_API_KEY,
    pass: process.env.MAILERSEND_API_KEY,
  },
});

// API de contacto
app.post("/api/contact", async (req, res) => {
  const { name, email, company, phone, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ msg: "Campos requeridos incompletos" });

  try {
    await transporter.sendMail({
      from: process.env.MAILERSEND_FROM,
      replyTo: email,
      to: process.env.MAILERSEND_FROM,
      subject: `Nuevo contacto desde la web: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company}\nTeléfono: ${phone}\nMensaje: ${message}`,
    });

    res.status(200).json({ msg: "Mensaje enviado" });
  } catch (error) {
    console.error("ERROR EN CONTACT API:", error);
    res.status(500).json({ msg: "Error al enviar el mensaje" });
  }
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
