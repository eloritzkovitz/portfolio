import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const iconClass = "w-10 h-10 mb-3 flex-shrink-0";

const techStack = [
  { name: "React", icon: <SiReact className="text-blue-500 w-10 h-10 mb-3" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-10 h-10 mb-3" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black w-10 h-10 mb-3" /> },
  {
    name: "Vite",
    icon: (
      <img
        src="/icons/vite.svg"
        alt="Vite"
        className={iconClass}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600 w-10 h-10 mb-3" /> },
  { name: "Express", icon: <SiExpress className="text-gray-500 w-10 h-10 mb-3" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-10 h-10 mb-3" /> },
  { name: "C#", icon: <span className="text-purple-800 font-bold w-10 h-10 mb-3 flex items-center justify-center text-2xl">C#</span> },
];

function TechStackSection() {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
        Tech Stack
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105 w-full h-40 sm:h-44 md:h-48"
          >
            <div className="flex items-center justify-center">{tech.icon}</div>
            <span className="text-base sm:text-lg font-semibold text-center mt-2">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStackSection;
