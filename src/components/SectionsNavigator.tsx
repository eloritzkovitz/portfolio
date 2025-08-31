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
  <div className="group hidden sm:block">
    {/* Sliding Panel */}
    <div
      className={`fixed left-0 top-32 z-50 flex items-center`}
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
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center w-full h-full relative">
        <div className="flex flex-col gap-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block hover:text-teal-700 hover:bg-transparent font-semibold transition-colors py-2 px-2 rounded hover:bg-gray-100"
            >
              {section.label}
            </a>
          ))}
        </div>
        {/* Hide Button */}
        {navVisible && (
          <button
            onClick={onToggle}
            className="toggle-show-btn absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
            aria-label="Hide navigation panel"
            style={{ zIndex: 1 }}
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
    {/* Show Button (always visible when panel is hidden) */}
    {!navVisible && (
      <div
        className="fixed left-0 top-32 z-40 flex items-center justify-center"
        style={{ width: PANEL_WIDTH, height: PANEL_HEIGHT }}
      >
        <button
          onClick={onToggle}
          className="toggle-show-btn -ml-30 bg-white rounded-full shadow-md p-2 transition flex items-center justify-center"
          aria-label="Show navigation panel"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>
    )}
  </div>
);

export default SectionsNavigator;
