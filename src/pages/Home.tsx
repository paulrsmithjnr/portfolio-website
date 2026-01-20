import { FloatingNav } from "../components/ui/FloatingNav";
import { navItems } from "../constants";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import BackToTopFAB from "../components/ui/BackToTopFAB";
import ChatButton from "../components/ui/ChatButton";

const Home = () => {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Projects />
      <Footer />
      <BackToTopFAB />
      <ChatButton />
    </>
  );
};

export default Home;
