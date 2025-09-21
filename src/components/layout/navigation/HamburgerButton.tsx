import { FaBars, FaTimes } from "react-icons/fa";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  theme: "light" | "dark";
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick, theme }) => (
  <button
    className={`hamburger-button md:hidden z-50 ${isOpen ? "open" : ""} ${
      theme === "dark" ? "text-white !bg-gray-800" : "text-black !bg-gray-100"
    }`}
    onClick={onClick}
    aria-label="Toggle Menu"
  >
    {isOpen ? <FaTimes /> : <FaBars />}
  </button>
);

export default HamburgerButton;