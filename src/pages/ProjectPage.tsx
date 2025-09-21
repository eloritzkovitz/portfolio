import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Section from "../components/layout/Section";
import ProjectHeader from "../components/projects/ProjectHeader";
import InvolvementList from "../components/projects/InvolvementList";
import LinksList from "../components/projects/LinksList";
import TechTagList from "../components/tech/TechTagList";
import ImageViewer from "../components/ui/media/ImageViewer";
import SectionsNavigator from "../components/ui/sections/SectionsNavigator";
import ScreenshotsCarousel from "../components/ui/media/ScreenshotsCarousel";
import projects from "../data/projectsData";
import { Project } from "../types/project";
import { slugify } from "../utils/string";

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [navVisible, setNavVisible] = useState(true);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  // Section anchors for navigation
  const sectionAnchors = [
    { id: "description", label: "Description" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "involvement", label: "My Involvement" },
    { id: "links", label: "Links" },
  ];

  // Find project by slugified name
  const project: Project | undefined = projects.find(
    (proj) => slugify(proj.name) === projectId
  );

  // If project not found, display message
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
    <div className="project-page w-full max-w-screen-xl mx-auto">
      {/* Sections Navigator Panel */}
      <div className="relative">
        <SectionsNavigator
          sections={sectionAnchors}
          navVisible={navVisible}
          onToggle={() => setNavVisible((v) => !v)}
        />
      </div>

      {/* Project Header */}
      <ProjectHeader name={project.name} icon={project.icon} />

      {/* Details */}
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Screenshots Carousel */}
        {project.screenshots && project.screenshots.length > 0 && (
          <ScreenshotsCarousel
            screenshots={project.screenshots}
            currentIndex={currentImageIndex}
            setCurrentIndex={setCurrentImageIndex}
            onOpenViewer={handleOpenImageViewer}
            keyboardNavigationEnabled={!showImageViewer}
          />
        )}

        {/* Description */}
        <Section id="description" title={t("projects.description")}>
          <p className="text-base sm:text-xl text-gray-700">
            {t(project.description)}
          </p>
        </Section>

        {/* Tech Stack */}
        <Section id="tech-stack" title={t("projects.technologies")}>
          <TechTagList tech={project.tech} />
        </Section>

        {/* My Involvement */}
        <Section id="involvement" title={t("projects.involvement")}>
          <InvolvementList involvement={(project.involvement ?? []).map((item) => t(item))} />
        </Section>

        {/* Links */}
        <Section id="links" title={t("projects.links")}>
          <LinksList links={project.links ?? []} />
        </Section>
      </div>

      {/* Image Viewer Modal */}
      {project.screenshots && (
        <ImageViewer
          show={showImageViewer}
          images={project.screenshots}
          currentIndex={currentImageIndex}
          setCurrentIndex={setCurrentImageIndex}
          onClose={handleCloseImageViewer}
          keyboardNavigationEnabled={showImageViewer}
        />
      )}
    </div>
  );
};

export default ProjectPage;
