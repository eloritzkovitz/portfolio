import NavLinks from "./NavLinks";
import LanguageSwitcher from "../dropdowns/LanguageSwitcher";
import ThemeSwitcher from "../dropdowns/ThemeSwitcher";

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
  return (
    <ul
      className={`flex flex-col fixed top-0 ${
        isRTL ? "left-0" : "right-0"
      } h-full w-1/2 text-black dark:text-white transition-all duration-300 z-50
  ${
    isOpen
      ? "bg-white translate-x-0"
      : isRTL
      ? "-translate-x-full"
      : "translate-x-full"
  }
  ${className}
  `}
      onTouchStart={isOpen ? handleTouchStart : undefined}
      onTouchEnd={isOpen ? handleTouchEnd : undefined}
    >
      <NavLinks onClick={onClose} />
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      <LanguageSwitcher />
    </ul>
  );
};

export default HamburgerMenu;
