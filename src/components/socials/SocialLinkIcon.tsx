import React from "react";
import iconMap from "./SocialIconMap";
import { SocialLink } from "../../types/socialLink";

interface SocialLinkIconProps {
  link: SocialLink;
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
    {iconMap[link.iconKey]}
  </a>
);

export default SocialLinkIcon;