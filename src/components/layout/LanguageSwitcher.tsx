import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaGlobe, FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../data/languages";
import { useLanguage } from "../../hooks/useLanguage";

// Helper: which languages are RTL
const RTL_LANGS = ["he", "ar", "fa", "ur"];

export default function LanguageSwitcher({
  onSelect,
}: {
  onSelect?: () => void;
}) {
  const { language, setLanguage } = useLanguage();
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
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

  const current = LANGUAGES.find((l) => l.code === language);

  return (
    <div className="relative" ref={ref} dir={isRTL ? "rtl" : "ltr"}>
      {/* Main button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="dropdown-menu-button w-full inline-flex items-center gap-x-3 px-4 py-3 text-lg md:text-xl hover:bg-gray-100 transition relative"
        aria-haspopup="true"
        aria-expanded={open}
        type="button"
        style={{ border: "none" }}
      >
        <FaGlobe className="text-xl md:text-2xl" />
        <span className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
          {t("navbar.language")}: {current?.label}
        </span>
        {/* Chevron positioned at the edge */}
        <span
          className={`absolute top-1/2 transform -translate-y-1/2 ${
            isRTL ? "left-4" : "right-4"
          }`}
        >
          {open ? (
            <FaChevronUp className="text-base md:text-lg" />
          ) : (
            <FaChevronDown className="text-base md:text-lg" />
          )}
        </span>
      </button>
      {/* Dropdown options */}
      <div
        className={`absolute mt-2 w-48 bg-white rounded shadow-lg py-2 z-50 transition-all duration-200
    ${isRTL ? "left-0" : "right-0"}
    ${
      open
        ? "opacity-100 pointer-events-auto translate-y-0"
        : "opacity-0 pointer-events-none -translate-y-2"
    }
  `}
      >
        {LANGUAGES.map((lng) => {
          const isOptionRTL = RTL_LANGS.includes(lng.code);
          return (
            <button
              key={lng.code}
              onClick={() => {
                setLanguage(lng.code);
                if (onSelect) onSelect();
                setOpen(false);
              }}
              className={`dropdown-menu-button w-full flex items-center px-4 py-2 text-lg md:text-xl hover:bg-gray-100 transition ${
                lng.code === language ? "font-bold" : ""
              }`}
              style={{
                justifyContent: isOptionRTL ? "flex-end" : "flex-start",
                direction: isOptionRTL ? "rtl" : "ltr",
              }}
            >
              <span
                className={`flex-1 ${isOptionRTL ? "text-right" : "text-left"}`}
              >
                {lng.label}
              </span>
              {lng.code === language && (
                <FaCheck
                  className={
                    isOptionRTL ? "mr-2 text-green-500" : "ml-2 text-green-500"
                  }
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
