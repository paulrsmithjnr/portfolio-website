import React, { useState, useEffect } from "react";
import ChatDialog from "./ChatDialog";
import { paulgpt } from '../../assets';

interface Message {
  role: "assistant" | "user";
  content: string;
}

export const ChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
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

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-10 left-10 flex items-center gap-2 bg-darkPurple text-white px-4 py-3 rounded-full shadow-lg transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "hidden"
        } hover:bg-purple focus:outline-none ${isOpen ? 'bg-purple' : ''} ${
          isVisible && "animate-floating"
        }`}
        aria-label="Chat with PaulGPT"
      >
        <img src={paulgpt} alt="PaulGPT" className="w-6 h-6 rounded-full object-cover" />
        <span className="text-sm font-medium whitespace-nowrap">Chat with PaulGPT</span>
      </button>
      <ChatDialog 
        isOpen={isOpen} 
        onClose={handleClose}
        messages={messages}
        setMessages={setMessages}
      />
    </>
  );
};

export default ChatButton; 