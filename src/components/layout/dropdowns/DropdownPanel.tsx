import { useState, useRef, useEffect, ReactNode } from "react";

interface DropdownPanelProps {
  button: (props: {
    open: boolean;
    setOpen: (v: boolean) => void;
  }) => ReactNode;
  children: ReactNode | ((props: { close: () => void }) => ReactNode);
  className?: string;
  panelClassName?: string;
  direction?: "rtl" | "ltr";
  onClose?: () => void;
}

export default function DropdownPanel({
  button,
  children,
  className = "",
  panelClassName = "",
  direction = "ltr",
  onClose,
}: DropdownPanelProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
        if (onClose) onClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <div className={`relative ${className}`} ref={ref} dir={direction}>
      {/* Button to toggle dropdown */}
      {button({ open, setOpen })}
      {/* Dropdown panel */}
      <div
        className={`absolute mt-2 w-full max-w-xs sm:w-72 bg-white rounded shadow-2xl py-2 z-100 transition-all duration-200
    ${direction === "rtl" ? "left-0" : "right-0"}
    ${
      open
        ? "opacity-100 pointer-events-auto translate-y-0"
        : "opacity-0 pointer-events-none -translate-y-2"
    }
    ${panelClassName}
  `}
        style={{ minWidth: 0 }}
      >
        {typeof children === "function"
          ? children({ close: () => setOpen(false) })
          : open
          ? children
          : null}
      </div>
    </div>
  );
}
