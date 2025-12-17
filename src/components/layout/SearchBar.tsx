import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder,
}) => (
  <div className="relative w-full sm:w-96">
    <input
      type="text"
      className="w-full rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      placeholder={placeholder || "Search..."}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search"
    />
    <span className="absolute left-3 top-2.5 text-gray-400 pointer-events-none">
      <FaMagnifyingGlass />
    </span>
  </div>
);

export default SearchBar;
