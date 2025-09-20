import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ProjectHeaderProps {
  name: string;
  image: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ name, image }) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 sm:p-6 mb-8">
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Return Button */}
        <button
          onClick={() => navigate("/projects")}
          className="toggle-navigation-btn px-2 py-1 sm:px-4 sm:py-2"
          aria-label="Back to Projects"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <img
          src={image}
          alt={name}
          className="rounded-lg w-16 h-16 sm:w-20 sm:h-20 object-contain"
        />
        <h1 className="text-2xl sm:text-4xl font-bold">{name}</h1>
      </div>
    </div>
  );
};

export default ProjectHeader;