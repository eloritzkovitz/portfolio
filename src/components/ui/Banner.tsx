import { Typewriter } from "react-simple-typewriter";
import SocialLinkIcon from "../socials/SocialLinkIcon";
import socialLinks from "../../data/socialLinksData";

const bannerSocials = socialLinks.filter((link) =>
  ["linkedin", "github", "cv"].includes(link.iconKey)
);

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
            {bannerSocials.map((link) => (
              <SocialLinkIcon key={link.label} link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;