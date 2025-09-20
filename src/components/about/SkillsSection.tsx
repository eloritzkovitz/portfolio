import { useState, useEffect } from "react";
import TechTagList from "../tech/TechTagList";
import skillsData from "../../data/skillsData";

interface SkillsSectionProps {
  isFlatView: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isFlatView }) => {
  const [expandedStates, setExpandedStates] = useState(
    skillsData.map(() => false)
  );

  // Reset expanded states when the view mode changes
  useEffect(() => {
    setExpandedStates(skillsData.map(() => false));
  }, [isFlatView]);

  return isFlatView ? (
    <TechTagList tech={skillsData.flatMap((cat) => cat.skills)} />
  ) : (
    <>
      {skillsData.map((skillCategory, categoryIndex) => {
        const isExpanded = expandedStates[categoryIndex];
        return (
          <div key={categoryIndex} className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer bg-white p-3 rounded-md shadow-md"
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
            {isExpanded && <TechTagList tech={skillCategory.skills} />}
          </div>
        );
      })}
    </>
  );
};

export default SkillsSection;