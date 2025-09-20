import React from "react";

interface RichTextWithLinksProps {
  content: string;
  links?: Record<string, { url: string; text: string }>;
}

const RichTextWithLinks: React.FC<RichTextWithLinksProps> = ({ content, links }) => {
  if (!links) return <>{content}</>;
  return (
    <>
      {content.split(/({link:[^}]+})/g).map((part, idx) => {
        const match = part.match(/{link:([^}]+)}/);
        if (match && links[match[1]]) {
          const { url, text } = links[match[1]];
          return (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-700 underline"
            >
              {text}
            </a>
          );
        }
        return part;
      })}
    </>
  );
};

export default RichTextWithLinks;