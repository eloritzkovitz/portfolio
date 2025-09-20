import React from "react";
import { LinkType } from "../../types/link";
import techIconMap from "./TechIconMap";

interface TechCardProps {
  tech: LinkType;
}

const TechCard: React.FC<TechCardProps> = ({ tech }) => {
  const icon = tech.iconKey ? techIconMap[tech.iconKey] : null;

  return (
    <a
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105 w-full h-40 sm:h-44 md:h-48"
      aria-label={tech.label}
      title={tech.label}
    >
      <span
        role="img"
        aria-label={tech.label}
        className="flex items-center justify-center w-10 h-10 mb-3"
      >
        {icon}
      </span>
      <span className="text-base sm:text-lg font-semibold text-center mt-2">
        {tech.text || tech.label}
      </span>
    </a>
  );
};

export default TechCard;