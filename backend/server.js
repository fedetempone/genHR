// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import fetch from "node-fetch"; // API de resend
// import { validateContact } from "./middleware/ValidateContact.js";
// import { validateCaptcha } from "./middleware/ValidateCaptcha.js";


// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // CORS
// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://genhr.onrender.com",
//   "https://genhr.com.ar",
// ];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   })
// );

// app.use((req, res, next) => {
//   const host = req.headers["x-forwarded-host"] || req.hostname;
//   if (host === "genhr.onrender.com") {
//     return res.redirect(301, "https://genhr.com.ar" + req.originalUrl);
//   }
//   next();
// });

// app.use(express.json());

// // hago ping para que no se duerma render
// app.get("/api/ping", (req, res) => {
//   console.log("Ping recibido!", new Date().toLocaleString());
//   res.status(200).send("pong");
// });

// // fetch con timeout para el usuario, si no se manda el mail en 8seg tira un error pero por d etras lo trata de enviar igual
// const fetchWithTimeoutForUser = (url, options, timeout = 8000) => {
//   return Promise.race([
//     fetch(url, options), // aca la request real sigue corriendo si se excede el timeout osea los 8seg
//     new Promise((_, reject) =>
//       setTimeout(() => reject(new Error("timeout")), timeout)
//     ),
//   ]);
// };

// // contacto
// app.post("/api/contact", validateCaptcha, validateContact, async (req, res) => {
//   const { name, email, company, phone, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ msg: "Campos requeridos incompletos" });
//   }

//   const fetchOptions = {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       from: "hola@genhr.com.ar",
//       to: ["hola@genhr.com.ar"],
//       reply_to: email,
//       subject: `Web - ${company || "-"} (${name})`,
//       text: `
// Nombre: ${name}
// Email: ${email}
// Empresa: ${company || "-"}
// Teléfono: ${phone || "-"}
// Mensaje: ${message}
//       `,
//     }),
//   };

//   try {
//     // intento enviar con timeout de 8s para mostrar msje al usuario
//     await fetchWithTimeoutForUser("https://api.resend.com/emails", fetchOptions, 8000);

//     // si resend responde a tiempo entonces y sino..
//     console.log(`✅ Nuevo mensaje de ${name} enviado correctamente via Resend`);
//     res.status(200).json({ msg: "Mensaje enviado correctamente" });
//   } catch (error) {
//     if (error.message === "timeout") {
//       console.warn(`⏱ Timeout para ${name}: Resend puede seguir enviando en segundo plano`);
//       res.status(200).json({
//         msg: "No pudimos confirmar el envío inmediatamente. Intentá de nuevo en unos minutos o el mensaje podría llegarnos igualmente.",
//       });

//       // request sin el await para que siga corriendo en segundo plano
//       fetch("https://api.resend.com/emails", fetchOptions)
//         .then((resp) => {
//           if (!resp.ok) {
//             resp.text().then((txt) => console.error("Resend API error:", txt));
//           } else {
//             console.log(`✅ Mensaje de ${name} finalmente enviado en segundo plano`);
//           }
//         })
//         .catch((err) => console.error("Error en envío en segundo plano:", err));
//     } else {
//       console.error("❌ Error al enviar correo:", error);
//       res.status(500).json({ msg: "Error al enviar el mensaje" });
//     }
//   }
// });

// // middleware de manejo de errores
// app.use((err, req, res, next) => {
//   if (err.message === "Not allowed by CORS") {
//     return res.status(403).json({ msg: "Dominio no autorizado por CORS" });
//   }
//   console.error("❌ Error inesperado:", err);
//   res.status(500).json({ msg: "Error interno del servidor" });
// });

// app.listen(PORT, () => {
//   console.log(`✅ Servidor corriendo en puerto ${PORT}`);
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch"; // API de Resend
import { validateContact } from "./middleware/ValidateContact.js";
import { validateCaptcha } from "./middleware/ValidateCaptcha.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://genhr.onrender.com",
  "https://genhr.com.ar",
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

// --- REDIRECT DEL DOMINIO VIEJO ---
app.use((req, res, next) => {
  const host = req.headers["x-forwarded-host"] || req.hostname;

  if (host.includes("genhr.onrender.com")) {
    const target = "https://genhr.com.ar" + req.originalUrl;
    console.log(`Redirecting ${host} -> ${target}`);
    return res.redirect(301, target);
  }

  next();
});

app.use(express.json());

// --- PING PARA QUE NO SE DUERMA RENDER ---
app.get("/api/ping", (req, res) => {
  console.log("Ping recibido!", new Date().toLocaleString());
  res.status(200).send("pong");
});

// --- FETCH CON TIMEOUT ---
const fetchWithTimeoutForUser = (url, options, timeout = 8000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), timeout)
    ),
  ]);
};

// --- CONTACTO ---
app.post("/api/contact", validateCaptcha, validateContact, async (req, res) => {
  const { name, email, company, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "Campos requeridos incompletos" });
  }

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
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
  };

  try {
    await fetchWithTimeoutForUser("https://api.resend.com/emails", fetchOptions, 8000);
    console.log(`✅ Nuevo mensaje de ${name} enviado correctamente via Resend`);
    res.status(200).json({ msg: "Mensaje enviado correctamente" });
  } catch (error) {
    if (error.message === "timeout") {
      console.warn(`⏱ Timeout para ${name}: envío sigue en segundo plano`);
      res.status(200).json({
        msg: "No pudimos confirmar el envío inmediatamente. Puede llegarnos igualmente en unos minutos.",
      });

      fetch("https://api.resend.com/emails", fetchOptions)
        .then((resp) => {
          if (!resp.ok) resp.text().then((txt) => console.error("Resend API error:", txt));
          else console.log(`✅ Mensaje de ${name} enviado en segundo plano`);
        })
        .catch((err) => console.error("Error en envío en segundo plano:", err));
    } else {
      console.error("❌ Error al enviar correo:", error);
      res.status(500).json({ msg: "Error al enviar el mensaje" });
    }
  }
});

// --- MIDDLEWARE DE ERRORES ---
app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ msg: "Dominio no autorizado por CORS" });
  }
  console.error("❌ Error inesperado:", err);
  res.status(500).json({ msg: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
