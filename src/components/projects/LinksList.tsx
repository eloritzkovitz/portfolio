import React from "react";

interface LinkItem {
  url: string;
  label: string;
}
interface LinksListProps {
  links: LinkItem[] | LinkItem;
}

const LinksList: React.FC<LinksListProps> = ({ links }) => {
  if (Array.isArray(links)) {
    return (
      <ul className="list-disc list-inside text-base sm:text-xl text-gray-700">
        {links.map((link, index) => (
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
        ))}
      </ul>
    );
  }
  return (
    <ul className="list-disc list-inside text-base sm:text-xl text-gray-700">
      <li>
        <a
          href={links.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-700"
        >
          {links.label}
        </a>
      </li>
    </ul>
  );
};

export default LinksList;