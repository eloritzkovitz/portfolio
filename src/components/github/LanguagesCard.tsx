import React, { useState } from "react";
import { Chart, Tooltip, ArcElement, Legend } from "chart.js";
import { useTranslation } from "react-i18next";
import PieChart from "../ui/charts/PieChart";
import PieLegendCard from "../ui/charts/PieLegendCard";
import githubColors from "../../data/github-lang-colors.json";
import { Languages } from "../../types/github";

Chart.register(Tooltip, ArcElement, Legend);

interface LanguagesCardProps {
  languages: Languages;
}

const LanguagesCard: React.FC<LanguagesCardProps> = ({ languages }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const { t } = useTranslation();

  // Prepare and sort data by percentage descending
  const rawData = Object.entries(languages).map(([language, count]) => ({
    language,
    count: Number(count),
    color: githubColors[language as keyof typeof githubColors] || "#cccccc",
  }));
  const total = rawData.reduce((sum, d) => sum + d.count, 0);
  const sortedData = rawData
    .map((d) => ({
      ...d,
      percentage: total ? (d.count / total) * 100 : 0,
    }))
    .sort((a, b) => b.percentage - a.percentage);

  const languageLabels = sortedData.map((d) => d.language);
  const languageCounts = sortedData.map((d) => d.count);
  const languageColors = sortedData.map((d) => d.color);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-102 flex flex-col items-center justify-center">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-4">{t("github.languages")}</h2>
        {languageLabels.length > 0 ? (
          <>
            {/* Pie Chart */}
            <PieChart
              labels={languageLabels}
              data={languageCounts}
              colors={languageColors}
              hoveredIdx={hoveredIdx}
              setHoveredIdx={setHoveredIdx}
            />

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4">
              {sortedData.map((d, idx) => (
                <PieLegendCard
                  key={d.language}
                  label={d.language}
                  color={d.color}
                  percentage={d.percentage}
                  isActive={hoveredIdx === idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500">No language data available.</p>
        )}
      </div>
    </div>
  );
};

export default LanguagesCard;