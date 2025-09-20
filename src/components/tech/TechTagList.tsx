import React from "react";
import TechTag from "./TechTag";

interface TechTagListProps {
  tech: string[];
}

const TechTagList: React.FC<TechTagListProps> = ({ tech }) => (
  <div className="flex flex-wrap gap-2 sm:gap-3">
    {tech.map((item, index) => (
      <TechTag key={index}>{item}</TechTag>
    ))}
  </div>
);

export default TechTagList;