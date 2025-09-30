import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WorkModality from "./WorkModality";
import WhyChooseUs from "./WhyChooseUs";
import "../../styles/pages/services.css";
import {
  Target,
  UserCheck,
  RocketLaunch,
  HandArrowUp,
  UserCircleGear,
  UsersThree,
  SignOut,
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

  // parallax
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
      {/* HERO */}
      <section className="services-hero-section">
        <div className="services-hero-title-container">
          <h1 className="services-hero-title">Nuestros Servicios</h1>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="our-services">
        <div className="values-wrapper">
          <div className="parallax-inner" ref={parallaxRef}>
            <div className="services-grid">
              {/* PRIMERA FILA de 4 tarjetas */}
              {[
                "atraccion-y-marca-empleadora",
                "seleccion-de-talento",
                "onboarding",
                "liderazgo",
              ].map((key, i) => (
                <motion.div
                  key={key}
                  className="service-card value-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={cardVariants}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                >
                  <div className="icon-title">
                    <span className="icon-wrapper">{icons[key]}</span>
                    <h3>
                      {key === "atraccion-y-marca-empleadora"
                        ? "Atracción y Marca Empleadora"
                        : key === "seleccion-de-talento"
                        ? "Selección de Talento"
                        : key === "onboarding"
                        ? "Onboarding"
                        : "Liderazgo"}
                    </h3>
                  </div>
                  <p>
                    {key === "atraccion-y-marca-empleadora"
                      ? "Diseñamos estrategias para que tu empresa sea atractiva para el talento correcto."
                      : key === "seleccion-de-talento"
                      ? "Procesos de selección ágiles, profesionalizados y con foco en la experiencia humana."
                      : key === "onboarding"
                      ? "Diseñamos experiencias de incorporación que facilitan la adaptación y logran buenos resultados."
                      : "Formamos y acompañamos a líderes para que gestionen con impacto."}
                  </p>
                  {/* link + boton */}
                  <Link to={`/servicios/${key}`}>
                    <button className="css-button-gradient--6 btn-meetus-services">
                      Ver Más
                    </button>
                  </Link>
                </motion.div>
              ))}

              {/* SEGUNDA FILA de 3 tarjetas*/}
              <div className="services-row-two">
                {[
                  "cultura-y-clima-organizacional",
                  "offboarding-humanizado",
                  "gestion-y-desarrollo",
                ].map((key, i) => (
                  <motion.div
                    key={key}
                    className="service-card value-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={cardVariants}
                    transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="icon-title">
                      <span className="icon-wrapper">{icons[key]}</span>
                      <h3>
                        {key === "cultura-y-clima-organizacional"
                          ? "Cultura y Clima Organizacional"
                          : key === "offboarding-humanizado"
                          ? "Offboarding Humanizado"
                          : "Gestión y Desarrollo"}
                      </h3>
                    </div>
                    <p>
                      {key === "cultura-y-clima-organizacional"
                        ? "Diagnosticamos y fortalecemos la cultura para que sea vivida en el día a día."
                        : key === "offboarding-humanizado"
                        ? "Diseñamos procesos de salida claros y respetuosos."
                        : "Diseñamos herramientas simples para potenciar y retener talento."}
                    </p>
                    {/* link + boton */}
                    <Link to={`/servicios/${key}`}>
                      <button className="css-button-gradient--6 btn-meetus-services">
                        Ver Más
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <WorkModality/>
      <WhyChooseUs/>
    </>
  );
};

export default Services;
