import { useState } from "react";
import { FaList, FaTh } from "react-icons/fa";
import CVButton from "../components/about/CVButton";
import SkillsSection from "../components/about/SkillsSection";
import RichTextWithLinks from "../components/about/RichTextWithLinks";
import Section from "../components/layout/Section";
import SectionsNavigator from "../components/ui/sections/SectionsNavigator";
import aboutData from "../data/aboutData";
import socialLinks from "../data/socialLinksData";
import "../styles/About.css";

const cvLink = socialLinks.find((link) => link.iconKey === "cv");

function About() {
  const [navVisible, setNavVisible] = useState(true);
  const [isFlatView, setIsFlatView] = useState(true);

  // Section anchors for navigation
  const sectionAnchors = [
    { id: "introduction", label: "Introduction" },
    { id: "skills", label: "Skills" },
    { id: "contributions", label: "Contributions" },
    { id: "hobbies", label: "Hobbies & Interests" },
  ];

  return (
    <div className="relative">
      <SectionsNavigator
        sections={sectionAnchors}
        navVisible={navVisible}
        onToggle={() => setNavVisible((v) => !v)}
      />
      <section className="w-full max-w-screen-xl mx-auto">
        <div className="p-6 sm:p-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            About Me
          </h1>
        </div>
        <div className="desktop-cards">
          {sectionAnchors.map((anchor) => {
            const card = aboutData.find((c) => c.id === anchor.id);
            if (!card) return null;
            return (
              <Section
                key={card.id}
                id={anchor.id}
                title={
                  card.title === "Skills" ? (
                    <span className="flex items-center justify-between w-full">
                      {card.title}
                      <button
                        className="toggle-view-btn text-base sm:text-xl"
                        onClick={() => setIsFlatView((v) => !v)}
                        aria-label="Toggle View"
                        data-tooltip={
                          isFlatView
                            ? "Switch to Grouped View"
                            : "Switch to Flat View"
                        }
                      >
                        {isFlatView ? <FaList size={20} /> : <FaTh size={20} />}
                      </button>
                    </span>
                  ) : (
                    card.title
                  )
                }
              >
                {card.title === "Skills" ? (
                  <SkillsSection isFlatView={isFlatView} />
                ) : (
                  <div className="text-base sm:text-lg leading-relaxed">
                    {card.content.map((p, i) => (
                      <p key={i} className={i > 0 ? "mt-4" : ""}>
                        <RichTextWithLinks content={p} links={card.links} />
                      </p>
                    ))}
                    {card.title === "Introduction" && cvLink && (
                      <div className="mt-6">
                        <CVButton url={cvLink?.url ?? ""} text={cvLink?.text ?? ""} />
                      </div>
                    )}
                  </div>
                )}
              </Section>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default About;
