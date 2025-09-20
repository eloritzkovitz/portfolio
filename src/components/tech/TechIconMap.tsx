import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiDocker,
} from "react-icons/si";
import type { LinkType } from "../../types/link";

export const techIconClass = "w-10 h-10 mb-3 flex-shrink-0";

const techIconMap: Record<NonNullable<LinkType["iconKey"]>, React.ReactNode> = {
  react: <SiReact className={`text-[#61DAFB] ${techIconClass}`} />,
  typescript: <SiTypescript className={`text-blue-600 ${techIconClass}`} />,
  nextdotjs: <SiNextdotjs className={`text-black ${techIconClass}`} />,
  vite: (
    <img
      src="/icons/vite.svg"
      alt="Vite"
      className={techIconClass}
      style={{ objectFit: "contain" }}
    />
  ),
  nodedotjs: <SiNodedotjs className={`text-green-600 ${techIconClass}`} />,
  express: <SiExpress className={`text-gray-500 ${techIconClass}`} />,
  mongodb: <SiMongodb className={`text-green-700 ${techIconClass}`} />,
  csharp: (
    <span
      className={`text-purple-800 font-bold ${techIconClass} flex items-center justify-center text-2xl`}
      role="img"
      aria-label="C#"
    >
      C#
    </span>
  ),
  git: <SiGit className={`text-orange-600 ${techIconClass}`} />,
  docker: <SiDocker className={`text-blue-500 ${techIconClass}`} />,
};

export default techIconMap;