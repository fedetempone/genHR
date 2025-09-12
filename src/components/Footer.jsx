import "../styles/footer.css"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          {/* logo */}
          <div className="footer-logo-container">
            <img src="/img/logogenHR.png" alt="GenHR Logo" className="footer-logo" />
          </div>

          {/* email y redes */}
          <div className="footer-contact">
            <p className="footer-email">contacto@genhr.com</p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* links */}
        <div className="footer-right">
          <ul className="footer-links">
            <li><a target="blank" href="https://www.privacypolicies.com/live/5a9b87e7-c8e8-41bc-910e-a2e992d6034b">Políticas de Privacidad</a></li>
            <Link to="/#our-values">Nuestros Valores</Link>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>
      </div>

      <hr />

      {/* copyright */}
      <div className="footer-bottom">
        <p>
          © 2025 genHR. <br />
          Design by <a href="https://github.com/fedetempone" target="_blank" rel="noopener noreferrer">FedeTempone</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
