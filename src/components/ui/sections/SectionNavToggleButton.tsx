import React from "react";

interface SectionNavToggleButtonProps {
  onClick: () => void;
  ariaLabel: string;
  icon: React.ReactNode;
  className?: string;
}

const SectionNavToggleButton: React.FC<SectionNavToggleButtonProps> = ({
  onClick,
  ariaLabel,
  icon,
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`toggle-show-btn ${className}`}
    aria-label={ariaLabel}
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") onClick();
    }}
  >
    {icon}
  </button>
);

export default SectionNavToggleButton;