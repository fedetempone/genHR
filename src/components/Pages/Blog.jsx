import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/blog.css";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Gestión de personal en fábricas",
      slug: "gestion-de-personal-en-fabricas",
      description: "Cómo optimizar turnos, motivación y productividad.",
      img: "/img/personnelmanagement.png",
    },
    {
      id: 2,
      title: "Nuevas tendencias en contratación",
      slug: "nuevas-tendencias-en-contratacion",
      description: "Qué buscan las empresas y cómo prepararte.",
      img: "/img/recruiter.png",
    },
    {
      id: 3,
      title: "Liderazgo en tiempos de cambio",
      slug: "liderazgo-en-tiempos-de-cambio",
      description: "Claves para guiar equipos en escenarios inciertos.",
      img: "/img/LeadingTeams.png",
    },
    {
      id: 4,
      title: "Bienestar laboral",
      slug: "bienestar-laboral",
      description: "La importancia de cuidar la salud y motivación del equipo.",
      img: "/img/welfare.png",
    },
    {
      id: 5,
      title: "Digitalización en RR. HH.",
      slug: "digitalizacion-en-rrhh",
      description: "Herramientas que transforman la gestión de talento.",
      img: "/img/digitization.png",
    },
    {
      id: 6,
      title: "Soft skills más valoradas",
      slug: "soft-skills-mas-valoradas",
      description: "Las habilidades humanas que marcan la diferencia.",
      img: "/img/softskills.png",
    },
    {
      id: 7,
      title: "Employer branding",
      slug: "employer-branding",
      description: "Cómo construir una marca empleadora atractiva.",
      img: "/img/employerbranding.png",
    },
    {
      id: 8,
      title: "Futuro del trabajo",
      slug: "futuro-del-trabajo",
      description: "Tendencias que redefinen la forma de trabajar.",
      img: "/img/futurework.png",
    },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".blog-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.index * 100; // tiempo que transcurre entre la visibilidad de las imagenes
            setTimeout(() => {
              entry.target.classList.add("show");
            }, delay);
          } else {
            entry.target.classList.remove("show"); // saco y pongo la clase que permite volver a ver la animacion al scrollear
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item, index) => {
      item.dataset.index = index;
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <>
      {/* hero */}
      <section className="blog-hero">
        <div className="blog-hero-title-container">
          <h1 className="blog-hero-title">Blog</h1>
        </div>
        <div className="blog-hero-description-container">
          <p>
            Claves del mundo laboral actual, contadas con mirada experta y
            enfoque humano.
          </p>
        </div>
      </section>

      {/* contenido descriptivo del blog */}
      <section className="blog-content">
        <div className="blog-grid">
          {posts.map((post, index) => (
            <Link
              to={`/blog/${post.slug}`}
              className="blog-item-link"
              key={post.id}
            >
              <div
                className={`blog-item ${index % 2 === 0 ? "left" : "right"}`}
              >
                <img src={post.img} alt={post.title} className="blog-img" />
                <h2 className="blog-item-title">{post.title}</h2>
                <p className="blog-item-desc">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
