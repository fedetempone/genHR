import { useEffect } from "react";
import { Link } from "react-router-dom";
import Waves from "../Waves";
import { Helmet } from "react-helmet-async";
import "../../styles/pages/blog.css";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "¿Por qué la Marca Empleadora es clave para pymes y startups en 2025?",
      slug: "por-que-la-marca-empleadora-es-clave-para-pymes-y-startups",
      description: "En un mercado donde el talento elige, tu Marca Empleadora ya no es un “plus”: es tu carta de presentación. Si liderás una pyme o startup, sabés que no contás con una megaestructura, pero sí con algo más valioso: personas comprometidas, ideas potentes y mucho por construir",
      img: "/img/WhyEmployerBrandMatters.png",
    },
    {
      id: 2,
      title: "El impacto real de cada paso: repensar la experiencia del candidato",
      slug: "el-impacto-real-de-cada-instancia-en-la-experiencia-del-candidato",
      description: "En un contexto donde los colaboradores tienen múltiples alternativas para elegir dónde desarrollar su carrera, la experiencia del candidato pasó a convertirse en un factor clave que refleja la identidad de la marca empleadora.",
      img: "/img/CandidateExperienceImpact.png",
    },
    {
      id: 3,
      title: "La experiencia del colaborador crea marca que inspira: una ventaja clave para startups y pymes",
      slug: "la-experiencia-del-colabarador-crea-marcas-que-insipiran",
      description: "Cuando pensamos en construir una marca poderosa, solemos mirar hacia fuera: campañas de marketing, redes sociales, relaciones públicas. Pero ¿y si te dijéramos que la marca más auténtica y duradera se construye desde adentro? ",
      img: "/img/EmployeeExperienceInsights.png",
    },
    {
      id: 4,
      title: "Employee Experience: Cómo Fidelizar Talento en Tiempos de Cambio",
      slug: "como-fidelizar-al-talento-en-tiempos-de-cambios-constante",
      description: "El trabajo ya no se entiende como antes. En pocos años, vivimos transformaciones profundas: equipos distribuidos en distintas partes del mundo, la irrupción de la IA en las tareas cotidianas y una nueva manera de pensar el equilibrio entre lo personal y lo profesional. Todo esto obligó a repensar la relación entre las personas y las organizaciones.",
      img: "/img/RetainTalentInChange.png",
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
    <Helmet>
        <title>Blog | GenHR</title>
        <meta
          name="description"
          content="Descubrí artículos sobre Marca Empleadora, Employee Experience y fidelización de talento en startups y pymes."
        />
        <meta property="og:title" content="Blog | GenHR" />
        <meta
          property="og:description"
          content="Descubrí artículos sobre Marca Empleadora, Employee Experience y fidelización de talento en startups y pymes."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/WhyEmployerBrandMatters.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | GenHR" />
        <meta
          name="twitter:description"
          content="Descubrí artículos sobre Marca Empleadora, Employee Experience y fidelización de talento en startups y pymes."
        />
        <meta name="twitter:image" content="/img/WhyEmployerBrandMatters.png" />
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

      {/* hero */}
      <section className="blog-hero">
        <div className="blog-hero-title-container">
          <h1 className="blog-hero-title">Blog</h1>
        </div>
      </section>
      <Waves marginTop={-80} marginBottom={-55} />

      {/* contenido descriptivo del blog */}
      <section className="blog-content">
        <div className="blog-title-container">
          <h2 className="blog-title">Nuestros Últimos Artículos</h2>
        </div>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={`blog-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <img src={post.img} alt={post.title} className="blog-img" />
              <h2 className="blog-item-title">{post.title}</h2>
              <p className="blog-item-desc">{post.description}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="css-button-gradient--6 btn-viewmore-blog"
              >
                Ver Más
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
