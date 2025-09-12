import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleNavLinkClick = () => setIsMenuOpen(false);

  // bloquear scroll cuando abro menu
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // cerrar menu si la ventana se pasa de los 999px 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 999 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* logo */}
        <Link to="/" className="logo-link">
          <img src="/img/logogenHR.png" alt="GEN-HR Logo" className="logo-img" />
        </Link>

        {/* links desktop */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink to="/submit-cv" className={({ isActive }) => isActive ? "active-link" : ""}>
              DEJANOS TU CV
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "active-link" : ""}>
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>
              CONTACTO
            </NavLink>
          </li>
        </ul>

        {/* boton menu hamburugesa mobile */}
        <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* overlay de menu mobile */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <NavLink to="/" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "active-link" : ""}>
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink to="/submit-cv" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "active-link" : ""}>
              DEJANOS TU CV
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "active-link" : ""}>
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "active-link" : ""}>
              CONTACTO
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
