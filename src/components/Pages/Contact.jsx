// import "../../styles/pages/contactForm.css";
// import Waves from "../Waves";

// export const Contact = () => {
//     //   const { formData, handleChange, handleSubmit } = useContactForm(() => {
//     //     alert("¡Mensaje enviado desde Contact!");
//     //   });

//     return (
//         <>
//             <section className="contact-hero">
//                 <div className="contact-fullpage-hero-title">
//                     <h1 className="contact-hero-title">Contacto</h1>
//                 </div>
//                 <div className="contact-fullpage-hero-title-description">
//                     <p>¿Querés potenciar tu equipo y escalar tu negocio sin perder tu esencia? <br />
//                         Completá el formulario y conversemos sobre cómo desde gen HR podemos acompañarte.</p>
//                 </div>
//             </section>
//             <Waves marginTop={-80} marginBottom={-55} />
//             <section className="contact-section full-page">
//                 <div className="contact-container full-page">
//                     {/* titulo y subtitulo */}
//                     <h2 className="contact-title full-page left">Hablemos</h2>
//                     <p className="contact-subtitle full-page left">
//                         Escribinos y coordinamos una llamada.
//                     </p>

//                     <form className="contact-form full-page">
//                         {/* nombre y email */}
//                         <div className="form-row two-columns">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Tu Nombre"
//                                 required
//                             />
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Tu@empresa.com"
//                                 required
//                             />
//                         </div>

//                         {/* empresa y telefono */}
//                         <div className="form-row two-columns">
//                             <input
//                                 type="text"
//                                 name="company"
//                                 placeholder="Nombre de la empresa"
//                                 required
//                             />
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 placeholder="011 ..."
//                             />
//                         </div>

//                         {/* titulo en q ayudamos */}
//                         <p className="input-label left">¿En qué te ayudamos?</p>

//                         {/* cuerpo de mensaje */}
//                         <textarea
//                             name="message"
//                             placeholder="Contanos brevemente tu necesidad"
//                             required
//                         />

//                         {/* politicas de privacidad */}
//                         <div className="form-privacy left">
//                             <input type="checkbox" id="privacy" required />
//                             <label htmlFor="privacy">
//                                 Acepto las <a href="https://www.privacypolicies.com/live/5a9b87e7-c8e8-41bc-910e-a2e992d6034b" target="_blank" rel="noopener noreferrer">Políticas de Privacidad</a>
//                             </label>
//                         </div>

//                         {/* boton y texto fiinal */}
//                         <div className="form-footer left">
//                             <button type="submit" className="contact-btn">
//                                 Enviar
//                             </button>
//                             <p className="contact-extra">
//                                 También podés escribirnos a <a href="mailto:hola@genhr.com.ar">hola@genhr.com.ar</a> o por <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>.
//                             </p>
//                         </div>
//                     </form>
//                 </div>
//             </section>

//         </>
//     );
// };
import { useState } from "react";
import "../../styles/pages/contactForm.css";
import Waves from "../Waves";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import LoadingButton from "../LoadingButton";

const API_URL = import.meta.env.VITE_API_URL || "https://genhr-backend.onrender.com";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacy) {
      Swal.fire({
        title: "Oops...",
        text: "Debés aceptar las políticas de privacidad para enviar el formulario.",
        icon: "warning",
        confirmButtonColor: "#CDF26A",
      });
      return;
    }

    const cleanPhone = formData.phone.replace(/[^\d+]/g, "");
    if (!/^\+?\d{8,15}$/.test(cleanPhone)) {
      Swal.fire({
        title: "Teléfono inválido",
        text: "Por favor ingresá un número de teléfono válido, ej: +54 11 12345678",
        icon: "warning",
        confirmButtonColor: "#CDF26A",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error en el envío");

      // Confeti
      confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 },
        colors: ["#CDF26A", "#ffffff", "#FFD700"],
      });

      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarnos. Te responderemos pronto.",
        icon: "success",
        confirmButtonColor: "#CDF26A",
        confirmButtonText: "¡Genial!",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        privacy: false,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar el mensaje. Por favor, intentá nuevamente.",
        icon: "error",
        confirmButtonColor: "#CDF26A",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-hero">
        <div className="contact-fullpage-hero-title">
          <h1 className="contact-hero-title">Contacto</h1>
        </div>
        <div className="contact-fullpage-hero-title-description">
          <p>
            ¿Querés potenciar tu equipo y escalar tu negocio sin perder tu esencia? <br />
            Completá el formulario y conversemos sobre cómo desde gen HR podemos acompañarte.
          </p>
        </div>
      </section>

      <Waves marginTop={-80} marginBottom={-55} />

      <section className="contact-section full-page">
        <div className="contact-container full-page">
          <h2 className="contact-title full-page left">Hablemos</h2>
          <p className="contact-subtitle full-page left">Escribinos y coordinamos una llamada.</p>

          <form className="contact-form full-page" onSubmit={handleSubmit}>
            <div className="form-row two-columns">
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Tu@empresa.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-row two-columns">
              <input
                type="text"
                name="company"
                placeholder="Nombre de la empresa"
                required
                value={formData.company}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="011 ..."
                value={formData.phone}
                onChange={handleChange}
                title="Ingresá un número de teléfono válido, ej: +54 11 12345678"
                required
              />
            </div>

            <p className="input-label left">¿En qué te ayudamos?</p>
            <textarea
              name="message"
              placeholder="Contanos brevemente tu necesidad"
              required
              value={formData.message}
              onChange={handleChange}
            />

            <div className="form-privacy left">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                required
              />
              <label htmlFor="privacy">
                Acepto las{" "}
                <a
                  href="https://www.privacypolicies.com/live/5a9b87e7-c8e8-41bc-910e-a2e992d6034b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Políticas de Privacidad
                </a>
              </label>
            </div>

            <div className="form-footer left">
              <LoadingButton
                type="submit"
                className="contact-btn"
                isLoading={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </LoadingButton>
              <p className="contact-extra">
                También podés escribirnos a <a href="mailto:hola@genhr.com.ar">hola@genhr.com</a> o por{" "}
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
