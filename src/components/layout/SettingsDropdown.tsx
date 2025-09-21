import { useState, useRef, useEffect } from "react";
import {
  FaCog,
  FaMoon,
  FaSun,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface SettingsDropdownProps {
  theme: string;
  toggleTheme: () => void;
}

const SettingsDropdown: React.FC<SettingsDropdownProps> = ({
  theme,
  toggleTheme,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div
      className={`relative ${isRTL ? "mr-4" : "ml-4"}`}
      ref={ref}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="toggle-theme-btn inline-flex items-center gap-x-3 px-4 py-3 text-lg md:text-xl rounded hover:bg-gray-100 transition shadow-sm"
        aria-haspopup="true"
        aria-expanded={open}
        type="button"
      >
        <FaCog className="text-xl md:text-2xl" />
        {open ? (
          <FaChevronUp className="text-xl md:text-2xl" />
        ) : (
          <FaChevronDown className="text-xl md:text-2xl" />
        )}
      </button>
      {/* Always render the dropdown, but control visibility with classes */}
      <div
        className={`absolute mt-2 w-72 bg-white rounded shadow-lg py-2 z-50 transition-all duration-200
          ${isRTL ? "left-0" : "right-0"}
          ${
            open
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-2"
          }
        `}
        style={{ minWidth: "12rem" }}
      >
        <button
          onClick={() => {
            toggleTheme();
            setOpen(false);
          }}
          className="dropdown-menu-button w-full inline-flex items-center gap-x-3 px-4 py-3 text-lg md:text-xl transition"
          type="button"
        >
          {theme === "light" ? (
            <FaMoon className="text-lg md:text-xl" />
          ) : (
            <FaSun className="text-lg md:text-xl" />
          )}
          <span>
            {theme === "light" ? t("navbar.dark_mode") : t("navbar.light_mode")}
          </span>
        </button>
        <LanguageSwitcher onSelect={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default SettingsDropdown;
