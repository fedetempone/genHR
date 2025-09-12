import { useEffect, useRef, useState } from "react";
import "../styles/ourValues.css";

const values = [
  {
    name: "Cercanía",
    color: "#171D35",
    description:
      "Construimos vínculos de confianza con empatía y escucha activa.",
  },
  {
    name: "Agilidad",
    color: "#B783EF",
    description: "Respondemos rápido a cambios y oportunidades.",
  },
  {
    name: "Colaboración",
    color: "#FAF1E5",
    description: "Trabajamos juntos para alcanzar metas comunes.",
  },
  {
    name: "Integridad",
    color: "#CDF26A",
    description: "Actuamos con ética y transparencia en todo momento.",
  },
  {
    name: "Innovación",
    color: "#f08080",
    description: "Buscamos siempre nuevas ideas y soluciones creativas.",
  },
];

export default function OurValues() {
  const containerRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [activeValue, setActiveValue] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const totalHeight = containerRef.current.offsetHeight;

        let scrollInside = window.innerHeight - rect.top;
        scrollInside = Math.min(Math.max(scrollInside, 0), totalHeight);
        setScrollPos(scrollInside);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (val) => {
    setActiveValue(val);
    setShowOverlay(true);

    setTimeout(() => {
      setShowOverlay(false);
      setActiveValue(null);
    }, 2500);
  };

  return (
    <section id="our-values" className="ourValues-container">
      <h2 className="ourValues-title">Nuestros Valores</h2>

      <div className="values-container" ref={containerRef}>
        {activeValue && (
          <div
            className={`value-overlay ${showOverlay ? "active" : ""}`}
            style={{ backgroundColor: activeValue.color }}
          >
            <div className="overlay-content">
              <h2>{activeValue.name}</h2>
              <p>{activeValue.description}</p>
              {activeValue.img && (
                <img src={activeValue.img} alt={activeValue.name} />
              )}
            </div>
          </div>
        )}

        {values.map((val, i) => {
          const containerWidth = containerRef.current
            ? containerRef.current.offsetWidth
            : 500;
          const containerHeight = containerRef.current
            ? containerRef.current.offsetHeight
            : 500;

          const t = containerRef.current ? scrollPos / containerHeight : 0;
          const moveFactor = easeOutCubic(Math.min(Math.max(t, 0), 1));

          const baseAngle = (i / values.length) * Math.PI * 2;

          const minRadius = 0;
          const maxRadius = Math.min(
            200,
            containerWidth / 2 - 80,
            containerHeight / 2 - 80
          );
          const radius = minRadius + (maxRadius - minRadius) * moveFactor;

          const x = radius * Math.cos(baseAngle);
          const y = radius * Math.sin(baseAngle);

          return (
            <div
              key={val.name}
              className={`value-circle ${showOverlay ? "hidden" : ""}`}
              style={{
                backgroundColor: val.color,
                transform: `translate(${x}px, ${y}px)`,
                zIndex: 15,
              }}
              onClick={() => handleClick(val)}
            >
              {val.name[0]}
            </div>
          );
        })}
      {/* aca puedo agregar un div y un texto dentro de ese div y queda centrado dentro de los circulos */}
      </div>
    </section>
  );
}
