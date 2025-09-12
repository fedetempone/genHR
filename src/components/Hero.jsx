import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../styles/hero.css";
import "../styles/waves.css";
import Waves from "./Waves";

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
              src="/img/logoHeroTransparentGreen.png"
              alt="Logo genHR"
              className="hero-logo"
            />
            <div ref={shadowRef} className="logo-shadow"></div>
          </div>

          <div className="hero-text">
            <h1>genHR</h1>
            <p>
              Somos el socio estratégico de startups y pymes en crecimiento, acompañándolas en sus procesos de transformación sin que pierdan su esencia.
              <br />
              Diseñamos soluciones de gestión del talento a medida, combinando experiencia en RRHH, metodologías ágiles y un enfoque cercano que asegura impacto real en tus equipos.
              <br />
              Creemos en la conexión entre el potencial único de cada persona y las oportunidades que hacen crecer a los negocios. Sabemos lo desafiante que es el mercado actual, y justamente eso nos motiva a estar a tu lado: para que tu energía se enfoque en hacer crecer tu empresa, mientras nosotros potenciamos a tu equipo.
            </p>
            <button className="css-button-gradient--6 button-view-more-hero-section">VER MÁS</button>
          </div>
        </div>

        <div className="waves-wrapper">
          <Waves />
        </div>
      </div>
    </section>
  );
};

export default Hero;

