import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Touch swipe logic for dismissing menu
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX.current;
      if (deltaX > 80) {
        // swipe right threshold
        setIsMenuOpen(false);
      }
      touchStartX.current = null;
    }
  };

  // Update theme class on document element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img
              src={
                theme === "dark"
                  ? "/icons/logo-white.png"
                  : "/icons/logo-black.png"
              }
              alt="Logo"
              className="logo w-12 h-12"
              style={{ height: "50px", width: "50px", marginRight: "20px" }}
            />
          </Link>
          <h2 className="hidden md:block text-3xl font-bold">
            <Link to="/">Elor Itzkovitz</Link>
          </h2>
        </div>

        {/* Hamburger Menu Button (Visible only on Mobile) */}
        <button
          className={`hamburger-button md:hidden z-50 ${
            isMenuOpen ? "open" : ""
          } ${
            theme === "dark"
              ? "text-white !bg-gray-800"
              : "text-black !bg-gray-100"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

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
          <li>
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaHome className="text-base md:text-xl" /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center space-x-2 px-4 py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaUser className="text-base md:text-xl" /> <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="flex items-center space-x-2 px-4 py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaProjectDiagram className="text-base md:text-xl" />{" "}
              <span>Projects</span>
            </Link>
          </li>          
          <li>
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-4 py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaEnvelope className="text-base md:text-xl" />{" "}
              <span>Contact</span>
            </Link>
          </li>
          {/* Theme Switcher */}
          <li className="flex items-center px-4 py-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="toggle-theme-btn flex items-center space-x-2"
            >
              <span className="text-base md:text-xl">
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </span>
              <span className="md:hidden text-base">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;