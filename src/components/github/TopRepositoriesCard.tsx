import React from "react";
import { FaStar } from "react-icons/fa";
import { Repository } from "../../types/github";

interface TopRepositoriesCardProps {
  repos: Repository[];
  count?: number;
}

const TopRepositoriesCard: React.FC<TopRepositoriesCardProps> = ({ repos, count = 5 }) => (
  <div className="text-center mt-12">
    <h2 className="text-3xl font-bold mb-6">Top Repositories</h2>
    <ul className="space-y-4">
      {repos.slice(0, count).map((repo) => (
        <li
          key={repo.name}
          className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:scale-102 transition"
        >
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold"
            aria-label={`Visit ${repo.name} repository`}
          >
            {repo.name}
          </a>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-200">
            {repo.stargazers_count}{" "}
            <FaStar className="inline text-yellow-500 ml-1 mb-1" />
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default TopRepositoriesCard;