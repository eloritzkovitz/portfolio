import NavLinks from "./NavLinks";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface HamburgerMenuProps {
  isOpen: boolean;
  isRTL: boolean;
  theme: string;
  toggleTheme: () => void;
  onClose: () => void;
  handleTouchStart?: (e: React.TouchEvent) => void;
  handleTouchEnd?: (e: React.TouchEvent) => void;
  className?: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  isRTL,
  theme,
  toggleTheme,
  onClose,
  handleTouchStart,
  handleTouchEnd,
  className = "",
}) => {
  const { t } = useTranslation();

  return (
    <ul
      className={`flex flex-col fixed top-0 ${
        isRTL ? "left-0" : "right-0"
      } h-full w-1/2 text-black dark:text-white transition-all duration-300 z-50
        ${isOpen ? "bg-white translate-x-0" : isRTL ? "-translate-x-full" : "translate-x-full"}
        ${className}
      `}
      onTouchStart={isOpen ? handleTouchStart : undefined}
      onTouchEnd={isOpen ? handleTouchEnd : undefined}
    >
      <NavLinks onClick={onClose} />
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="toggle-theme-btn flex items-center space-x-2 px-4 py-4"
      >
        <span className="text-base">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </span>
        <span className="text-base">
          {theme === "light"
            ? t("navbar.dark_mode")
            : t("navbar.light_mode")}
        </span>
      </button>
      <LanguageSwitcher />
    </ul>
  );
};

export default HamburgerMenu;