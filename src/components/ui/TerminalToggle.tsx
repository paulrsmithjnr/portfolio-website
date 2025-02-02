import { useState, useEffect } from 'react';
import { Terminal, AppWindow } from 'lucide-react';

interface TerminalToggleProps {
  isTerminalMode: boolean;
  onToggle: () => void;
}

const TerminalToggle = ({ isTerminalMode, onToggle }: TerminalToggleProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-24 left-10 bg-darkPurple text-white p-3 rounded-full shadow-lg transition-transform duration-500 ease-in-out ${
        (isVisible || isTerminalMode) ? 'translate-x-0' : 'hidden'
      } hover:bg-purple focus:outline-none ${
        (isVisible || isTerminalMode) && "animate-floating"
      }`}
      title={isTerminalMode ? "Switch to Website Mode" : "Switch to Terminal Mode"}
      aria-label={isTerminalMode ? "Switch to Website Mode" : "Switch to Terminal Mode"}
    >
      {isTerminalMode ? (
        <AppWindow size={23} strokeWidth={2.5} />
      ) : (
        <Terminal size={23} strokeWidth={2.5} />
      )}
    </button>
  );
};

export default TerminalToggle; 