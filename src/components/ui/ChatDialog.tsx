import React, { useRef, useEffect, useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { X, Send, User } from "lucide-react";
import { useRemoteConfig } from "../RemoteConfigComponent";
import ReactMarkdown from 'react-markdown';
import { paulgpt } from '../../assets';

const PAULGPT_FUNCTION_URL = import.meta.env.VITE_PAULGPT_FUNCTION_URL;

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

interface RateLimitState {
  messageCount: number;
  resetTime: number | null;
  isBlocked: boolean;
}

const TypingIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-start space-x-2"
    >
      <img src={paulgpt} alt="PaulGPT" className="w-8 h-8 rounded-full object-cover mt-1" />
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



type MessageBubbleProps = {
  message: Message;
  index?: number;
};

const MessageBubble = forwardRef<HTMLDivElement, MessageBubbleProps>(({ message }, ref) => {
  const isUser = message.role === "user";
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isUser ? 20 : -20, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className={cn(
        "flex items-start space-x-2",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {message.role === "assistant" && (
        <img src={paulgpt} alt="PaulGPT" className="w-8 h-8 rounded-full object-cover mt-1" />
      )}
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%]",
          isUser ? "bg-darkPurple text-white" : "bg-black-200 text-white"
        )}
      >
        {isUser ? (
          <p className="text-sm">{message.content}</p>
        ) : (
          <div className="markdown-content text-sm prose prose-invert max-w-none prose-p:my-1 prose-pre:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0">
            <ReactMarkdown>
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
      {isUser && (
        <User className="w-6 h-6 text-purple mt-1" />
      )}
    </motion.div>
  );
});

MessageBubble.displayName = "MessageBubble";

const ChatDialog: React.FC<ChatDialogProps> = ({ isOpen, onClose, messages, setMessages }) => {
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [rateLimitState, setRateLimitState] = useState<RateLimitState>({
    messageCount: 0,
    resetTime: null,
    isBlocked: false
  });
  const [remainingTime, setRemainingTime] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const config = useRemoteConfig();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Rate limit timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (rateLimitState.isBlocked && rateLimitState.resetTime) {
      interval = setInterval(() => {
        const now = Date.now();
        const timeLeft = Math.max(0, Math.ceil((rateLimitState.resetTime! - now) / 1000));
        
        setRemainingTime(timeLeft);
        
        if (timeLeft <= 0) {
          setRateLimitState({
            messageCount: 0,
            resetTime: null,
            isBlocked: false
          });
          setRemainingTime(0);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [rateLimitState.isBlocked, rateLimitState.resetTime]);

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    
    // If we're currently blocked, check if the block has expired
    if (rateLimitState.isBlocked && rateLimitState.resetTime) {
      if (now >= rateLimitState.resetTime) {
        setRateLimitState({
          messageCount: 0,
          resetTime: null,
          isBlocked: false
        });
        return true;
      }
      return false;
    }
    
    // If we've reached the limit of 5 messages, block for 1 minute
    if (rateLimitState.messageCount >= 5) {
      const resetTime = now + 60000; // 1 minute from now
      setRateLimitState({
        messageCount: rateLimitState.messageCount,
        resetTime: resetTime,
        isBlocked: true
      });
      return false;
    }
    
    return true;
  };

  const incrementMessageCount = () => {
    setRateLimitState(prev => ({
      ...prev,
      messageCount: prev.messageCount + 1
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Check rate limit before processing
    if (!checkRateLimit()) {
      return;
    }

    const userMessage = { role: "user" as const, content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Increment message count
    incrementMessageCount();

    try {
      if (!PAULGPT_FUNCTION_URL) {
        throw new Error("PaulGPT function URL is not configured.");
      }

      const payload = {
        messages: [...messages, userMessage],
        context: config.paulGPTContext,
      };

      const response = await fetch(PAULGPT_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || "Failed to fetch PaulGPT response.");
      }

      const assistantReply =
        typeof result?.message === "string" && result.message.trim().length > 0
          ? result.message.trim()
          : null;

      if (!assistantReply) {
        throw new Error("Received an empty response from PaulGPT.");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: assistantReply,
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "**Error:** Sorry, I encountered an error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const messagesLeft = Math.max(0, 5 - rateLimitState.messageCount);

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
                <img src={paulgpt} alt="PaulGPT" className="w-7 h-7 rounded-full object-cover" />
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
                    <img src={paulgpt} alt="PaulGPT" className="w-8 h-8 rounded-full object-cover mt-1" />
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
                      <p className="text-xs text-white/60 mt-3">
                        📝 Note: You can send up to 5 messages at a time, then wait 1 minute for the next batch.
                      </p>
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
                  placeholder={rateLimitState.isBlocked ? "Rate limited - please wait..." : "Ask me anything..."}
                  disabled={rateLimitState.isBlocked}
                  className="flex-1 bg-black-200 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple placeholder-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || rateLimitState.isBlocked}
                  className={cn(
                    "p-2 rounded-lg bg-darkPurple text-white",
                    "hover:bg-purple transition-colors",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  <Send size={20} />
                </button>
              </div>
              {(messagesLeft < 5 || rateLimitState.isBlocked) && (
                <div className="text-xs text-white/60 mt-2">
                  {rateLimitState.isBlocked ? (
                    (() => {
                      const minutes = Math.floor(remainingTime / 60);
                      const seconds = remainingTime % 60;
                      return `Rate limit reached. Please wait ${minutes}:${seconds.toString().padStart(2, '0')} before sending more messages.`;
                    })()
                  ) : (
                    `${messagesLeft} message${messagesLeft !== 1 ? 's' : ''} remaining in this batch`
                  )}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatDialog; 
