import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// cors
const allowedOrigins = [
  "http://localhost:5173",
  "https://genhr.onrender.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());

// transporter 
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "hola@genhr.com.ar",           
    pass: process.env.GMAIL_APP_PASSWORD 
  },
});

// ruta principal del contacto 
app.post("/api/contact", async (req, res) => {
  const { name, email, company, phone, message } = req.body;

  // validacion simlpe
  if (!name || !email || !message) {
    return res.status(400).json({ msg: "Campos requeridos incompletos" });
  }

  // correo
  const mailOptions = {
    from: `"${name}" <${email}>`,    // el remitente va a ser el usuario que completa el formulario
    to: "hola@genhr.com.ar",         // la casilla destino seria workspace
    subject: `Nuevo contacto desde la web: ${name}`,
    text: `
Nombre: ${name}
Email: ${email}
Empresa: ${company || "-"}
Teléfono: ${phone || "-"}
Mensaje: ${message}
    `,
    replyTo: email, // se responde desde gmail al remitente 
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Nuevo mensaje de ${name} enviado correctamente`);
    res.status(200).json({ msg: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error("❌ Error al enviar correo:", error);
    res.status(500).json({ msg: "Error al enviar el mensaje" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
