import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch"; // api de resend

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

app.get("/api/ping", (req, res) => {
  console.log("Ping recibido!");
  res.json({ ok: true });
});

// contacto de resend
app.post("/api/contact", async (req, res) => {
  const { name, email, company, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "Campos requeridos incompletos" });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`, 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "hola@genhr.com.ar",       
        to: ["hola@genhr.com.ar"],       
        reply_to: email,                 
        subject: `Web - ${company || "-"} (${name})`,
        text: `
Nombre: ${name}
Email: ${email}
Empresa: ${company || "-"}
Teléfono: ${phone || "-"}
Mensaje: ${message}
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", errorText);
      return res.status(500).json({ msg: "Error al enviar el mensaje" });
    }

    console.log(`✅ Nuevo mensaje de ${name} enviado correctamente via Resend`);
    res.status(200).json({ msg: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error("❌ Error al enviar correo:", error);
    res.status(500).json({ msg: "Error al enviar el mensaje" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
