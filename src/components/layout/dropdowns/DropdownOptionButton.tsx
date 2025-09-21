import React from "react";

interface DropdownOptionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const DropdownOptionButton: React.FC<DropdownOptionButtonProps> = ({
  children,
  className = "",
  ...props
}) => (
  <button
    className={`dropdown-menu-button w-full md:w-[95%] mx-auto block flex items-center justify-start gap-x-2 md:gap-x-3 px-4 py-3 transition rounded ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default DropdownOptionButton;