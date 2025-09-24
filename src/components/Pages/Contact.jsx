import "../../styles/pages/contactForm.css";
import Waves from "../Waves";

export const Contact = () => {
    //   const { formData, handleChange, handleSubmit } = useContactForm(() => {
    //     alert("¡Mensaje enviado desde Contact!");
    //   });

    return (
        <>
            <section className="contact-hero">
                <div className="contact-fullpage-hero-title">
                    <h1 className="contact-hero-title">Contacto</h1>
                </div>
                <div className="contact-fullpage-hero-title-description">
                    <p>¿Querés potenciar tu equipo y escalar tu negocio sin perder tu esencia? <br />
                        Completá el formulario y conversemos sobre cómo desde gen HR podemos acompañarte.</p>
                </div>
            </section>
            <Waves marginTop={-80} marginBottom={-55} />
            <section className="contact-section full-page">
                <div className="contact-container full-page">
                    {/* titulo y subtitulo */}
                    <h2 className="contact-title full-page left">Hablemos</h2>
                    <p className="contact-subtitle full-page left">
                        Escribinos y coordinamos una llamada.
                    </p>

                    <form className="contact-form full-page">
                        {/* nombre y email */}
                        <div className="form-row two-columns">
                            <input
                                type="text"
                                name="name"
                                placeholder="Tu Nombre"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Tu@empresa.com"
                                required
                            />
                        </div>

                        {/* empresa y telefono */}
                        <div className="form-row two-columns">
                            <input
                                type="text"
                                name="company"
                                placeholder="Nombre de la empresa"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="011 ..."
                            />
                        </div>

                        {/* titulo en q ayudamos */}
                        <p className="input-label left">¿En qué te ayudamos?</p>

                        {/* cuerpo de mensaje */}
                        <textarea
                            name="message"
                            placeholder="Contanos brevemente tu necesidad"
                            required
                        />

                        {/* politicas de privacidad */}
                        <div className="form-privacy left">
                            <input type="checkbox" id="privacy" required />
                            <label htmlFor="privacy">
                                Acepto las <a href="https://www.privacypolicies.com/live/5a9b87e7-c8e8-41bc-910e-a2e992d6034b" target="_blank" rel="noopener noreferrer">Políticas de Privacidad</a>
                            </label>
                        </div>

                        {/* boton y texto fiinal */}
                        <div className="form-footer left">
                            <button type="submit" className="contact-btn">
                                Enviar
                            </button>
                            <p className="contact-extra">
                                También podés escribirnos a <a href="mailto:hola@genhr.com.ar">hola@genhr.com.ar</a> o por <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>.
                            </p>
                        </div>
                    </form>
                </div>
            </section>

        </>
    );
};
