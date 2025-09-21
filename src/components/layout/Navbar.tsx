import { useState } from "react";
import BrandLogo from "./BrandLogo";
import NavLinks from "./NavLinks";
import HamburgerButton from "./HamburgerButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { useSwipeNavigation } from "../../hooks/useSwipeNavigation";
import { useTheme } from "../../hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const { t } = useTranslation();

  // Use the centralized swipe hook: swipe right closes menu
  const { handleTouchStart, handleTouchEnd } = useSwipeNavigation(
    () => setIsMenuOpen(false), // onPrev (swipe right)
    () => {} // onNext (swipe left, do nothing)
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

        {/* Hamburger Menu Button (Visible only on Mobile) */}
        <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} theme={theme === "dark" ? "dark" : "light"} />

        {/* Menu */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-8 fixed md:static top-0 right-0 h-full w-1/2 md:w-auto text-black dark:text-white transition-all duration-300 ${
            isMenuOpen ? "bg-white" : ""
          } md:bg-transparent ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
          onTouchStart={isMenuOpen ? handleTouchStart : undefined}
          onTouchEnd={isMenuOpen ? handleTouchEnd : undefined}
        >
          {/* Navigation Links */}
          <NavLinks onClick={() => setIsMenuOpen(false)} />
          {/* Theme Switcher */}
          <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="toggle-theme-btn flex items-center space-x-2 px-4 py-4"
              >
                <span className="text-base md:text-xl">
                  {theme === "light" ? <FaMoon /> : <FaSun />}
                </span>
                <span className="md:hidden text-base">
                  {theme === "light" ? t("navbar.dark_mode") : t("navbar.light_mode")}
                </span>
              </button>
          {/* Language Switcher */}
          <LanguageSwitcher />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
