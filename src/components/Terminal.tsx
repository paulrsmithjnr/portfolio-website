import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface Command {
  name: string;
  description: string;
  execute: () => JSX.Element | string;
}

const commands: Record<string, Command> = {
  about: {
    name: 'about',
    description: 'about Sat Naing',
    execute: () => 'About command output'
  },
  clear: {
    name: 'clear',
    description: 'clear the terminal',
    execute: () => ''
  },
  echo: {
    name: 'echo',
    description: 'print out anything',
    execute: () => 'Echo command output'
  },
  education: {
    name: 'education',
    description: 'my education background',
    execute: () => 'Education command output'
  },
  email: {
    name: 'email',
    description: 'send an email to me',
    execute: () => 'Email command output'
  },
  gui: {
    name: 'gui',
    description: 'go to my portfolio in GUI',
    execute: () => 'GUI command output'
  },
  help: {
    name: 'help',
    description: 'check available commands',
    execute: () => {
      const commandList = Object.values(commands)
        .map(cmd => (
          <div key={cmd.name} className="grid grid-cols-[120px_1fr] gap-4">
            <span className="text-emerald-400">{cmd.name}</span>
            <span className="text-gray-400">- {cmd.description}</span>
          </div>
        ));

      return (
        <div className="flex flex-col gap-1">
          {commandList}
          <div className="mt-4 text-gray-400">
            <div>Tab or Ctrl + i  {'=>'} autocompletes the command</div>
            <div>Up Arrow        {'=>'} go back to previous command</div>
            <div>Ctrl + l        {'=>'} clear the terminal</div>
          </div>
        </div>
      );
    }
  },
  history: {
    name: 'history',
    description: 'view command history',
    execute: () => 'History command output'
  },
  projects: {
    name: 'projects',
    description: "view projects that I've coded",
    execute: () => 'Projects command output'
  },
  pwd: {
    name: 'pwd',
    description: 'print current working directory',
    execute: () => 'PWD command output'
  },
  socials: {
    name: 'socials',
    description: 'check out my social accounts',
    execute: () => 'Socials command output'
  },
  welcome: {
    name: 'welcome',
    description: 'display hero section',
    execute: () => 'Welcome command output'
  },
  whoami: {
    name: 'whoami',
    description: 'about current user',
    execute: () => 'Whoami command output'
  }
};

interface OutputLine {
  id: number;
  content: JSX.Element | string;
  isCommand?: boolean;
}

const Terminal = () => {
  const terminalContentRef = useRef<HTMLDivElement>(null);
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [input, setInput] = useState("");
  const [outputLines, setOutputLines] = useState<OutputLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useEffect(() => {
    setTimeout(() => {
      setShowFirstLine(true);
      setShowSecondLine(true);
    }, 500);
    
    setTimeout(() => {
      setShowThirdLine(true);
      setShowPrompt(true);
    }, 2000);
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever outputLines changes
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [outputLines]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const command = commands[trimmedCmd];

    if (command) {
      const output = command.execute();
      setOutputLines(prev => [
        ...prev,
        { 
          id: Date.now(), 
          content: (
            <div className="flex items-center">
              <span className="text-[#ffa500]">visitor</span>
              <span className="text-white">@</span>
              <span className="text-purple">terminal.paulsmith.codes</span>
              <span className="text-white">:~$ </span>
              <span className="text-white ml-2">{cmd}</span>
            </div>
          ), 
          isCommand: true 
        },
        { id: Date.now() + 1, content: output }
      ]);
    } else if (trimmedCmd !== '') {
      setOutputLines(prev => [
        ...prev,
        { 
          id: Date.now(), 
          content: (
            <div className="flex items-center">
              <span className="text-[#ffa500]">visitor</span>
              <span className="text-white">@</span>
              <span className="text-purple">terminal.paulsmith.codes</span>
              <span className="text-white">:~$ </span>
              <span className="text-white ml-2">{cmd}</span>
            </div>
          ), 
          isCommand: true 
        },
        { id: Date.now() + 1, content: `Command not found: ${cmd}. Type 'help' for a list of available commands.` }
      ]);
    }

    if (trimmedCmd === 'clear') {
      setOutputLines([]);
    } else {
      setCommandHistory(prev => [...prev, cmd]);
      setHistoryIndex(-1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput("");
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setOutputLines([]);
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
        <div ref={terminalContentRef} className="p-6 font-mono text-sm h-[calc(100%-40px)] overflow-y-auto">
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

          {outputLines.map(line => (
            <div key={line.id} className={`mb-2 ${line.isCommand ? 'mt-4' : ''}`}>
              {line.content}
            </div>
          ))}
          
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
                spellCheck={false}
              />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Terminal; 