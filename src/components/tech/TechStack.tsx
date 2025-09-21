
import { useTranslation } from "react-i18next";
import TechCard from "./TechCard";
import techStack from "../../data/techStackData";
import type { LinkType } from "../../types/link";

function TechStackSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
        {t("techStack.title")}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {techStack.map((tech: LinkType) => (
          <TechCard key={tech.text || tech.label} tech={tech} />
        ))}
      </div>
    </section>
  );
}

export default TechStackSection;