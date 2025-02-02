import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Terminal = () => {
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Start the sequence
    setTimeout(() => {
      setShowFirstLine(true);
      setShowSecondLine(true);
    }, 500);
    
    setTimeout(() => {
      setShowThirdLine(true);
      setShowPrompt(true);
    }, 2000);
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // Handle command execution here
      setInput("");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-screen w-screen bg-black-100 p-8 flex items-center justify-center"
    >
      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="w-full max-w-4xl h-[500px] bg-[#1e1e1e] rounded-lg overflow-hidden shadow-[0_0_100px_-5px_rgba(87,8,145,0.5)] transition-shadow duration-300"
      >
        {/* Title bar */}
        <div className="bg-[#252526] px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="flex-1 text-center text-sm text-gray-400">
            www.paulsmith.codes
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm h-[calc(100%-40px)] overflow-y-auto">
          {showFirstLine && (
            <div className="text-white mb-4">
              Welcome to the terminal view of my portfolio!
            </div>
          )}
          
          {showSecondLine && (
            <div className="text-white mb-6">
              Starting the server...
            </div>
          )}
          
          {showThirdLine && (
            <div className="text-white mb-4">
              For a list of available commands, type `help`
            </div>
          )}
          
          {showPrompt && (
            <div className="flex items-center">
              <span className="text-[#ffa500]">visitor</span>
              <span className="text-white">@</span>
              <span className="text-purple">terminal.paulsmith.codes</span>
              <span className="text-white">:~$ </span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 bg-transparent text-white outline-none border-none ml-2"
                autoFocus
              />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Terminal; 