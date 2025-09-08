import { useState, useEffect } from "react";
import { FaList, FaTh, FaIdBadge } from "react-icons/fa";
import SectionsNavigator from "../components/SectionsNavigator";
import TechTag from "../components/TechTag";
import { aboutCards } from "../data/aboutData";
import linksData from "../data/linksData";
import skillsData from "../data/skillsData";
import "../styles/About.css";

function About() {
  const [expandedStates, setExpandedStates] = useState(
    skillsData.map(() => false)
  );
  const [isFlatView, setIsFlatView] = useState(true);
  const [navVisible, setNavVisible] = useState(true);

  // Section anchors for navigation
  const sectionAnchors = [
    { id: "introduction", label: "Introduction" },
    { id: "contributions", label: "Contributions" },
    { id: "skills", label: "Skills" },
    { id: "hobbies", label: "Hobbies & Interests" },
  ];

  // Reset expanded states when the card changes (for grouped view)
  useEffect(() => {
    setExpandedStates(skillsData.map(() => false));
  }, [isFlatView]);

  // Render content with links
  function renderContent(
    content: string,
    links?: Record<string, { url: string; text: string }>
  ) {
    if (!links) return content;
    return content.split(/({link:[^}]+})/g).map((part, idx) => {
      const match = part.match(/{link:([^}]+)}/);
      if (match && links[match[1]]) {
        const { url, text } = links[match[1]];
        return (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700 underline"
          >
            {text}
          </a>
        );
      }
      return part;
    });
  }

  return (
    <div className="relative">
      {/* Sections Navigator */}
      <SectionsNavigator
        sections={sectionAnchors}
        navVisible={navVisible}
        onToggle={() => setNavVisible((v) => !v)}
      />

      <section className="w-full max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="p-6 sm:p-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            About Me
          </h1>
        </div>

        <div className="desktop-cards">
          {aboutCards.map((card, index) => (
            <div
              key={`${card.title}-${index}`}
              id={sectionAnchors[index]?.id}
              className="p-6 sm:p-4 mb-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{card.title}</h2>
                {card.title === "Skills" && (
                  <button
                    className="toggle-view-btn text-base sm:text-xl"
                    onClick={() => setIsFlatView(!isFlatView)}
                    aria-label="Toggle View"
                    data-tooltip={
                      isFlatView
                        ? "Switch to Grouped View"
                        : "Switch to Flat View"
                    }
                  >
                    {isFlatView ? <FaList size={20} /> : <FaTh size={20} />}
                  </button>
                )}
              </div>
              {card.title === "Skills" ? (
                <div>
                  {/* Flat View */}
                  {isFlatView ? (
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {skillsData.flatMap((skillCategory) =>
                        skillCategory.skills.map((skill, skillIndex) => (
                          <TechTag
                            key={`${skillCategory.category}-${skillIndex}`}
                          >
                            {skill}
                          </TechTag>
                        ))
                      )}
                    </div>
                  ) : (
                    /* Grouped View */
                    skillsData.map((skillCategory, categoryIndex) => {
                      const isExpanded = expandedStates[categoryIndex];

                      return (
                        <div key={categoryIndex} className="mb-4">
                          {/* Category Header with Expand/Collapse Button */}
                          <div
                            className="flex justify-between items-center cursor-pointer bg-white p-3 rounded-md shadow-md"
                            onClick={() => {
                              const newStates = [...expandedStates];
                              newStates[categoryIndex] =
                                !newStates[categoryIndex];
                              setExpandedStates(newStates);
                            }}
                          >
                            <h3 className="text-base sm:text-xl text-gray-700 font-semibold">
                              {skillCategory.category}
                            </h3>
                            <button className="toggle-skills-btn text-base sm:text-xl">
                              {isExpanded ? "-" : "+"}
                            </button>
                          </div>

                          {/* Skills as Tags (Visible Only When Expanded) */}
                          {isExpanded && (
                            <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                              {skillCategory.skills.map((skill, skillIndex) => (
                                <TechTag key={skillIndex}>{skill}</TechTag>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              ) : (
                <div className="text-base sm:text-lg leading-relaxed">
                  {card.content.map((p, i) => (
                    <p key={i} className={i > 0 ? "mt-4" : ""}>
                      {renderContent(p, card.links)}
                    </p>
                  ))}
                  {/* CV Link */}
                  {card.title === "Introduction" && (
                    <div className="mt-6">
                      <a
                        href={linksData.cv.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="submit-button inline-flex items-center px-5 py-2 text-white rounded-lg font-semibold transform hover:scale-110"
                      >
                        <FaIdBadge className="text-xl mr-2" />
                        {linksData.cv.text}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
