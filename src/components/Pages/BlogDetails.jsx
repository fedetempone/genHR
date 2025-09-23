import { useParams } from "react-router-dom";
import blogContentMap from "../../data/blogContentMap.js";
import Waves from "../Waves.jsx";
import "../../styles/pages/blogDetails.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const post = blogContentMap[slug];

  if (!post) return <p>Post no encontrado</p>;

  return (
    <div className="blog-details">
      {/* hero */}
      <section className="blog-hero blogdetails-hero">
        <div className="blog-hero-title-container blogdetails-hero-container">
          <h1 className="blog-hero-title blogdetails-hero-title">{post.title}</h1>
        </div>
      </section>
      <Waves marginTop={-80} marginBottom={-55} />

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

