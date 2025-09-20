import React from "react";

interface TechIconProps {
  icon: React.ReactNode;
  label: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, label }) => (
  <span
    role="img"
    aria-label={label}
    className="flex items-center justify-center w-10 h-10 mb-3"
  >
    {icon}
  </span>
);

export default TechIcon;