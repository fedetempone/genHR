import { CheckCircle } from "@phosphor-icons/react";
import "../../styles/pages/workModality.css";

const WorkModality = () => {
  return (
    <section className="services-modalidad-section">
      <h2>Modalidad de trabajo</h2>
      <ul className="modalidad-list">
        <li>
          <CheckCircle size={24} weight="fill" color="#CDF26A" />
          <span>
            <strong>Acompañamiento flexible:</strong> sesiones específicas de
            asesoramiento y diseño de temas concretos.
          </span>
        </li>
        <li>
          <CheckCircle size={24} weight="fill" color="#CDF26A" />
          <span>
            <strong>Proyectos end to end:</strong> soluciones concretas con
            objetivos y plazos definidos.
          </span>
        </li>
        <li>
          <CheckCircle size={24} weight="fill" color="#CDF26A" />
          <span>
            <strong>Bonus mensual:</strong> acompañamiento continuo. Nos
            integramos a tu equipo como un partner estratégico de RRHH, sin
            sumar estructura interna.
          </span>
        </li>
      </ul>
    </section>
  );
};

export default WorkModality;
