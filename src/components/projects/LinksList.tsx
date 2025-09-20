import React from "react";
import { LinkType } from "../../types/link";

interface LinksListProps {
  links: LinkType[] | LinkType;
}

const LinksList: React.FC<LinksListProps> = ({ links }) => {
  // Return null if links is undefined or an empty array
  if (!links || (Array.isArray(links) && links.length === 0)) return null;

  // Ensure links are always treated as an array
  const linksArray = Array.isArray(links) ? links : [links];

  return (
    <ul className="list-disc list-inside text-base sm:text-xl text-gray-700">
      {linksArray.map((link) => (
        <li key={link.url}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700"
            aria-label={link.label}
          >
            {link.text || link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinksList;