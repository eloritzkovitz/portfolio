import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Section } from "../../../types/section";
import SectionNavLink from "./SectionNavLink";
import SectionNavToggleButton from "./SectionNavToggleButton";
import { useTranslation } from "react-i18next";

interface SectionsNavigatorProps {
  sections: Section[];
  navVisible: boolean;
  onToggle: () => void;
  panelWidth?: number;
  panelHeight?: number;
  currentSectionId?: string;
}

const DEFAULT_PANEL_WIDTH = 200;
const DEFAULT_PANEL_HEIGHT = 250;

const SectionsNavigator: React.FC<SectionsNavigatorProps> = ({
  sections,
  navVisible,
  onToggle,
  panelWidth = DEFAULT_PANEL_WIDTH,
  panelHeight = DEFAULT_PANEL_HEIGHT,
  currentSectionId,
}) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <nav
      className="group hidden sm:block"
      role="navigation"
      aria-label="Section navigation"
    >
      {/* Sliding Panel */}
      <div
        className={`fixed ${isRTL ? "right-0" : "left-0"} top-32 z-50 flex items-center`}
        style={{
          width: panelWidth,
          height: panelHeight,
          pointerEvents: navVisible ? "auto" : "none",
          transition: "transform 0.4s cubic-bezier(.4,0,.2,1)",
          transform: navVisible
            ? "translateX(0)"
            : isRTL
            ? `translateX(${panelWidth}px)`
            : `translateX(-${panelWidth}px)`,
        }}
      >
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center w-full h-full relative">
          <div className="flex flex-col gap-2 w-full">
            {sections.map((section) => (
              <SectionNavLink
                key={section.id}
                section={section}
                isActive={currentSectionId === section.id}
              />
            ))}
          </div>
          {/* Hide Button */}
          {navVisible && (
            <SectionNavToggleButton
              onClick={onToggle}
              ariaLabel="Hide navigation panel"
              icon={
                isRTL ? (
                  <FaChevronRight className="w-5 h-5" />
                ) : (
                  <FaChevronLeft className="w-5 h-5" />
                )
              }
              className={`absolute top-1/2 ${
                isRTL
                  ? "left-0 -translate-y-1/2 -translate-x-1/2"
                  : "right-0 -translate-y-1/2 translate-x-1/2"
              } bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition`}
            />
          )}
        </div>
      </div>
      {/* Show Button (always visible when panel is hidden) */}
      {!navVisible && (
        <div
          className={`fixed ${isRTL ? "right-0" : "left-0"} top-32 z-40 flex items-center justify-center`}
          style={{ width: panelWidth, height: panelHeight }}
        >
          <SectionNavToggleButton
            onClick={onToggle}
            ariaLabel="Show navigation panel"
            icon={
              isRTL ? (
                <FaChevronLeft className="w-5 h-5" />
              ) : (
                <FaChevronRight className="w-5 h-5" />
              )
            }
            className={`${
              isRTL ? "-mr-30" : "-ml-30"
            } bg-white rounded-full shadow-md p-2 transition flex items-center justify-center`}
          />
        </div>
      )}
    </nav>
  );
};

export default SectionsNavigator;