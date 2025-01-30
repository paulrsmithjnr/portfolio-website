import React, { useState } from "react";
import ChatDialog from "./ChatDialog";
import { paulgpt } from '../../assets';

interface Message {
  role: "assistant" | "user";
  content: string;
}

export const ChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-10 left-10 flex items-center gap-2 bg-darkPurple text-white px-4 py-3 rounded-full shadow-lg transition-all duration-500 ease-in-out transform opacity-100 translate-y-0 hover:bg-purple focus:outline-none animate-floating ${isOpen ? 'bg-purple' : ''}`}
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