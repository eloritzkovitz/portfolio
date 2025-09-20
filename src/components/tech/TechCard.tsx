import React from "react";
import TechIcon from "./TechIcon";
import { TechStackItem } from "../../types/tech";

interface TechCardProps {
  tech: TechStackItem;
  icon: React.ReactNode;
}

const TechCard: React.FC<TechCardProps> = ({ tech, icon }) => (
  <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105 w-full h-40 sm:h-44 md:h-48">
    <TechIcon icon={icon} label={tech.name} />
    <span className="text-base sm:text-lg font-semibold text-center mt-2">
      {tech.name}
    </span>
  </div>
);

export default TechCard;