import { useEffect, useState } from "react";
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
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
              src={theme === "dark" ? "/icons/logo-white.png" : "/icons/logo-black.png"}
              alt="Logo"
              className="w-12 h-12"
              style={{ height: "50px", width: "50px", marginRight: "20px" }}
            />
          </Link>
          <h1 className="hidden md:block text-2xl font-bold">
            <Link to="/">Elor Itzkovitz</Link>
          </h1>
        </div>

        {/* Hamburger Menu Button (Visible Only on Mobile) */}
        <button
          className={`hamburger-button md:hidden ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-8 fixed md:static top-0 right-0 h-full w-1/2 md:w-auto text-black dark:text-white transition-all duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
        >
          <li>
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaHome /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center space-x-2 px-4 py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaUser /> <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="flex items-center space-x-2 px-4 py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaProjectDiagram /> <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-4 py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaEnvelope /> <span>Contact</span>
            </Link>
          </li>
          {/* Theme Switcher */}
          <li className="flex items-center px-4 py-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="toggle-theme-btn flex items-center text-xl space-x-2"              
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
