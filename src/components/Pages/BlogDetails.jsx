import { useParams } from "react-router-dom";
import "../../styles/pages/blogDetails.css";

const BlogDetails = () => {
    const { slug } = useParams();
    const posts = [
        {
            id: 1,
            title: "Gestión de personal en fábricas",
            slug: "gestion-de-personal-en-fabricas",
            description: "Cómo optimizar turnos, motivación y productividad.",
            img: "/img/personellmangment.png",
            content: [
                {
                    type: "title",
                    text: "Gestión de personal en fábricas: cómo optimizar turnos, motivación y productividad",
                },
                {
                    type: "paragraph",
                    text: "En el corazón de toda operación de fabricación exitosa, se encuentra una gestión de personal eficiente. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                { type: "hr" },
                {
                    type: "title",
                    text: "La importancia de una gestión de personal estratégica",
                },
                {
                    type: "paragraph",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                    type: "list",
                    items: [
                        "Optimización de turnos: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "Motivación y bienestar: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "Incremento de la productividad: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    ],
                },
                { type: "hr" },
                {
                    type: "title",
                    text: "Tecnología y talento humano: una combinación poderosa",
                },
                {
                    type: "paragraph",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                { type: "br" },
                {
                    type: "paragraph",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                { type: "hr" },
                {
                    type: "title",
                    text: "¿Quieres llevar la gestión de personal de tu fábrica al siguiente nivel?",
                },
                {
                    type: "paragraph",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
            ],
        },
        {
            id: 2,
            title: "Nuevas tendencias en contratación",
            slug: "nuevas-tendencias-en-contratacion",
            description: "Qué buscan las empresas y cómo prepararte.",
            img: "/img/recruiter.png",
            content: [
                {
                    type: "title",
                    text: "Nuevas tendencias en contratación: lo que las empresas buscan",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Factores clave en la contratación moderna",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                {
                    type: "list",
                    items: [
                        "Evaluación de habilidades técnicas: Lorem ipsum dolor sit amet.",
                        "Cultura y soft skills: Lorem ipsum dolor sit amet.",
                        "Tendencias de mercado: Lorem ipsum dolor sit amet.",
                    ],
                },
                { type: "hr" },
                {
                    type: "title",
                    text: "Innovación y tecnología en los procesos de selección",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { type: "br" },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Cómo prepararte para estas nuevas tendencias",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            ],
        },
        {
            id: 3,
            title: "Liderazgo en tiempos de cambio",
            slug: "liderazgo-en-tiempos-de-cambio",
            description: "Claves para guiar equipos en escenarios inciertos.",
            img: "/img/LeadingTeams.png",
            content: [
                {
                    type: "title",
                    text: "Liderazgo en tiempos de cambio: cómo guiar equipos",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Habilidades esenciales del líder moderno",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                {
                    type: "list",
                    items: [
                        "Comunicación efectiva: Lorem ipsum dolor sit amet.",
                        "Adaptabilidad: Lorem ipsum dolor sit amet.",
                        "Toma de decisiones: Lorem ipsum dolor sit amet.",
                    ],
                },
                { type: "hr" },
                {
                    type: "title",
                    text: "Estrategias para liderar equipos en escenarios inciertos",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "br" },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Inspirando a tu equipo a través del cambio",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            ],
        },
        {
            id: 4,
            title: "Bienestar laboral",
            slug: "bienestar-laboral",
            description: "La importancia de cuidar la salud y motivación del equipo.",
            img: "/img/welfare.png",
            content: [
                {
                    type: "title",
                    text: "Bienestar laboral: cuidando a tu equipo",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Factores que impactan el bienestar",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                {
                    type: "list",
                    items: [
                        "Ambiente de trabajo: Lorem ipsum dolor sit amet.",
                        "Programas de salud y motivación: Lorem ipsum dolor sit amet.",
                        "Equilibrio vida-trabajo: Lorem ipsum dolor sit amet.",
                    ],
                },
                { type: "hr" },
                {
                    type: "title",
                    text: "Cómo implementar iniciativas efectivas",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "br" },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Beneficios de un enfoque integral",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            ],
        },
        {
            id: 5,
            title: "Digitalización en RR. HH.",
            slug: "digitalizacion-en-rrhh",
            description: "Herramientas que transforman la gestión de talento.",
            img: "/img/digitization.png",
            content: [
                {
                    type: "title",
                    text: "Digitalización en RR. HH.: herramientas modernas",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Beneficios de la transformación digital",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                {
                    type: "list",
                    items: [
                        "Automatización de procesos: Lorem ipsum dolor sit amet.",
                        "Seguimiento del talento: Lorem ipsum dolor sit amet.",
                        "Analíticas de desempeño: Lorem ipsum dolor sit amet.",
                    ],
                },
                { type: "hr" },
                {
                    type: "title",
                    text: "Implementación paso a paso",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "br" },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Maximizando resultados",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            ],
        },
        {
            id: 6,
            title: "Soft skills más valoradas",
            slug: "soft-skills-mas-valoradas",
            description: "Las habilidades humanas que marcan la diferencia.",
            img: "/img/softskills.png",
            content: [
                {
                    type: "title",
                    text: "Soft skills más valoradas en el entorno laboral",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Habilidades clave",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                {
                    type: "list",
                    items: [
                        "Comunicación: Lorem ipsum dolor sit amet.",
                        "Trabajo en equipo: Lorem ipsum dolor sit amet.",
                        "Pensamiento crítico: Lorem ipsum dolor sit amet.",
                    ],
                },
                { type: "hr" },
                {
                    type: "title",
                    text: "Cómo desarrollarlas",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "br" },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Impacto en la carrera profesional",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            ],
        },
        {
            id: 7,
            title: "Employer branding",
            slug: "employer-branding",
            description: "Cómo construir una marca empleadora atractiva.",
            img: "/img/employerbranding.png",
            content: [
                {
                    type: "title",
                    text: "Employer branding: construyendo una marca atractiva",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Elementos clave",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                {
                    type: "list",
                    items: [
                        "Cultura organizacional: Lorem ipsum dolor sit amet.",
                        "Comunicación interna: Lorem ipsum dolor sit amet.",
                        "Experiencia del candidato: Lorem ipsum dolor sit amet.",
                    ],
                },
                { type: "hr" },
                {
                    type: "title",
                    text: "Estrategias efectivas",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "br" },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Beneficios del employer branding",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            ],
        },
        {
            id: 8,
            title: "Futuro del trabajo",
            slug: "futuro-del-trabajo",
            description: "Tendencias que redefinen la forma de trabajar.",
            img: "/img/futurework.png",
            content: [
                {
                    type: "title",
                    text: "Futuro del trabajo: tendencias y transformación",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Impacto de la tecnología",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                {
                    type: "list",
                    items: [
                        "Automatización: Lorem ipsum dolor sit amet.",
                        "Trabajo remoto: Lorem ipsum dolor sit amet.",
                        "Nuevas formas de colaboración: Lorem ipsum dolor sit amet.",
                    ],
                },
                { type: "hr" },
                {
                    type: "title",
                    text: "Preparando a la fuerza laboral",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "br" },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { type: "hr" },
                {
                    type: "title",
                    text: "Cómo adaptarse al futuro",
                },
                { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            ],
        },
    ];


    const post = posts.find((p) => p.slug === slug);

    if (!post) return <p>Post no encontrado</p>;

    return (
        <div className="blog-details">
            {/* hero del post */}
            <section className="blog-hero">
                <div className="blog-hero-title-container">
                    <h1 className="blog-hero-title">{post.title}</h1>
                </div>
                <div className="blog-hero-description-container">
                    <p>{post.description}</p>
                </div>
            </section>

            {/* contenido detallado del blog*/}
            <section className="blog-details-content">
                <div className="blog-details-text">
                    {post.content.map((block, index) => {
                        switch (block.type) {
                            case "title":
                                return <h2 key={index}>{block.text}</h2>;
                            case "paragraph":
                                return <p key={index}>{block.text}</p>;
                            case "list":
                                return (
                                    <ul key={index}>
                                        {block.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                );
                            case "hr":
                                return <hr key={index} />;
                            case "br":
                                return <br key={index} />;
                            default:
                                return null;
                        }
                    })}
                </div>
            </section>

        </div>
    );
};

export default BlogDetails;
