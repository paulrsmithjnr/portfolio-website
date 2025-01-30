import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { X, Send, Bot, User } from "lucide-react";
import { useRemoteConfig } from "../RemoteConfigComponent";
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Required for client-side usage
});

interface Message {
  role: "assistant" | "user";
  content: string;
}

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const TypingIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-start space-x-2"
    >
      <Bot className="w-6 h-6 text-purple mt-1" />
      <div className="bg-black-200 rounded-lg px-4 py-3 max-w-[80%]">
        <div className="flex space-x-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-purple"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-purple"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2, delay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-purple"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2, delay: 0.4 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const MessageBubble: React.FC<{ message: Message; index: number }> = ({ message }) => {
  const isUser = message.role === "user";
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 20 : -20, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className={cn(
        "flex items-start space-x-2",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {message.role === "assistant" && (
        <Bot className="w-6 h-6 text-purple mt-1" />
      )}
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%]",
          isUser ? "bg-darkPurple text-white" : "bg-black-200 text-white"
        )}
      >
        <p className="text-sm">{message.content}</p>
      </div>
      {isUser && (
        <User className="w-6 h-6 text-purple mt-1" />
      )}
    </motion.div>
  );
};

const ChatDialog: React.FC<ChatDialogProps> = ({ isOpen, onClose, messages, setMessages }) => {
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const config = useRemoteConfig();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const systemMessage = {
        role: "system" as const,
        content: `You are PaulGPT, a helpful AI assistant that knows everything about Paul. Here's what you should know about Paul: ${config.paulGPTContext}. Always maintain a friendly and professional tone. If asked about something not covered in the context, politely mention that you don't have that information.`,
      };

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [systemMessage, ...messages, userMessage],
        temperature: 0.7,
        max_tokens: 500,
      });

      if (response.choices[0].message.content) {
        setMessages((prev) => [...prev, { 
          role: "assistant", 
          content: response.choices[0].message.content || ""
        }]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed bottom-32 left-10 z-[5000] w-[350px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-8rem)]"
        >
          <div className="relative h-full w-full rounded-lg border border-purple bg-black-100 shadow-xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-purple">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-purple" />
                <span className="font-medium text-white">PaulGPT</span>
              </div>
              <button
                onClick={onClose}
                className="text-purple hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-start space-x-2">
                    <Bot className="w-6 h-6 text-purple mt-1" />
                    <div className="bg-black-200 text-white rounded-lg px-4 py-2 max-w-[80%]">
                      <p className="text-sm font-medium mb-2">👋 Hello! I'm PaulGPT</p>
                      <p className="text-sm text-white/80">
                        I'm here to help answer any questions you have about Paul. Feel free to ask me about his:
                      </p>
                      <ul className="text-sm text-white/80 list-disc list-inside mt-2 space-y-1">
                        <li>Professional experience</li>
                        <li>Technical skills</li>
                        <li>Projects and achievements</li>
                        <li>Education and background</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
              <AnimatePresence mode="popLayout">
                {messages.map((message, index) => (
                  <MessageBubble key={index} message={message} index={index} />
                ))}
              </AnimatePresence>
              <AnimatePresence>
                {isLoading && <TypingIndicator />}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-purple">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-black-200 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple placeholder-white/50"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    "p-2 rounded-lg bg-darkPurple text-white",
                    "hover:bg-purple transition-colors",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatDialog; 