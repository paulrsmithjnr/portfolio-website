import React from "react";

interface ToolBadgeProps {
  tool: string;
}

const ToolBadge: React.FC<ToolBadgeProps> = ({ tool }) => {
  return (
    <div className="bg-white-100 text-black text-xs hover:bg-purple px-2 py-1 rounded-full transition-colors duration-300">
      {tool}
    </div>
  );
};

export default ToolBadge;
