import React from "react";
import { Link } from "react-router-dom";
import TechTag from "./TechTag";

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  image: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tech,
  image,
  index,
}) => {
  // Details section content
  const detailsSection = (
    <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center p-6 md:p-8">
      <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
        {name}
      </h2>
      <p className="text-base sm:text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-4 md:mb-6">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4 md:mb-8">
        {tech.map((t, idx) => (
          <TechTag key={idx}>{t}</TechTag>
        ))}
      </div>
      {/* Link */}
      <div className="pt-2 md:p-4">
        <a
          href={`/projects/${name.toLowerCase().replace(/\s+/g, "-")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-700 font-semibold text-base md:text-xl block text-start"
        >
          Visit project page →
        </a>
      </div>
    </div>
  );

  // Image section content
  const imageSection = (
    <div className="relative w-full md:w-1/2 h-48 md:h-full flex items-center justify-center">
      <div className="w-[90%] h-[90%] flex items-center justify-center overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>
    </div>
  );

  return (
    <div className="project-card-mobile flex flex-col w-full h-auto md:h-[80vh] rounded-none overflow-hidden mb-8 shadow-none">
      <Link
        to={`/projects/${name.toLowerCase().replace(/\s+/g, "-")}`}
        className={`flex flex-col ${
          index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
        } w-full h-full`}
      >
        {imageSection}
        {detailsSection}
      </Link>
    </div>
  );
};

export default ProjectCard;
