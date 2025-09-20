import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Lightning   } from "@phosphor-icons/react";
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
              <Lightning   size={24} weight="bold" color="#CDF26A"  />
            </NavLink>
          </li>
          <li>
            <NavLink to="/conocenos" className={({ isActive }) => isActive ? "active-link" : ""}>
              CONOCENOS
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" className={({ isActive }) => isActive ? "active-link" : ""}>
              SERVICIOS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? "active-link" : ""}>
              CONTACTO
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "active-link" : ""}>
              BLOG
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
              <Lightning   size={24} weight="bold" color="#CDF26A" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "active-link" : ""}>
              SERVICIOS
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "active-link" : ""}>
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "active-link" : ""}>
              CONTACTO
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
