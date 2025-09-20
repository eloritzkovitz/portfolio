import React from "react";

interface SectionProps {
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <div id={id} className="p-6 sm:p-4 mb-6">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
      {title}
    </h2>
    {children}
  </div>
);

export default Section;