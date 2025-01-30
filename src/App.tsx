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
import ChatButton from "./components/ui/ChatButton";

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
      <ChatButton />
    </BrowserRouter>
  );
};

export default App;
