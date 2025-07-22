import React from "react";

interface Section {
  id: string;
  label: string;
}

const scrollMargin = "6rem";

const SectionsNavigator: React.FC<{ sections: Section[] }> = ({ sections }) => (
  <>
    <nav className="hidden sm:flex flex-col gap-4 fixed left-0 top-32 z-40 px-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="block text-teal-500 hover:text-teal-700 hover:bg-transparent font-semibold transition-colors py-2 px-2 rounded hover:bg-gray-100"
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
    <style>
      {sections
        .map(
          (section) =>
            `#${section.id} { scroll-margin-top: ${scrollMargin}; }`
        )
        .join("\n")}
    </style>
  </>
);

export default SectionsNavigator;