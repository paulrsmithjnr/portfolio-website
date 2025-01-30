import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import ChatDialog from "./ChatDialog";

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
        className={`fixed bottom-10 left-10 bg-darkPurple text-white p-4 rounded-full shadow-lg transition-all duration-500 ease-in-out transform opacity-100 translate-y-0 hover:bg-purple focus:outline-none animate-floating ${isOpen ? 'bg-purple' : ''}`}
        aria-label="Chat with PaulGPT"
      >
        <MessageSquare size={24} />
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