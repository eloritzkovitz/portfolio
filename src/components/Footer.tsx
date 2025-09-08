import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import linksData from "../data/linksData";

function Footer() {
  return (
    <footer className="py-4 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Socials Row */}
        <div className="flex justify-center gap-10 mb-8">
          <a
            href={linksData.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-125 hover:text-blue-600 text-gray-500 text-4xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={linksData.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-125 hover:text-black text-gray-500 text-4xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={linksData.npm.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-125 hover:text-red-600 text-gray-500 text-4xl"
            aria-label="npm"
          >
            <SiNpm />
          </a>
        </div>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} Elor Itzkovitz. All rights reserved.
          <br />
          <a
            href={linksData.portfolio.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700 underline"
          >
            {linksData.portfolio.text}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
