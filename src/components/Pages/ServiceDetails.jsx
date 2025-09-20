import { useParams } from "react-router-dom";
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
      <section className="service-details-hero-section">
        <div className="service-details-fullpage-hero-title">
          <h1 className="service-details-hero-title">{service.title}</h1>
        </div>
        <div className="service-details-fullpage-hero-title-description">
        </div>
      </section>
      <Waves marginTop={-80} marginBottom={-55} />

      <section className="service-details">
        <h2>Cómo lo hacemos:</h2>
        <ul>
          {service.how.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>Qué logramos:</h2>
        <ul>
          {service.achieve.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ServiceDetails;
