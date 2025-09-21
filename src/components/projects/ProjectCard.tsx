import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TechTagList from "../tech/TechTagList";
import { Project } from "../../types/project";
import { slugify } from "../../utils/string";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { name, description, tech, icon } = project;
  const { t } = useTranslation();

  // Project Details
  const ProjectDetails: React.FC<{
    name: string;
    description: string;
    tech: string[];
  }> = ({ name, tech }) => (
    <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center">
      <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4 hover:text-[#646cff]">
        {t(name)}
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-4 md:mb-6">
        {t(description)}
      </p>
      <div className="mb-4 md:mb-8">
        <TechTagList tech={tech} />
      </div>
      <div className="pt-2 md:p-4">
        <span className="text-teal-500 hover:text-[#646cff] font-semibold text-base md:text-xl block text-start cursor-pointer transition-colors">
          {t("projects.visit")}
        </span>
      </div>
    </div>
  );

  // Project Image
  const ProjectImage: React.FC<{ image: string; name: string }> = ({
    image,
    name,
  }) => (
    <figure className="relative w-full md:w-1/2 h-48 md:h-full flex items-center justify-center">
      <div className="w-[80%] h-[80%] flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={`Screenshot of ${name} project`}
          className="w-full h-full object-contain"
        />
      </div>
    </figure>
  );

  return (
    <div className="flex flex-col w-full h-auto md:h-[80vh] rounded-none overflow-hidden mb-8 shadow-none">
      <Link
        to={`/projects/${slugify(name)}`}
        className={`flex flex-col gap-8 ${
          index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
        } w-full h-full md:gap-x-15`}
      >
        <ProjectImage image={icon} name={name} />
        <ProjectDetails name={name} description={description} tech={tech} />
      </Link>
    </div>
  );
};

export default ProjectCard;
