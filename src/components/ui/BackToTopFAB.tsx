import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

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
        className={`fixed bottom-10 right-10 bg-darkPurple text-white p-4 rounded-full shadow-lg transition-all duration-500 ease-in-out transform ${
          isVisible
            ? "opacity-100 translate-y-0 animate-bounce"
            : "opacity-0 translate-y-10"
        } hover:bg-purple focus:outline-none ${
          isVisible && "animate-floating"
        }`}
        aria-label="Back to Top"
      >
        <FaChevronUp size={24} />
      </button>
    );
  };

export default BackToTopFAB;
