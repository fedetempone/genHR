// import { Link } from "react-router-dom";
// import AboutUs from "./AboutUs";
// import OurValues from "../OurValues";
// import servicesData from "../../data/serviceData";
// import {
//   Target,
//   UserCheck,
//   RocketLaunch,
//   HandArrowUp,
//   UserCircleGear,
//   UsersThree,
//   SignOut,
// } from "@phosphor-icons/react";
// import "../../styles/pages/meetUs.css";
// import Waves from "../Waves";

// const icons = {
//   "atraccion-y-marca-empleadora": <Target size={40} weight="fill" color="#CDF26A" />,
//   "seleccion-de-talento": <UserCheck size={40} weight="fill" color="#CDF26A" />,
//   "onboarding": <RocketLaunch size={40} weight="fill" color="#CDF26A" />,
//   "gestion-y-desarrollo": <HandArrowUp size={40} weight="fill" color="#CDF26A" />,
//   "liderazgo": <UserCircleGear size={40} weight="fill" color="#CDF26A" />,
//   "cultura-y-clima-organizacional": <UsersThree size={40} weight="fill" color="#CDF26A" />,
//   "offboarding-humanizado": <SignOut size={40} weight="fill" color="#CDF26A" />,
// };

// const MeetUs = () => {
//   return (
//     <>
//       {/* HERO SECTION */}
//       <section className="meetus-hero-section">
//         <div className="meetus-hero-title-container">
//           <h1 className="meetus-hero-title">Conocenos</h1>
//         </div>
//       </section>
//       <Waves marginTop={-80} marginBottom={-55} />

//       {/* ABOUT US */}
//       <section className="meetus-about-section">
//         <AboutUs />
//       </section>

//       {/* OUR VALUES */}
//       <section className="meetus-values-section">
//         <OurValues />
//       </section>

//       {/* SERVICES */}
//       <section className="our-services">
//         <h1>Nuestros Servicios</h1>
//         <div className="services-grid">
//           {servicesData.map((service) => (
//             <div className="service-card" key={service.id}>
//               <div className="service-icon">{icons[service.id]}</div>
//               <h3>{service.title}</h3>
//               <p>{service.subtitle}</p>
//               <Link to={`/conocenos/${service.id}`}>
//                 <button className="css-button-gradient--6 btn-meetus-services">
//                   Ver Más
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* MODALIDAD DE TRABAJO */}
//       <section className="meetus-modalidad-section">
//         <h2>Modalidad de trabajo</h2>
//         <ul className="modalidad-list">
//           <li>
//             <strong>Acompañamiento flexible:</strong>
//             <span className="modalidad-text"> sesiones específicas de asesoramiento y diseño de temas concretos.</span>
//           </li>
//           <li>
//             <strong>Proyectos end to end:</strong>
//             <span className="modalidad-text"> soluciones concretas con objetivos y plazos definidos.</span>
//           </li>
//           <li>
//             <strong>Bonus mensual:</strong>
//             <span className="modalidad-text"> acompañamiento continuo. Nos integramos a tu equipo como un partner estratégico de RRHH, sin sumar estructura interna.</span>
//           </li>
//         </ul>
//       </section>

//       {/* POR QUÉ ELEGIRNOS */}
//       <section className="meetus-por-que-section">
//         <h2>¿Por qué Elegirnos?</h2>
//         <ul className="por-que-list">
//           <li>Entendemos a pymes y startups.</li>
//           <li>Combinamos estrategia + acción.</li>
//           <li>Soluciones simples y aplicables.</li>
//           <li>Nos integramos como parte del equipo.</li>
//         </ul>
//       </section>
//     </>
//   );
// };

// export default MeetUs;


import AboutUs from "./AboutUs";
import OurValues from "../OurValues";
import "../../styles/pages/meetUs.css";
import Waves from "../Waves";

const MeetUs = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="meetus-hero-section">
        <div className="meetus-hero-title-container">
          <h1 className="meetus-hero-title">Conocenos</h1>
        </div>
      </section>
      <Waves marginTop={-80} marginBottom={-55} />

      {/* ABOUT US */}
      <section className="meetus-about-section">
        <AboutUs />
      </section>

      {/* OUR VALUES */}
      <section className="meetus-values-section">
        <OurValues />
      </section>
    </>
  );
};

export default MeetUs;
