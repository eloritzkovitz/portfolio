import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Section {
  id: string;
  label: string;
}

interface SectionsNavigatorProps {
  sections: Section[];
  navVisible: boolean;
  onToggle: () => void;
}

const PANEL_WIDTH = 200;
const PANEL_HEIGHT = 250;

const SectionsNavigator: React.FC<SectionsNavigatorProps> = ({
  sections,
  navVisible,
  onToggle,
}) => (
  <div className="group">
    {/* Sliding Panel */}
    <div
      className={`fixed left-0 top-32 z-40 flex items-center`}
      style={{
        width: PANEL_WIDTH,
        height: PANEL_HEIGHT,
        pointerEvents: navVisible ? "auto" : "none",
        transition: "transform 0.4s cubic-bezier(.4,0,.2,1)",
        transform: navVisible
          ? "translateX(0)"
          : `translateX(-${PANEL_WIDTH}px)`,
      }}
    >
      {navVisible && (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center w-full h-full">
          <div className="flex flex-col gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-gray-700 hover:text-teal-700 hover:bg-transparent font-semibold transition-colors py-2 px-2 rounded hover:bg-gray-100"
              >
                {section.label}
              </a>
            ))}
          </div>
          <button
            onClick={onToggle}
            className="toggle-show-btn ml-12 bg-white rounded-full shadow p-2 transition flex items-center self-center opacity-0 group-hover:opacity-100"
            aria-label="Hide navigation panel"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
    {/* Show Button (always visible when panel is hidden) */}
    {!navVisible && (
      <div
        className="fixed left-0 top-32 z-40 flex items-center justify-center"
        style={{ width: PANEL_WIDTH, height: PANEL_HEIGHT }}
      >
        <button
          onClick={onToggle}
          className="toggle-show-btn -ml-30 bg-white rounded-full shadow p-2 transition flex items-center justify-center"
          aria-label="Show navigation panel"
          style={{ width: "48px", height: "48px" }}
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>
    )}
  </div>
);

export default SectionsNavigator;
