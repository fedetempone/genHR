import { useEffect, useRef } from "react";
import "../../styles/pages/whyChooseUs.css";

const items = [
  {
    title: "Hablamos el idioma de las pymes y startups:",
    description:
      "Sabemos lo que significa liderar con recursos limitados y mucho por hacer.",
    img: "/img/whychooseusspeak.png",
  },
  {
    title: "Combinamos estrategia y acción rápida:",
    description:
      "Nada de diagnósticos eternos sin resultados: planificamos y ejecutamos rápido.",
    img: "/img/whychooseusaction.png",
  },
  {
    title: "Diseñamos soluciones:",
    description:
      "Soluciones aplicables que generan impacto real en tu equipo. Creamos ideas prácticas que generan resultados reales en tu equipo.",
    img: "/img/whychooseussolutions.png",
  },
  {
    title: "Somos partners, no consultores externos:",
    description:
      "Nos involucramos en tu día a día, trabajando a la par de tu equipo.",
    img: "/img/whychooseuspartners.png",
  },
  {
    title: "Respaldo garantizado:",
    description:
      "Ofrecemos garantía de 90 días en nuestros procesos de selección, para que cada contratación sea confiable.",
    img: "/img/whychooseguaranteed.png",
  },
  {
    title: "Conexión con el mercado:",
    description:
      "Accedemos a una amplia red de talentos y empresas, asegurando visibilidad y alcance en múltiples sectores.",
    img: "/img/whychooseconnectionmarket.png",
  },
];

const WhyChooseUs = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-choose-us">
      <h2>¿ Por qué elegirnos ?</h2>
      <div className="items-container">
        {items.map((item, i) => (
          <div
            key={i}
            className={`item-row ${i % 2 === 0 ? "img-left" : "img-right"}`}
            ref={(el) => (itemRefs.current[i] = el)}
          >
            <div className="item-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="item-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

