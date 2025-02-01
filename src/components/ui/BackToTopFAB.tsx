import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTopFAB = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-10 bg-darkPurple text-white p-3 rounded-full shadow-lg transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "hidden"
        } hover:bg-purple focus:outline-none ${
          isVisible && "animate-floating"
        }`}
        aria-label="Back to Top"
      >
        <ChevronUp size={23} strokeWidth={2.5} />
      </button>
    );
  };

export default BackToTopFAB;
