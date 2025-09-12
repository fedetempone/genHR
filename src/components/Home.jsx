import Hero from "./Hero";
import OurValues from "./OurValues";
import AboutUs from "./Pages/AboutUs";
import WhyChooseUs from "./Pages/WhyChooseUs";
import SubmitCV from "./SubmitCV";
import { ContactForm } from "./ContactForm";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <OurValues/>
      <SubmitCV/>
      <ContactForm/>
    </>
  );
};

export default Home;
