import "../styles/pages/contactForm.css";

export const ContactForm = () => {
  // const { formData, handleChange, handleSubmit } = useContactForm(() => {
  //   alert("¡Mensaje enviado desde Home!");
  // });  

  return (
    <section className="home-contact-section">
      <div className="home-contact-container">
        <h2 className="home-contact-title">
          ¿Tenés dudas o necesitás más información?
        </h2>
        <p className="home-contact-subtitle">
          Completá el formulario y nos pondremos en contacto con vos a la brevedad.
        </p>
        <form className="home-contact-form" >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Mail"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            // value={formData.message}
            // onChange={handleChange}
            required
          />
          <button type="submit" className="css-button-gradient--6">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};
