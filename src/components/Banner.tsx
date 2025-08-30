import { FaLinkedin, FaGithub, FaIdBadge } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const primarySkills = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "C#",
];

function Banner() {
  return (
    <div className="banner h-[calc(100vh-4rem)] mb-8 flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-2 sm:px-12 py-10 flex flex-col sm:flex-row items-center">
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-7xl sm:text-9xl font-extrabold mb-4 text-gray-900">
            <Typewriter
              words={["Elor Itzkovitz"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={120}
              deleteSpeed={120}
              delaySpeed={5000}
            />
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
            Full-Stack Developer
          </h2>
          <p className="text-xl text-gray-900 mb-8">
            Building robust web apps with React, Node.js, and modern cloud
            tools.
          </p>
          <div className="flex flex-wrap justify-start gap-2 mb-8">
            {primarySkills.map((skill, idx) => (
              <span
                key={idx}
                className="tech-tag text-xs sm:text-base px-2 py-1 sm:px-3 sm:py-1.5 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex gap-4 justify-center sm:justify-start">
            <a
              href="https://linkedin.com/in/elor-itzkovitz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-teal-600 transition-transform duration-200 hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/eloritzkovitz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-transform duration-200 hover:scale-125"
              aria-label="GitHub"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://drive.google.com/file/d/1OpVt_u-JYBrR1lzfSVPQL-Hv7yBLbxXr/view?usp=drive_link"              
              target="_blank"
              rel="noopener noreferrer"                       
              className="text-gray-500 hover:text-black transition-transform duration-200 hover:scale-125"
              aria-label="Resume"
            >
              <FaIdBadge className="w-8 h-8" />
            </a>
          </div>
          <div className="mt-6">
            <Link
              to="/about"
              className="inline-flex text-gray-900 text-xl font-bold py-2 transform hover:scale-110"
            >
              Learn more &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
