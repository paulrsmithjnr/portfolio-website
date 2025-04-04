import React from "react";
import { Tool } from "../../constants";

interface ToolBadgeProps {
  tool: Tool;
}

const ToolBadge: React.FC<ToolBadgeProps> = ({ tool }) => {
  return (
    <a href={tool.url} target="_blank" rel="noopener noreferrer">
      <div className="bg-white-100 text-black text-xs hover:bg-purple px-2 py-1 rounded-full transition-colors duration-300">
        {tool.name}
      </div>
    </a>
  );
};

export default ToolBadge;
