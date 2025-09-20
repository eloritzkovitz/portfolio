import React from "react";

interface InvolvementListProps {
  involvement: string[];
}

const InvolvementList: React.FC<InvolvementListProps> = ({ involvement }) => (
  <ul className="list-disc list-outside pl-6 text-base sm:text-xl text-gray-700">
    {involvement.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default InvolvementList;