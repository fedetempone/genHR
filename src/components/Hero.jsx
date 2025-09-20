import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../styles/hero.css";
import "../styles/waves.css";
import Waves from "./Waves";
import { Link } from "react-router-dom";

const Hero = () => {
  const logoRef = useRef(null);
  const shadowRef = useRef(null);

  useEffect(() => {
    if (!logoRef.current || !shadowRef.current) return;

    // animacion gsap, como una flotacion suave
    gsap.to(logoRef.current, {
      y: -25,
      rotationX: 5,
      rotationY: -5,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // animacion de la sombra
    gsap.to(shadowRef.current, {
      scaleX: 1.5,
      scaleY: 0.8,
      opacity: 0.2,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content" style={{ opacity: 1 }}>
        <div className="hero-header">
          <div className="logo-wrapper">
            <img
              ref={logoRef}
              src="/img/logoHeroTransparentWhite.png"
              alt="Logo genHR"
              className="hero-logo"
            />
            <div ref={shadowRef} className="logo-shadow"></div>
          </div>
          {/* DIV CON EL CODIGO DE LA IMAGEN */}
          <div className="quote-container">
            {/* <span className="quote-mark-left">“</span> */}
            {/* <div className="quote-text">
              Equipos que la rompen,<br />
              marcas que <strong>inspiran</strong>.
            </div> */}

            <div className="quote-text">
              <span className="quote-target">E</span>quipos que la rompen,<br />
              marcas que <strong>inspiran</strong>.
            </div>
            <span className="quote-mark-right">*</span>
            <Link to="/conocenos" className="css-button-gradient--6 button-view-more-hero-section">
              VER MÁS
            </Link>
          </div>
        </div>
        <div className="waves-wrapper">
          <Waves marginTop={100} />
        </div>
      </div>
    </section>
  );
};

export default Hero;