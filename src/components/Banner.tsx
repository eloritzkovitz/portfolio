import { FaLinkedin, FaGithub, FaIdBadge } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

function Banner() {
  return (
    <div className="banner h-auto min-h-[60vh] md:h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-2 sm:px-0">
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-2 sm:px-8 py-8 md:py-10 flex flex-col md:flex-row items-center">
        <div className="flex-1 w-full text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold mb-4 text-gray-900">
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
          <h2 className="text-xl sm:text-xl md:text-4xl font-bold mb-4 text-gray-900">
            Full-Stack Developer
          </h2>
          <p className="text-sm sm:text-lg md:text-2xl text-gray-900 mb-8">
            Building robust web apps with React, Node.js, and modern cloud
            tools.
          </p>          
          {/* Social Links */}
          <div className="hidden md:flex gap-8 justify-center md:justify-start mb-6">
            <a
              href="https://linkedin.com/in/elor-itzkovitz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-teal-600 transition-transform duration-200 hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="https://github.com/eloritzkovitz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-black transition-transform duration-200 hover:scale-125"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="https://drive.google.com/file/d/1OpVt_u-JYBrR1lzfSVPQL-Hv7yBLbxXr/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-black transition-transform duration-200 hover:scale-125"
              aria-label="Resume"
            >
              <FaIdBadge className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
