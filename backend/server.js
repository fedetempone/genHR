import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ------------------ api contacto ------------------
app.post("/api/contact", async (req, res) => {
    const { name, email, company, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ msg: "Campos requeridos incompletos" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            replyTo: email,
            to: process.env.GMAIL_USER,
            subject: `Nuevo contacto desde la web: ${name}`,
            text: `
                Nombre: ${name}
                Email: ${email}
                Empresa: ${company}
                Teléfono: ${phone}
                Mensaje: ${message}
            `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ msg: "Mensaje enviado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al enviar el mensaje" });
    }
});

// ------------------ aca sirvo el front end para las rutas de react ------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// el front end se sirve  desde dist
app.use(express.static(path.join(process.cwd(), "dist")));

// cualquier otra ruta que no es /api se redirecciona a index.html para que no me tire 404 al acceder directo a una ruta
app.get("/*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist/index.html"));
});

// ------------------ aca levanto el servidor ------------------
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
