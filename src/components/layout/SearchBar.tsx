import React from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

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
    <span className="absolute left-3 top-3.5 text-gray-400 pointer-events-none">
      <FaMagnifyingGlass />
    </span>
    {value && (
      <button
        type="button"
        className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none"
        onClick={() => onChange("")}
        aria-label="Clear search"
      >
        <FaXmark />
      </button>
    )}
  </div>
);

export default SearchBar;
