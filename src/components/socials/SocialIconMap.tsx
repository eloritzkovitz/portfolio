import { FaLinkedin, FaGithub, FaIdBadge, FaEnvelope, FaLink } from "react-icons/fa";
import { SiNpm } from "react-icons/si";

export const socialIconClass = "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <FaLinkedin className={socialIconClass} />,
  github: <FaGithub className={socialIconClass} />,
  cv: <FaIdBadge className={socialIconClass} />,
  npm: <SiNpm className={socialIconClass} />,
  portfolio: <FaLink className={socialIconClass} />,
  email: <FaEnvelope className={socialIconClass} />,
};

export default iconMap;