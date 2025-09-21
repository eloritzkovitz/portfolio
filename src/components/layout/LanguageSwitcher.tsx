import { FaGlobe } from "react-icons/fa";
import { useLanguage } from "../../hooks/useLanguage";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}      
      className="toggle-theme-btn flex items-center space-x-2 px-4 py-4 focus:outline-none bg-transparent"
      aria-label="Switch language"
      type="button"
      style={{ border: "none" }}
    >
      <FaGlobe className="text-base md:text-xl" />
      <span>{language === "en" ? "EN" : "HE"}</span>
    </button>
  );
}