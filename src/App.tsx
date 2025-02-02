import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
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
import Terminal from "./components/Terminal";
import TerminalToggle from "./components/ui/TerminalToggle";

const App = () => {
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  const toggleTerminalMode = () => {
    setIsTerminalMode(prev => !prev);
  };

  if (isTerminalMode) {
  return (
      <>
        <Terminal />
        <TerminalToggle isTerminalMode={isTerminalMode} onToggle={toggleTerminalMode} />
      </>
    );
  }
      
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
      <TerminalToggle isTerminalMode={isTerminalMode} onToggle={toggleTerminalMode} />
    </BrowserRouter>
  );
};

export default App;
