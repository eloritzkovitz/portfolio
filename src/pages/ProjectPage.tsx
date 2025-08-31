import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import ImageViewer from "../components/ImageViewer";
import SectionsNavigator from "../components/SectionsNavigator";
import TechTag from "../components/TechTag";
import projects from "../data/projectsData";

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const [navVisible, setNavVisible] = useState(true);

  // Section anchors for navigation
  const sectionAnchors = [
    { id: "description", label: "Description" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "involvement", label: "My Involvement" },
    { id: "links", label: "Links" },
  ];

  const project = projects.find(
    (proj) => proj.name.toLowerCase().replace(/\s+/g, "-") === projectId
  );

  const [showImageViewer, setShowImageViewer] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Handle next image
  const handleNextImage = useCallback(() => {
    if (project) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.screenshots.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [project]);

  // Handle previous image
  const handlePrevImage = useCallback(() => {
    if (project) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? project.screenshots.length - 1 : prevIndex - 1
      );
    }
  }, [project]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevImage();
      } else if (event.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNextImage, handlePrevImage]);

  // Handle touch event start
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // Handle touch event end
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      const touchEnd = e.changedTouches[0].clientX;
      const swipeDistance = touchStartX - touchEnd;

      if (swipeDistance > 50) {
        handleNextImage();
      } else if (swipeDistance < -50) {
        handlePrevImage();
      }
    }
    setTouchStartX(null);
  };

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-semibold">Project not found</div>
      </div>
    );
  }

  // Open Image Viewer
  const handleOpenImageViewer = (index: number) => {
    setCurrentImageIndex(index);
    setShowImageViewer(true);
  };

  // Close Image Viewer
  const handleCloseImageViewer = () => {
    setShowImageViewer(false);
  };

  return (
    <div
      className="project-page w-full max-w-screen-xl mx-auto"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sections Navigator Panel */}
      <div className="relative">
        <SectionsNavigator
          sections={sectionAnchors}
          navVisible={navVisible}
          onToggle={() => setNavVisible((v) => !v)}
        />
      </div>

      {/* Project Header */}
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
            src={project.image}
            alt={project.name}
            className="rounded-lg w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
          <h1 className="text-2xl sm:text-4xl font-bold">{project.name}</h1>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 sm:p-6 mb-8">
        {/* Screenshots Carousel */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-8 sm:mb-12 relative">
            {/* Current Screenshot */}
            <div className="flex items-center justify-center">
              <img
                src={project.screenshots[currentImageIndex]}
                alt={`Screenshot ${currentImageIndex + 1}`}
                className="rounded-lg object-contain w-full max-h-[250px] sm:max-h-[500px] cursor-pointer"
                onClick={() => handleOpenImageViewer(currentImageIndex)}
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevImage}
              aria-label="Previous screenshot"
              className="toggle-navigation-btn absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-4 text-3xl sm:text-5xl min-w-10 min-h-10"
            >
              <FaChevronLeft className="w-6 h-6 sm:w-10 sm:h-10" />
            </button>
            <button
              onClick={handleNextImage}
              aria-label="Next screenshot"
              className="toggle-navigation-btn absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-4 text-3xl sm:text-5xl min-w-10 min-h-10"
            >
              <FaChevronRight className="w-6 h-6 sm:w-10 sm:h-10" />
            </button>

            {/* Indicators */}
            <div className="carousel-indicators flex justify-center gap-2 mt-4">
              {project.screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to screenshot ${index + 1}`}
                  className={`carousel-indicator rounded-full transition-all duration-200 w-3 h-3 sm:w-5 sm:h-5${
                    index === currentImageIndex ? " active" : ""
                  }`}
                ></button>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <h2
          id="description"
          className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6"
        >
          Description
        </h2>
        <p className="text-base sm:text-xl text-gray-700 mb-4 sm:mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8 sm:mb-12">
          <h2
            id="tech-stack"
            className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6"
          >
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.tech.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </div>
        </div>

        {/* My Involvement */}
        <div className="mb-8 sm:mb-12">
          <h2
            id="my-involvement"
            className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6"
          >
            My Involvement
          </h2>
          <ul className="list-disc list-outside pl-6 text-base sm:text-xl text-gray-700">
            {(project.involvement ?? []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="mb-8 sm:mb-12">
          <h2
            id="links"
            className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6"
          >
            Links
          </h2>
          <ul className="list-disc list-inside text-base sm:text-xl text-gray-700">
            {Array.isArray(project.links)
              ? project.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))
              : project.links && (
                  <li>
                    <a
                      href={project.links.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-700"
                    >
                      {project.links.label}
                    </a>
                  </li>
                )}
          </ul>
        </div>
      </div>

      {/* Image Viewer Modal */}
      {project.screenshots && (
        <ImageViewer
          show={showImageViewer}
          images={project.screenshots}
          currentIndex={currentImageIndex}
          onClose={handleCloseImageViewer}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </div>
  );
};

export default ProjectPage;
