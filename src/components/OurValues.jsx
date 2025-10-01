import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Target,
  UsersThree,
  RocketLaunch,
  Handshake,
  Lightbulb,
} from "@phosphor-icons/react";
import "../styles/ourValues.css";

const values = [
  {
    name: "Enfoque en resultados",
    description:
      "Trabajamos con objetivos claros y medibles para asegurar un impacto real y sostenible.",
    icon: <Target size={40} weight="fill" color="#CDF26A" />,
  },
  {
    name: "Colaboración",
    description:
      "Creemos en el poder del trabajo en equipo para alcanzar logros más grandes.",
    icon: <UsersThree size={40} weight="fill" color="#CDF26A" />,
  },
  {
    name: "Innovación",
    description:
      "Buscamos nuevas ideas y soluciones creativas para los desafíos de hoy y mañana.",
    icon: <RocketLaunch size={40} weight="fill" color="#CDF26A" />,
  },
  {
    name: "Compromiso",
    description:
      "Estamos dedicados a acompañar a nuestros clientes y equipos en cada paso del camino.",
    icon: <Handshake size={40} weight="fill" color="#CDF26A" />,
  },
  {
    name: "Transparencia",
    description:
      "Valoramos la honestidad y la claridad en todas nuestras acciones y decisiones.",
    icon: <Lightbulb size={40} weight="fill" color="#CDF26A" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const OurValues = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="ourValues-container">
      <h2 className="ourValues-title">Nuestros Valores</h2>

      <div className="values-wrapper">
        <div className="values-placeholder">
          <div className="values-grid">
            {values.map((val, i) => (
              <motion.div
                key={val.name}
                className="value-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={cardVariants}
                transition={{
                  delay: i * 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <div className="icon-title">
                  <div className="icon-wrapper">{val.icon}</div>
                  <h3>{val.name}</h3>
                </div>
                <p>{val.description}</p>
              </motion.div>
            ))}

            <motion.div
              className="value-card cta-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3>¿Compartís nuestros valores?</h3>
              <p>
                Nos encantaría conocerte. Si sentís afinidad con nuestra forma
                de trabajar, ponete en contacto con nosotros.
              </p>
              <a
                href="/contacto"
                className="cta-button css-button-gradient--6 btn-our-values-cards"
              >
                Contáctanos
              </a>
            </motion.div>
          </div>
        </div>

        <div className="parallax-inner" ref={parallaxRef}>
          <div className="values-grid" />
        </div>
      </div>
    </section>
  );
};

export default OurValues;
