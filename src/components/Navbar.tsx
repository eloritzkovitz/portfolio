import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="flex items-center space-x-2">          
          <h1 className="text-2xl font-bold ml-12">
            <Link to="/">My Portfolio</Link>
          </h1>
        </div>

        {/* Menu */}
        <ul className="flex space-x-8 mr-12">
          <li>
            <Link
              to="/"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <FaHome /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <FaUser /> <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <FaProjectDiagram /> <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <FaEnvelope /> <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;