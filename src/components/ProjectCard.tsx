import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

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
  // Left side content
  const left = (
    <div className="w-1/2 h-full flex flex-col justify-center p-8">
      <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        {name}
      </h2>
      <p className="text-lg sm:text-2xl text-gray-700 dark:text-gray-200 mb-6">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="tech-tag bg-white/10 text-white px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
      {/* Link */}
      <div className="p-4">
        <a
          href={`/projects/${name.toLowerCase().replace(/\s+/g, "-")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-700 font-semibold text-xl block text-start"
        >
          Visit project page →
        </a>
      </div>
    </div>
  );

  // Right side content
  const right = (
    <div className="relative w-1/2 h-full flex items-center justify-center">
      <div className="w-[80%] h-[80%] flex items-center justify-center overflow-hidden rounded-xl">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-row w-full h-[80vh] rounded-none overflow-hidden mb-0 shadow-none">
      <Link
        to={`/projects/${name.toLowerCase().replace(/\s+/g, "-")}`}
        className="flex flex-row w-full h-full"
      >
        {index % 2 === 0 ? (
          <>
            {left}
            {right}
          </>
        ) : (
          <>
            {right}
            {left}
          </>
        )}
      </Link>
    </div>
  );
};

export default ProjectCard;
