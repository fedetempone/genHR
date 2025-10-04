import { useState } from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/pages/contactForm.css";
import Waves from "../Waves";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import LoadingButton from "../LoadingButton";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    privacy: false,
  });

  const [loading, setLoading] = useState(false);

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
        text: "Debés aceptar las políticas de privacidad.",
        icon: "warning",
        confirmButtonColor: "#CDF26A",
      });
      return;
    }

    const cleanPhone = formData.phone.replace(/[^\d+]/g, "");
    if (!/^\+?\d{8,15}$/.test(cleanPhone)) {
      Swal.fire({
        title: "Teléfono inválido",
        text: "Por favor ingresá un número válido",
        icon: "warning",
        confirmButtonColor: "#CDF26A",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
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
        });

        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          privacy: false,
        });
      } else {
        throw new Error("No se pudo enviar");
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar el mensaje.",
        icon: "error",
        confirmButtonColor: "#CDF26A",
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacto | GenHR</title>
        <meta
          name="description"
          content="Contactanos para potenciar tu equipo y escalar tu negocio con gen HR. Completá el formulario y conversemos."
        />
        <link
          rel="me"
          href="https://www.linkedin.com/company/somosgen-hr/"
          title="LinkedIn"
        />
        <link
          rel="me"
          href="https://www.instagram.com/somosgen.hr/"
          title="Instagram"
        />
      </Helmet>
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
          <p className="contact-subtitle full-page left">
            Escribinos y coordinamos una llamada.
          </p>

          <form className="contact-form full-page" onSubmit={handleSubmit}>
            <div className="form-row two-columns">
              <input
                type="text"
                name="name"
                placeholder="Nombre y Apellido"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-row two-columns">
              <input
                type="text"
                name="company"
                placeholder="Empresa"
                required
                value={formData.company}
                onChange={handleChange}
                disabled={loading}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Tu numero de teléfono"
                value={formData.phone}
                onChange={handleChange}
                title="Ingresá un número de teléfono válido, ej: +54 11 12345678"
                required
                disabled={loading}
              />
            </div>

            <p className="input-label left">¿En qué te ayudamos?</p>
            <textarea
              name="message"
              placeholder=""
              required
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
            />

            <div className="form-privacy left">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                required
                disabled={loading}
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
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Enviar</span>
              </LoadingButton>

              <p className="contact-extra">
                También podés escribirnos a{" "}
                <a href="mailto:hola@genhr.com.ar">hola@genhr.com</a> o por{" "}
                <a
                  href="https://www.instagram.com/somosgen.hr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
