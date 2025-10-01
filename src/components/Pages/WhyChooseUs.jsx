// import { CheckCircle } from "@phosphor-icons/react";
// import "../../styles/pages/whyChooseUs.css";

// const WhyChooseUs = () => {
//   return (
//     <section className="services-por-que-section">
//       <h2>¿Por qué Elegirnos?</h2>
//       <ul className="por-que-list">
//         <li>
//           <CheckCircle size={24} weight="fill" color="#CDF26A" />
//           <span>Entendemos a pymes y startups.</span>
//         </li>
//         <li>
//           <CheckCircle size={24} weight="fill" color="#CDF26A" />
//           <span>Combinamos estrategia + acción.</span>
//         </li>
//         <li>
//           <CheckCircle size={24} weight="fill" color="#CDF26A" />
//           <span>Soluciones simples y aplicables.</span>
//         </li>
//         <li>
//           <CheckCircle size={24} weight="fill" color="#CDF26A" />
//           <span>Nos integramos como parte del equipo.</span>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default WhyChooseUs;
import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import "../../styles/pages/whyChooseUs.css";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

const WhyChooseUs = () => {
  const pathRef = useRef();
  const tlRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(window.innerWidth > 500);

  useEffect(() => {
    const shapes = [
      "M600,250c0,150-130,270-280,270S40,400,40,250,170-20,320-20,600,100,600,250z",
      // Círculo grande y centrado
      "M450,250c0,110-90,200-200,200S50,360,50,250s90-200,200-200S450,140,450,250z",

      // Variación ligeramente más alta
      "M430,220c-10,120-100,220-200,220S70,340,70,220s110-210,210-210S440,100,430,220z",
      // Elipse grande desplazada a la izquierda
      "M300,250c0,120-100,220-220,220S-140,370-140,250,80,30,200,30,300,130,300,250z",

      // Burbuja irregular izquierda
      "M220,100c80,100,40,300-100,360S-120,300-100,180,100-20,220,100z",

      // Forma vertical izquierda (tipo gota)
      "M250,0c-80,150-50,400-180,460S-200,300-150,120,100-140,250,0z",

      // Variación más ancha
      "M470,280c-20,100-110,160-220,160S50,380,30,280s100-180,220-180S490,180,470,280z",

      // Variación con bordes un poco más puntiagudos
      "M400,100c100,80,100,220,0,300s-220,100-300,0S0,100,100,0,300,20,400,100z",

      // Forma de burbuja, estirada verticalmente
      "M350,50c50,150-10,350-150,400S50,350,100,200,300-50,350,50z",

      // Curva amplia y suave
      "M480,250c-10,130-140,230-230,230S30,380,20,250s100-240,230-240S490,120,480,250z",

      // Forma que ocupa casi el 100% del alto
      "M490,250c-10,130-150,240-240,240S20,380,10,250s140-240,240-240S500,120,490,250z",

      // Más asimétrico
      "M400,50c80,100,0,350-150,400S0,300,50,150,320-50,400,50z",

      // Forma redonda que se mueve más a la derecha
      "M480,200c-30,150-150,250-250,250S50,350,20,200s150-250,250-250S510,50,480,200z",

      // Forma grande y con más "pico"
      "M300,20c80,100,50,300-100,400S0,350,0,200s150-250,300-180z",

      // Elipse inclinada (horizontal, ocupando casi todo)
      "M480,260c-20,120-180,230-300,200S-20,300,20,180s160-210,280-180S500,140,480,260z",

      // Burbuja inclinada a la izquierda
      "M400,80c100,100,60,300-80,370S0,300,20,180,300-20,400,80z",

      // Forma rotada (pico arriba derecha)
      "M500,150c-40,160-180,300-300,300S-20,330,0,170,180-100,340,20,540-10,500,150z",

      // Forma casi rectangular con bordes orgánicos
      "M490,250c0,130-110,240-240,240S10,380,10,250,120,10,250,10,490,120,490,250z",

      // Forma vertical alargada (descubre top-bottom)
      "M350,10c100,150,40,430-120,480S0,340,0,190,250-130,350,10z",

      // Elipse desplazada a la derecha
      "M540,260c-30,150-180,250-320,220S-20,320,10,170,190-100,330-70,570,110,540,260z",

      // Forma diagonal (de abajo izq a arriba der)
      "M520,100c0,180-140,370-300,360S-30,340,0,180,160-80,320,0,520-80,520,100z",

      // Burbujón excéntrico
      "M450,60c120,120,100,350-80,430S0,320,0,160,330-60,450,60z",

      // Forma cuadrada orgánica centrada (tipo “blob grande”)
      "M480,250c0,130-110,230-230,230S20,380,20,250,130,20,250,20,480,120,480,250z",

      // Asimétrica que “gira” a la izquierda
      "M400,40c80,130,50,320-120,400S0,300,20,150,280-90,400,40z",
    ];

    const startAnimation = () => {
      if (pathRef.current && !tlRef.current) {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tlRef.current = tl;

        shapes.forEach((shape) => {
          tl.to(pathRef.current, {
            duration: 2.5, // ⬅️ más lento
            morphSVG: shape,
            ease: "sine.inOut",
          });
        });

        gsap.to(pathRef.current, {
          duration: 4, // ⬅️ también más lento el movimiento horizontal
          x: 50,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    };

    const stopAnimation = () => {
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
      gsap.killTweensOf(pathRef.current);
    };

    if (isAnimating) {
      startAnimation();
    } else {
      stopAnimation();
    }

    // 🔸 Listener para manejar resize en vivo
    const handleResize = () => {
      const shouldAnimate = window.innerWidth > 500;
      setIsAnimating(shouldAnimate);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      stopAnimation();
    };
  }, [isAnimating]);

  return (
    <section className="services-por-que-section">
      <div className="why-choose-wrapper">
        <div className="why-choose-content">
          <h2>¿Por qué Elegirnos?</h2>
          <ul className="por-que-list">
            <li>
              <CheckCircle size={24} weight="fill" color="#CDF26A" />
              <span>Entendemos a pymes y startups.</span>
            </li>
            <li>
              <CheckCircle size={24} weight="fill" color="#CDF26A" />
              <span>Combinamos estrategia + acción.</span>
            </li>
            <li>
              <CheckCircle size={24} weight="fill" color="#CDF26A" />
              <span>Soluciones simples y aplicables.</span>
            </li>
            <li>
              <CheckCircle size={24} weight="fill" color="#CDF26A" />
              <span>Nos integramos como parte del equipo.</span>
            </li>
          </ul>
        </div>

        <div className="why-choose-image-wrapper">
          {/* Imagen estática (visible hasta 500px) */}
          <img
            className="why-choose-static"
            src="/img/whychooseus.png"
            alt="Por qué elegirnos"
          />

          {/* Imagen con morphing (visible desde 501px) */}
          <svg
            className="why-choose-image-desktop"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <clipPath id="whyClip">
                <path
                  ref={pathRef}
                  d="M320,80c30,40,50,90,40,140s-50,100-100,130c-50,30-120,40-180,20S-20,300,0,240s60-120,120-160S290,40,320,80z"
                />
              </clipPath>
            </defs>
            <image
              xlinkHref="/img/whychooseus.png"
              width="500"
              height="500"
              clipPath="url(#whyClip)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>

          {/* Imagen mobile alternativa */}
          {/* <img
            className="why-choose-image-mobile"
            src="/img/WhyChooseUsMobile.png"
            alt="Por qué elegirnos"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
