import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import WorkModality from "./WorkModality";
import WhyChooseUs from "./WhyChooseUs";
import Waves from '../Waves'
import "../../styles/pages/services.css";
import {
  Target,
  UserCheck,
  RocketLaunch,
  HandArrowUp,
  UserCircleGear,
  UsersThree,
  SignOut,
  Lightning,
  Asterisk,
} from "@phosphor-icons/react";

const icons = {
  "atraccion-y-marca-empleadora": <Target size={40} weight="fill" color="#CDF26A" />,
  "seleccion-de-talento": <UserCheck size={40} weight="fill" color="#CDF26A" />,
  onboarding: <RocketLaunch size={40} weight="fill" color="#CDF26A" />,
  "gestion-y-desarrollo": <HandArrowUp size={40} weight="fill" color="#CDF26A" />,
  liderazgo: <UserCircleGear size={40} weight="fill" color="#CDF26A" />,
  "cultura-y-clima-organizacional": <UsersThree size={40} weight="fill" color="#CDF26A" />,
  "offboarding-humanizado": <SignOut size={40} weight="fill" color="#CDF26A" />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const parallaxRef = useRef(null);

  // parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.05}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Servicios | GenHR</title>
        <meta
          name="description"
          content="Conocé los servicios de GenHR: atracción de talento, onboarding, liderazgo, cultura organizacional y más."
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
      {/* HERO */}
      <section className="services-hero-section">
        <div className="services-hero-title-container">
          <h1 className="services-hero-title">Nuestros Servicios</h1>
        </div>
      </section>
      <Waves marginTop={-80} marginBottom={-55} />

      {/* SERVICES GRID */}
      <section className="services-grid-section">
        {/* icono decorativo arriba izquierda */}
        <Lightning
          size={200}
          weight="fill"
          color="#CDF26A"
          className="services-bg-icon top-left-icon"
        />

        {/* icono decorativo abajo derecha */}
        <Asterisk
          size={200}
          weight="regular"
          color="#B783EF"
          className="services-bg-icon bottom-right-icon"
        />

        <div className="services-values-wrapper">
          <div className="services-parallax-placeholder">
            <div className="services-grid">
              {[
                "atraccion-y-marca-empleadora",
                "seleccion-de-talento",
                "onboarding",
                "liderazgo",
                "cultura-y-clima-organizacional",
                "gestion-y-desarrollo",
                "offboarding-humanizado",
              ].map((key, i) => (
                <motion.div
                  key={key}
                  className="services-card services-value-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={cardVariants}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                >
                  <div className="services-icon-title">
                    <span className="services-icon-wrapper">{icons[key]}</span>
                    <h3>
                      {key === "atraccion-y-marca-empleadora"
                        ? "Atracción y Marca Empleadora"
                        : key === "seleccion-de-talento"
                          ? "Selección de Talento"
                          : key === "onboarding"
                            ? "Onboarding"
                            : key === "liderazgo"
                              ? "Liderazgo"
                              : key === "cultura-y-clima-organizacional"
                                ? "Cultura y Clima Organizacional"
                                : key === "offboarding-humanizado"
                                  ? "Offboarding Humanizado"
                                  : "Gestión y Desarrollo"}
                    </h3>
                  </div>
                  <p>
                    {key === "atraccion-y-marca-empleadora"
                      ? "Diseñamos estrategias para que tu empresa sea atractiva para el talento correcto."
                      : key === "seleccion-de-talento"
                        ? "Procesos de selección ágiles, profesionalizados y con foco en la experiencia humana."
                        : key === "onboarding"
                          ? "Diseñamos experiencias de incorporación que facilitan la adaptación y logran buenos resultados."
                          : key === "liderazgo"
                            ? "Formamos y acompañamos a líderes para que gestionen con impacto."
                            : key === "cultura-y-clima-organizacional"
                              ? "Diagnosticamos y fortalecemos la cultura para que sea vivida en el día a día."
                              : key === "offboarding-humanizado"
                                ? "Diseñamos procesos de salida claros y respetuosos."
                                : "Diseñamos herramientas simples para potenciar y retener talento."}
                  </p>

                  <Link to={`/servicios/${key}`} key={key}>
                    <button className="service-button" style={{ "--clr": "#7808d0" }}>
                      <span className="service-button__icon-wrapper">
                        <svg
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="service-button__icon-svg"
                          width="10"
                        >
                          <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                          />
                        </svg>
                        <svg
                          viewBox="0 0 14 15"
                          fill="none"
                          width="10"
                          xmlns="http://www.w3.org/2000/svg"
                          className="service-button__icon-svg service-button__icon-svg--copy"
                        >
                          <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span className="service-button__text">Ver Más</span>
                    </button>
                  </Link>

                </motion.div>
              ))}

              {/* octava card */}
              <motion.div
                className="services-card services-value-card services-contact-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
              >
                <div className="services-icon-title eighth-card">
                  <h3>¿Listo para el Próximo Paso?</h3>
                </div>
                <p>
                  Si nuestros enfoques resuenan con tus objetivos, hablemos y definamos cómo potenciar tu talento.
                </p>
                <Link to="/contacto">
                  <button className="css-button-gradient--6">Contactános</button>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="services-parallax-inner" ref={parallaxRef}>
            <div className="services-grid">
            </div>
          </div>
        </div>
      </section>
      <WorkModality />
      <WhyChooseUs />
    </>
  );
};

export default Services;
