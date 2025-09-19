import React, { useEffect, useState, useRef } from "react";
import { Pie } from "react-chartjs-2";
import type { Chart as ChartJS } from "chart.js";
import { Chart, Tooltip, ArcElement, Legend } from "chart.js";
import githubColors from "../../data/github-lang-colors.json";

Chart.register(Tooltip, ArcElement, Legend);

interface LanguagesCardProps {
  languages: { [key: string]: number };
}

const LanguagesCard: React.FC<LanguagesCardProps> = ({ languages }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const pieRef = useRef<ChartJS<"pie"> | null>(null);

  const languageLabels = Object.keys(languages);
  const languageCounts = Object.values(languages);
  const total = languageCounts.reduce((sum, val) => sum + val, 0);
  const languageColors = languageLabels.map(
    (lang) => githubColors[lang as keyof typeof githubColors] || "#cccccc"
  );

  // Chart data
  const pieData = {
    labels: languageLabels,
    datasets: [
      {
        data: languageCounts,
        backgroundColor: languageColors,
        borderColor: (ctx: any) => {
          // Highlight border if hovered
          return ctx.active ? "#14b8a6" : "rgba(0,0,0,0.2)";
        },
        borderWidth: (ctx: any) => (ctx.active ? 3 : 2),
        hoverOffset: 16,
      },
    ],
  };

  // Chart options
  const pieOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#f3f4f6",
        titleColor: "#111827",
        bodyColor: "#111827",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: () => [],
          label: function (context: any) {
            const label = context.label || "";
            const value = context.parsed;
            const percent = total ? ((value / total) * 100).toFixed(1) : 0;
            return [`\u2B24 ${label}`, `${percent}%`];
          },
          labelTextColor: function (context: any) {
            return (
              context.dataset.backgroundColor[context.dataIndex] || "#cccccc"
            );
          },
        },
      },
    },
    maintainAspectRatio: false,
    radius: "85%",
    responsive: true,
    onHover: (_event: any, elements: any[]) => {
      if (elements && elements.length > 0) {
        setHoveredIdx(elements[0].index);
      } else {
        setHoveredIdx(null);
      }
    },
  };

  // Prepare legend data
  const legendData = languageLabels
    .map((language, idx) => {
      const count = languages[language];
      const percentage = total ? (count / total) * 100 : 0;
      return {
        language,
        color: languageColors[idx],
        percentage: percentage.toFixed(1),
        count,
        idx,
      };
    })
    .sort((a, b) => Number(b.percentage) - Number(a.percentage));

  // Effect to programmatically set active slice on legend hover
  useEffect(() => {
    const chart = pieRef.current;
    if (chart && chart.setActiveElements) {
      if (hoveredIdx !== null) {
        chart.setActiveElements([{ datasetIndex: 0, index: hoveredIdx }]);
      } else {
        chart.setActiveElements([]);
      }
      chart.update();
    }
  }, [hoveredIdx]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-102 flex flex-col items-center justify-center">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-4">Most Used Languages</h2>
        {languageLabels.length > 0 ? (
          <>
            {/* Pie Chart */}
            <div
              className="relative mx-auto mb-6 overflow-visible"
              style={{
                width: "min(90vw, 292px)",
                height: "min(90vw, 292px)",
              }}
            >
              <Pie ref={pieRef} data={pieData} options={pieOptions} />
            </div>
            
            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4">
              {legendData.map(({ language, color, percentage, idx }) => (
                <div
                  key={language}
                  className={`flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-sm transition
                    ${
                      hoveredIdx === idx
                        ? "scale-110 ring-2 ring-teal-400 z-10"
                        : "hover:scale-105"
                    }
                  `}
                  style={{ zIndex: hoveredIdx === idx ? 1 : 0 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                  <p className="text-sm font-medium mt-2">{language}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-200">
                    {percentage}%
                  </p>
                </div>
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
