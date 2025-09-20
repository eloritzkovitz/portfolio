import React from "react";
import { Section } from "../../../types/section";

interface SectionNavLinkProps {
  section: Section;
  isActive: boolean;
}

const SectionNavLink: React.FC<SectionNavLinkProps> = ({ section, isActive }) => (
  <a
    href={`#${section.id}`}
    className="block hover:text-teal-700 hover:bg-transparent font-semibold transition-colors py-2 px-2 rounded hover:bg-gray-100"
    aria-current={isActive ? "true" : undefined}
  >
    {section.label}
  </a>
);

export default SectionNavLink;