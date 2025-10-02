import AboutUs from "./AboutUs";
import { Helmet } from "react-helmet-async";
import OurValues from "../OurValues";
import "../../styles/pages/meetUs.css";
import Waves from "../Waves";

const MeetUs = () => {
  return (
    <>
      <Helmet>
        <title>Conocenos | GenHR</title>
        <meta
          name="description"
          content="Conocé a nuestro equipo y nuestros valores. Descubrí cómo trabajamos en gen HR para acompañar a tu empresa."
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
      <OurValues />
    </>
  );
};

export default MeetUs;
