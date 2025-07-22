import { useState, useEffect } from "react";
import { FaList, FaTh } from "react-icons/fa";
import { aboutCards } from "../data/aboutData";
import skillsData from "../data/skillsData";
import "../styles/About.css";

function About() {
  const [expandedStates, setExpandedStates] = useState(
    skillsData.map(() => false)
  );
  const [isFlatView, setIsFlatView] = useState(true);
  
  // Reset expanded states when the card changes (for grouped view)
  useEffect(() => {
    setExpandedStates(skillsData.map(() => false));
  }, [isFlatView]);

  return (
    <section
      className="about-section w-full max-w-screen-lg mx-auto px-4 sm:px-8 py-4 sm:py-8"
    >
      {/* Intro Card */}
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">About Me</h1>
      </div>

      <div className="desktop-cards">
        {aboutCards.map((card, index) => (
          <div
            key={`${card.title}-${index}`}
            className="bg-white shadow-md rounded-lg p-6 sm:p-8 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl sm:text-2xl font-bold">{card.title}</h2>
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
              <div className="skills-list">
                {/* Flat View */}
                {isFlatView ? (
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {skillsData.flatMap((skillCategory) =>
                      skillCategory.skills.map((skill, skillIndex) => (
                        <span
                          key={`${skillCategory.category}-${skillIndex}`}
                          className="tech-tag text-xs sm:text-base px-2 py-1 sm:px-3 sm:py-1.5"
                        >
                          {skill}
                        </span>
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
                          className="flex justify-between items-center cursor-pointer bg-gray-100 p-3 rounded-md shadow-md"
                          onClick={() => {
                            const newStates = [...expandedStates];
                            newStates[categoryIndex] = !newStates[categoryIndex];
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
                              <span key={skillIndex} className="tech-tag text-xs sm:text-base px-2 py-1 sm:px-3 sm:py-1.5">
                                {skill}
                              </span>
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
                {card.content.map((p: string, i: number) => (
                  <p key={i} className={i > 0 ? "mt-4" : ""}>{p}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;