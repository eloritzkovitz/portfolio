import React from "react";

interface TechTagProps {
  children: React.ReactNode;
}

const TechTag: React.FC<TechTagProps> = ({ children }) => (
  <span className="tech-tag text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl px-2 py-1 sm:px-3 sm:py-1.5 rounded">
    {children}
  </span>
);

export default TechTag;