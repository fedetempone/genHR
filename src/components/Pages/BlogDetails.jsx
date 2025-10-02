import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";
import blogContentMap from "../../data/blogContentMap.js";
import Waves from "../Waves.jsx";
import "../../styles/pages/blogDetails.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const post = blogContentMap[slug];

  if (!post) return <p>Post no encontrado</p>;

  return (
    <div className="blog-details">
      <Helmet>
        <title>{post.title} | GenHR</title>
        <meta
          name="description"
          content={post.description}
        />
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
      <section className="blog-hero blogdetails-hero">
        <div className="blog-hero-title-container blogdetails-hero-container">
          <h1 className="blog-hero-title blogdetails-hero-title">{post.title}</h1>
        </div>
      </section>
      <Waves marginTop={-80} marginBottom={-55} />

      {/* volver atras */}
      <div className="blog-back-link">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={20} weight="bold" className="back-icon" />
          <span>Atrás</span>
        </Link>
      </div>

      {/* contenido descriptivo */}
      <section className="blog-details-content">
        <div className="blog-hero-description-container">
          <h2>{post.subtitle}</h2>
        </div>
        <div className="blog-details-text">
          {post.description}
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
