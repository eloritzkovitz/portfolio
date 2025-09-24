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
// @ts-ignore
import CSharpLogo from "../../assets/icons/csharp.svg?react";
// @ts-ignore
import ViteLogo from "../../assets/icons/vite.svg?react";
import type { LinkType } from "../../types/link";

export const techIconClass = "w-10 h-10 mb-3 flex-shrink-0";

const techIconMap: Record<NonNullable<LinkType["iconKey"]>, React.ReactNode> = {
  react: <SiReact className={`text-[#61DAFB] ${techIconClass}`} />,
  typescript: <SiTypescript className={`text-blue-600 ${techIconClass}`} />,
  nextdotjs: <SiNextdotjs className={`text-black ${techIconClass}`} />,
  vite: <ViteLogo className={techIconClass} />,  
  nodedotjs: <SiNodedotjs className={`text-green-600 ${techIconClass}`} />,
  express: <SiExpress className={`text-gray-500 ${techIconClass}`} />,
  mongodb: <SiMongodb className={`text-green-700 ${techIconClass}`} />,
  csharp: <CSharpLogo className={techIconClass} />,
  git: <SiGit className={`text-orange-600 ${techIconClass}`} />,
  docker: <SiDocker className={`text-blue-500 ${techIconClass}`} />,
};

export default techIconMap;