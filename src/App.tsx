import { BrowserRouter } from "react-router-dom";
import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "./constants";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import BackToTopFAB from "./components/ui/BackToTopFAB";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Projects />
      <Footer />
      <BackToTopFAB />
    </BrowserRouter>
  );
};

export default App;
