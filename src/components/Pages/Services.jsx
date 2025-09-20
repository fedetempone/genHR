import { useEffect } from "react";
import { Link } from "react-router-dom";
import servicesData from "../../data/serviceData";
import {
  Target,
  UserCheck,
  RocketLaunch,
  HandArrowUp,
  UserCircleGear,
  UsersThree,
  SignOut,
} from "@phosphor-icons/react";
import Waves from "../Waves";
import "../../styles/pages/services.css";

const icons = {
  "atraccion-y-marca-empleadora": <Target size={40} weight="fill" color="#CDF26A" />,
  "seleccion-de-talento": <UserCheck size={40} weight="fill" color="#CDF26A" />,
  onboarding: <RocketLaunch size={40} weight="fill" color="#CDF26A" />,
  "gestion-y-desarrollo": <HandArrowUp size={40} weight="fill" color="#CDF26A" />,
  liderazgo: <UserCircleGear size={40} weight="fill" color="#CDF26A" />,
  "cultura-y-clima-organizacional": <UsersThree size={40} weight="fill" color="#CDF26A" />,
  "offboarding-humanizado": <SignOut size={40} weight="fill" color="#CDF26A" />,
};

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.index * 100;
            setTimeout(() => {
              entry.target.classList.add("show");
            }, delay);
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card, index) => {
      card.dataset.index = index;
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="services-hero-section">
        <div className="services-hero-title-container">
          <h1 className="services-hero-title">Nuestros Servicios</h1>
        </div>
      </section>
      <Waves marginTop={-80} marginBottom={-55} />

      {/* SERVICES GRID */}
      <section className="our-services">
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{icons[service.id]}</div>
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
              <Link to={`/servicios/${service.id}`}>
                <button className="css-button-gradient--6 btn-meetus-services">
                  Ver Más
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* MODALIDAD DE TRABAJO */}
      <section className="services-modalidad-section">
        <h2>Modalidad de trabajo</h2>
        <ul className="modalidad-list">
          <li>
            <strong>Acompañamiento flexible:</strong>
            <span className="modalidad-text">
              sesiones específicas de asesoramiento y diseño de temas concretos.
            </span>
          </li>
          <li>
            <strong>Proyectos end to end:</strong>
            <span className="modalidad-text">
              soluciones concretas con objetivos y plazos definidos.
            </span>
          </li>
          <li>
            <strong>Bonus mensual:</strong>
            <span className="modalidad-text">
              acompañamiento continuo. Nos integramos a tu equipo como un partner estratégico de RRHH, sin sumar estructura interna.
            </span>
          </li>
        </ul>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="services-por-que-section">
        <h2>¿Por qué Elegirnos?</h2>
        <ul className="por-que-list">
          <li>Entendemos a pymes y startups.</li>
          <li>Combinamos estrategia + acción.</li>
          <li>Soluciones simples y aplicables.</li>
          <li>Nos integramos como parte del equipo.</li>
        </ul>
      </section>
    </>
  );
};

export default Services;
