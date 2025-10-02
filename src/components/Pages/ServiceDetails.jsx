import { useParams } from "react-router-dom";
import { CheckCircle } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";
import servicesData from "../../data/serviceData";
import Waves from '../Waves';
import "../../styles/pages/serviceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <h2>Servicio no encontrado</h2>;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | GenHR</title>
        <meta
          name="description"
          content={service.subtitle || "Conocé cómo trabajamos en gen HR para acompañar a tu empresa."}
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
      <section className="service-details-hero-section">
        <div className="service-details-fullpage-hero-title">
          <h1 className="service-details-hero-title">{service.title}</h1>
        </div>
      </section>
      <Waves marginTop={-80} marginBottom={-55} />

      <section className="service-details">
        <h2>Cómo lo hacemos:</h2>
        <ul className="details-list">
          {service.how.map((item, i) => (
            <li key={i}>
              <CheckCircle size={24} weight="fill" color="#CDF26A" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2>Qué logramos:</h2>
        <ul className="details-list">
          {service.achieve.map((item, i) => (
            <li key={i}>
              <CheckCircle size={24} weight="fill" color="#CDF26A" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ServiceDetails;
