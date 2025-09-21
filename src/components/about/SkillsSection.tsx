import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TechTagList from "../tech/TechTagList";
import skillsData from "../../data/skillsData";

interface SkillsSectionProps {
  isFlatView: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isFlatView }) => {
  const [expandedStates, setExpandedStates] = useState(
    skillsData.map(() => false)
  );

  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  // Reset expanded states when the view mode changes
  useEffect(() => {
    setExpandedStates(skillsData.map(() => false));
  }, [isFlatView]);

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      {isFlatView ? (
        <TechTagList tech={skillsData.flatMap((cat) => cat.skills)} />
      ) : (
        <>
          {skillsData.map((skillCategory, categoryIndex) => {
            const isExpanded = expandedStates[categoryIndex];
            return (
              <div key={categoryIndex} className="mb-4">
                <div
                  style={{
                    display: "flex",
                    flexDirection: isRTL ? "row-reverse" : "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="items-center cursor-pointer bg-white p-3 rounded-md shadow-md gap-x-2 w-full"
                  onClick={() => {
                    const newStates = [...expandedStates];
                    newStates[categoryIndex] = !newStates[categoryIndex];
                    setExpandedStates(newStates);
                  }}
                >
                  <h3
                    className={`text-base sm:text-xl text-gray-700 font-semibold ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                    style={{ flex: 1 }}
                  >
                    {t(skillCategory.category)}
                  </h3>
                  <button
                    className="toggle-skills-btn text-base sm:text-xl"
                    style={{
                      flexShrink: 0,
                    }}
                  >
                    {isExpanded ? "-" : "+"}
                  </button>
                </div>
                {isExpanded && <TechTagList tech={skillCategory.skills} />}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default SkillsSection;
