import techStack from "../../data/techStackData";
import TechCard from "./TechCard";
import techIconMap from "./TechIconMap";
import type { TechStackItem } from "../../types/tech";

function TechStackSection() {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
        Tech Stack
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {techStack.map((tech: TechStackItem) => (
          <a
            key={tech.name}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            title={`Learn more about ${tech.name}`}
          >
            <TechCard tech={tech} icon={techIconMap[tech.iconKey]} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default TechStackSection;