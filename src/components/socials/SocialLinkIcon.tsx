import React from "react";
import iconMap from "./SocialIconMap";
import { LinkType } from "../../types/link";

interface SocialLinkIconProps {
  link: LinkType;
  className?: string;
}

const SocialLinkIcon: React.FC<SocialLinkIconProps> = ({ link, className }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={link.label}
    className={`text-gray-900 transition-transform duration-200 hover:scale-125 hover:text-teal-600 ${className || ""}`}
    title={link.text || link.label}
  >
    {link.iconKey && iconMap[link.iconKey] ? iconMap[link.iconKey] : null}
  </a>
);

export default SocialLinkIcon;