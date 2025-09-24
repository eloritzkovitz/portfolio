import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LazyImage from "../ui/media/LazyImage";

interface ProjectHeaderProps {
  name: string;
  icon: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ name, icon }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <div className="p-4 sm:p-6 mb-8">
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Return Button */}
        <button
          onClick={() => navigate("/projects")}
          className="toggle-navigation-btn px-2 py-1 sm:px-4 sm:py-2"
          aria-label={t("projects.back") || "Back to Projects"}
        >
          {isRTL ? (
            <FaChevronRight className="w-5 h-5" />
          ) : (
            <FaChevronLeft className="w-5 h-5" />
          )}
        </button>
        <LazyImage
          src={icon}
          alt={name}
          className="rounded-lg w-16 h-16 sm:w-20 sm:h-20 object-contain"
        />
        <h1 className="text-2xl sm:text-4xl font-bold">{t(name)}</h1>
      </div>
    </div>
  );
};

export default ProjectHeader;