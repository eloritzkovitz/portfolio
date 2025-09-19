import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  colorClass?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, colorClass }) => (
  <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center transition-transform hover:scale-105">
    <span className={colorClass + " text-3xl mb-2"}>{icon}</span>
    <span className={`font-bold text-2xl ${colorClass}`}>{value}</span>
    <span className="text-gray-700 mt-1">{label}</span>
  </div>
);

export default StatCard;