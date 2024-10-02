import React from "react";

interface SectionHeaderProps {
  text: string;
  highlightCount: number;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  text,
  highlightCount,
}) => {
  const words = text.split(" ");

  const nonHighlightedWords = words
    .slice(0, words.length - highlightCount)
    .join(" ");
  const highlightedWords = words.slice(-highlightCount).join(" ");

  return (
    <h1 className="heading text-white">
      {nonHighlightedWords}
      <span className="text-purple"> {highlightedWords}</span>
    </h1>
  );
};

export default SectionHeader;
