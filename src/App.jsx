import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Contact } from "./components/Pages/Contact";
import Blog from "./components/Pages/Blog";
import BlogDetails from "./components/Pages/BlogDetails";
import ScrollToTop from "./components/ScrollToTop";
import MeetUs from "./components/Pages/MeetUs";
import ServiceDetails from "./components/Pages/ServiceDetails";
import Services from "./components/Pages/Services";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/conocenos" element={<MeetUs />} />
          <Route path="/servicios/:id" element={<ServiceDetails />} />
          <Route path="/servicios" element={<Services />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


