import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API de contacto
app.post("/api/contact", async (req, res) => {
  const { name, email, company, phone, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ msg: "Campos requeridos incompletos" });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `Nuevo contacto desde la web: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company}\nTeléfono: ${phone}\nMensaje: ${message}`
    });

    res.status(200).json({ msg: "Mensaje enviado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al enviar el mensaje" });
  }
});

// servidor escuchando
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

