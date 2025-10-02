import { Helmet, HelmetProvider } from "react-helmet-async";
import Nav from "./Nav";
import Footer from "./Footer";
import IconScrollToTop from './IconScrollTop'

const Layout = ({ children, title = "Gen-HR | Consultora" }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="Gen-HR: Consultora de RRHH especializada en talento y desarrollo profesional."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* navbar */}
      <Nav />

      {/* contenido de la pagina */}
      <main>{children}</main>

      {/* footer */}
      <Footer />
      {/* ICON SCROLL TO TOP */}
      <IconScrollToTop /> 
    </>
  );
};

export default Layout;
