import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useRemoteConfig } from "./RemoteConfigComponent";
import { projects, socials } from "../constants";

interface Command {
  name: string;
  description: string;
  execute: (args: string) => JSX.Element | string;
}

const WelcomeMessage = () => (
  <>
    <div className="text-white mb-4">
      <pre className="mb-4">
        {`
______           _ _____           _ _   _      _____           _           
| ___ \\         | /  ___|         (_) | | |    /  __ \\         | |          
| |_/ /_ _ _   _| \\ \`--. _ __ ___  _| |_| |__  | /  \\/ ___   __| | ___  ___ 
|  __/ _\` | | | | |\`--. \\ '_ \` _ \\| | __| '_ \\ | |    / _ \\ / _\` |/ _ \\/ __|
| | | (_| | |_| | /\\__/ / | | | | | | |_| | | || \\__/\\ (_) | (_| |  __/\\__ \\
\\_|  \\__,_|\\__,_|_\\____/|_| |_| |_|_|\\__|_| |_(_)____/\\___/ \\__,_|\\___||___/
`}
      </pre>
      Welcome to the terminal view of my portfolio!
    </div>
    <div className="text-white mb-4">
      For a list of available commands, type `help`
    </div>
  </>
);

const Terminal = () => {
  const configValues = useRemoteConfig();
  const terminalContentRef = useRef<HTMLDivElement>(null);
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [input, setInput] = useState("");
  const [outputLines, setOutputLines] = useState<OutputLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const commands: Record<string, Command> = {
    about: {
      name: "about",
      description: "About Paul Smith",
      execute: (_: string) => (
        <div className="flex flex-col gap-4 text-white">
          <div>{configValues.aboutLine1 as string}</div>
          <div>{configValues.aboutLine2 as string}</div>
          <div>{configValues.aboutLine3 as string}</div>
        </div>
      ),
    },
    clear: {
      name: "clear",
      description: "Clear the terminal",
      execute: (_: string) => "",
    },
    echo: {
      name: "echo",
      description: "Print out anything",
      execute: (args: string) => {
        const text = args.trim();
        return <div className="text-white">{text || " "}</div>;
      },
    },
    email: {
      name: "email",
      description: "Send me an email",
      execute: (_: string) => {
        window.location.href = `mailto:${configValues.emailAddress as string}`;
        return <div className="text-white">Opening email client...</div>;
      },
    },
    gui: {
      name: "gui",
      description: `Go to my portfolio's website view`,
      execute: (_: string) => {
        window.location.href = "/";
        return <div className="text-white">Redirecting to website view...</div>;
      },
    },
    help: {
      name: "help",
      description: "View list of available commands",
      execute: (_: string) => {
        const commandList = Object.values(commands).map((cmd) => (
          <div key={cmd.name} className="grid grid-cols-[120px_1fr] gap-4">
            <span className="text-purple">{cmd.name}</span>
            <span className="text-gray-400">- {cmd.description}</span>
          </div>
        ));

        return (
          <div className="flex flex-col gap-1">
            {commandList}
            <div className="mt-4 text-gray-400">
              <div>Tab {"=>"} autocompletes the command</div>
              <div>Up Arrow {"=>"} go back to previous command</div>
            </div>
          </div>
        );
      },
    },
    history: {
      name: "history",
      description: "view command history",
      execute: (_: string) => {
        if (commandHistory.length === 0) {
          return <div className="text-white">No commands in history</div>;
        }
        return (
          <div className="flex flex-col text-white">
            {commandHistory.map((cmd, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-gray-400 w-6 text-right">
                  {index + 1}
                </span>
                <span>{cmd}</span>
              </div>
            ))}
          </div>
        );
      },
    },
    projects: {
      name: "projects",
      description: "view projects that I've coded",
      execute: (args: string) => {
        const [subCommand, projectNumber] = args.trim().split(" ");

        // Handle 'projects go' command
        if (subCommand === "go") {
          const projectIndex = parseInt(projectNumber) - 1;
          if (
            isNaN(projectIndex) ||
            projectIndex < 0 ||
            projectIndex >= projects.length
          ) {
            return (
              <div className="text-white">
                Invalid project number. Type 'projects' to see available
                projects.
              </div>
            );
          }

          const project = projects[projectIndex];
          const projectUrl = configValues[project.id] as string;
          if (projectUrl) {
            window.open(projectUrl, "_blank");
            return (
              <div className="text-white">Opening project in new tab...</div>
            );
          }
          return <div className="text-white">Project URL not available.</div>;
        }

        // Display projects list
        return (
          <div className="flex flex-col gap-4 text-white">
            <div>Here are some of my projects you shouldn't miss:</div>
            {projects.map((project, index) => (
              <div key={project.id} className="flex flex-col gap-1">
                <div>
                  {index + 1}. {project.title}
                </div>
                <div className="text-gray-400 ml-4">{project.description}</div>
              </div>
            ))}
            <div className="mt-2">
              <div>Usage: projects go &lt;project-no&gt;</div>
              <div>eg: projects go 1</div>
            </div>
          </div>
        );
      },
    },
    pwd: {
      name: "pwd",
      description: "print current working directory",
      execute: (_: string) => <div className="text-white">/home/paulsmith</div>,
    },
    socials: {
      name: "socials",
      description: "check out my social accounts",
      execute: (args: string) => {
        const [subCommand, socialNumber] = args.trim().split(" ");

        // Handle 'socials go' command
        if (subCommand === "go") {
          const socialIndex = parseInt(socialNumber) - 1;
          if (
            isNaN(socialIndex) ||
            socialIndex < 0 ||
            socialIndex >= socials.length
          ) {
            return (
              <div className="text-white">
                Invalid social number. Type 'socials' to see available social
                links.
              </div>
            );
          }

          const social = socials[socialIndex];
          window.open(social.url, "_blank");
          return (
            <div className="text-white">
              Opening {social.name} in new tab...
            </div>
          );
        }

        // Display socials list
        return (
          <div className="flex flex-col gap-4 text-white">
            <div>Here are my social links</div>
            {socials.map((social, index) => (
              <div key={social.id} className="grid grid-cols-[120px_1fr] gap-4">
                <span className="text-purple">
                  {index + 1}. {social.name}
                </span>
                <span className="text-gray-400">- {social.url}</span>
              </div>
            ))}
            <div className="mt-2">
              <div>Usage: socials go &lt;social-no&gt;</div>
              <div>eg: socials go 1</div>
            </div>
          </div>
        );
      },
    },
    sudo: {
      name: "sudo",
      description: "execute command as superuser",
      execute: (_: string) => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        return <div className="text-red-500">Permission denied: Nice try! 😉</div>;
      }
    },
    welcome: {
      name: "welcome",
      description: "display hero section",
      execute: (_: string) => <WelcomeMessage />,
    },
    whoami: {
      name: "whoami",
      description: "about current user",
      execute: (_: string) => <div className="text-white">visitor</div>,
    },
  };

  interface OutputLine {
    id: number;
    content: JSX.Element | string;
    isCommand?: boolean;
  }

  useEffect(() => {
    setTimeout(() => {
      setShowFirstLine(true);
    }, 500);

    setTimeout(() => {
      setShowSecondLine(true);
      setShowPrompt(true);
    }, 2000);
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever outputLines changes
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop =
        terminalContentRef.current.scrollHeight;
    }
  }, [outputLines]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    const [commandName, ...args] = trimmedCmd.split(" ");
    const command = commands[commandName.toLowerCase()];

    if (command) {
      const output = command.execute(args.join(" "));
      setOutputLines((prev) => [
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
          isCommand: true,
        },
        { id: Date.now() + 1, content: output },
      ]);
    } else if (trimmedCmd !== "") {
      setOutputLines((prev) => [
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
          isCommand: true,
        },
        {
          id: Date.now() + 1,
          content: (
            <div className="text-white">
              Command not found: {cmd}. Type 'help' for a list of available
              commands.
            </div>
          ),
        },
      ]);
    }

    if (trimmedCmd === "clear") {
      setOutputLines([]);
    } else {
      setCommandHistory((prev) => [...prev, cmd]);
      setHistoryIndex(-1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (
        commandHistory.length > 0 &&
        historyIndex < commandHistory.length - 1
      ) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
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
        <div
          ref={terminalContentRef}
          className="p-6 font-mono text-sm h-[calc(100%-40px)] overflow-y-auto"
        >
          {showFirstLine && !showSecondLine && (
            <div className="text-white mb-6">Starting the server...</div>
          )}

          {showSecondLine && <WelcomeMessage />}

          {outputLines.map((line) => (
            <div
              key={line.id}
              className={`mb-2 ${line.isCommand ? "mt-4" : ""}`}
            >
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
