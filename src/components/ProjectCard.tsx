import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  image: string;
  links: string | string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tech,
  image,
  links,
}) => {
  // Determine the link to display
  const primaryLink = Array.isArray(links) ? links[0] : links;

  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden mb-8 shadow-md transform transition-transform duration-300 hover:scale-102">
      {/* Clickable Area for Project Page */}
      <Link
        to={`/projects/${name.toLowerCase().replace(/\s+/g, "-")}`}
        className="flex flex-col md:flex-row w-full"
      >
        {/* Left Column: Project Image */}
        <div className="w-full md:w-1/4 p-8">
          <img
            src={image}
            alt={name}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Column: Project Details */}
        <div className="p-6 flex flex-col justify-between w-full">
          <div>
            <h2 className="text-4xl font-semibold mb-4">{name}</h2>
            <p className="text-xl text-gray-700 mb-6">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {/* GitHub Link */}
      <div className="p-4">
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-700 font-semibold text-xl block text-center"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;