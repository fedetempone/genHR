import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Contact } from "./components/Pages/Contact";
import SubmitCVFullPage from "./components/Pages/SubmitCVFullPage";
import Blog from "./components/Pages/Blog";
import BlogDetails from "./components/Pages/BlogDetails";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash"; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/submit-cv" element={<SubmitCVFullPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


