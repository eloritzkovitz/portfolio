import { useState } from "react";
import BrandLogo from "./BrandLogo";
import HamburgerButton from "./HamburgerButton";
import HamburgerMenu from "./HamburgerMenu";
import NavLinks from "./NavLinks";
import SettingsDropdown from "./SettingsDropdown";
import { useSwipeNavigation } from "../../hooks/useSwipeNavigation";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const { theme, toggleTheme } = useTheme();

  // Use the centralized swipe hook: swipe right closes menu
  const { handleTouchStart, handleTouchEnd } = useSwipeNavigation(
    () => setIsMenuOpen(false), // onPrev (swipe right)
    () => {}, // onNext (swipe left, do nothing)
    isRTL
  );

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand/Logo */}
        <BrandLogo theme={theme === "dark" ? "dark" : "light"} />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center">
          <NavLinks />
          <SettingsDropdown theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Hamburger Menu Button (Visible only on Mobile) */}
        <HamburgerButton
          isOpen={isMenuOpen}
          onClick={toggleMenu}
          theme={theme === "dark" ? "dark" : "light"}
        />

        {/* Hamburger Menu (Visible only on Mobile) */}
        <HamburgerMenu
          isOpen={isMenuOpen}
          isRTL={isRTL}
          theme={theme}
          toggleTheme={toggleTheme}
          onClose={() => setIsMenuOpen(false)}
          handleTouchStart={isMenuOpen ? handleTouchStart : undefined}
          handleTouchEnd={isMenuOpen ? handleTouchEnd : undefined}
          className="md:hidden"
        />
      </div>
    </nav>
  );
}

export default Navbar;
