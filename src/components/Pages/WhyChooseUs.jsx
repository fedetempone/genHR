import { CheckCircle } from "@phosphor-icons/react";
import "../../styles/pages/whyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="services-por-que-section">
      <h2>¿Por qué Elegirnos?</h2>
      <ul className="por-que-list">
        <li>
          <CheckCircle size={24} weight="fill" color="#CDF26A" />
          <span>Entendemos a pymes y startups.</span>
        </li>
        <li>
          <CheckCircle size={24} weight="fill" color="#CDF26A" />
          <span>Combinamos estrategia + acción.</span>
        </li>
        <li>
          <CheckCircle size={24} weight="fill" color="#CDF26A" />
          <span>Soluciones simples y aplicables.</span>
        </li>
        <li>
          <CheckCircle size={24} weight="fill" color="#CDF26A" />
          <span>Nos integramos como parte del equipo.</span>
        </li>
      </ul>
    </section>
  );
};

export default WhyChooseUs;
