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
    <nav
      className={`fixed top-0 ${
        isRTL ? "left-0" : "right-0"
      } h-full w-4/5 max-w-xs text-black dark:text-white transition-all duration-300 z-50
      ${
        isOpen
          ? "bg-white translate-x-0"
          : isRTL
          ? "-translate-x-full"
          : "translate-x-full"
      }
      ${className}
      flex flex-col p-6
      `}
      onTouchStart={isOpen ? handleTouchStart : undefined}
      onTouchEnd={isOpen ? handleTouchEnd : undefined}
    >
      <ul className="flex flex-col space-y-2 p-0 m-0">
        {/* Render NavLinks as <li> elements */}
        {NavLinks({ onClick: onClose })}
        <li>
          <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;