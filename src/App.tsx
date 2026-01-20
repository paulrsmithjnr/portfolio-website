import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Terminal from "./components/Terminal";
import TerminalToggle from "./components/ui/TerminalToggle";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <RouteAwareTerminalToggle
        isTerminalMode={isTerminalMode}
        onToggle={toggleTerminalMode}
      />
    </BrowserRouter>
  );
};

const RouteAwareTerminalToggle = ({
  isTerminalMode,
  onToggle,
}: {
  isTerminalMode: boolean;
  onToggle: () => void;
}) => {
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <TerminalToggle isTerminalMode={isTerminalMode} onToggle={onToggle} />
  );
};

export default App;
