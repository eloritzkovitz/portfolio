import React from "react";
import { FaCode, FaStar, FaUsers, FaUserFriends } from "react-icons/fa";
import githubColors from "../data/github-lang-colors.json";

// GitHubStats component
interface GitHubStatsProps {
  profile_url: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
  languages: { [key: string]: number };
  repos: { name: string; html_url: string; stargazers_count: number }[];
}

const GitHubStats: React.FC<GitHubStatsProps> = ({
  profile_url,
  created_at,
  public_repos,
  followers,
  following,
  total_stars,
  languages,
  repos,
}) => {
  const formattedDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* GitHub Profile Widget */}
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">GitHub Profile</h2>
        <a
          href={profile_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold underline hover:text-blue-300"
        >
          Visit My GitHub
        </a>
        <p className="text-sm mt-2">Joined on {formattedDate}</p>
        <div className="mt-4">
          <img
            src={`https://github.com/identicons/${profile_url
              .split("/")
              .pop()}.png`}
            alt="GitHub Avatar"
            className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Stats Widget */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 text-center">Statistics</h2>
        <ul className="space-y-4 w-full">
          <li className="flex items-center">
            <FaCode className="text-blue-600 text-2xl mr-4" />
            <p className="text-lg text-left">
              <span className="font-bold text-blue-600">{public_repos}</span>{" "}
              Repositories
            </p>
          </li>
          <li className="flex items-center">
            <FaStar className="text-yellow-500 text-2xl mr-4" />
            <p className="text-lg text-left">
              <span className="font-bold text-yellow-500">{total_stars}</span>{" "}
              Stars
            </p>
          </li>
          <li className="flex items-center">
            <FaUsers className="text-green-600 text-2xl mr-4" />
            <p className="text-lg text-left">
              <span className="font-bold text-green-600">{followers}</span>{" "}
              Followers
            </p>
          </li>
          <li className="flex items-center">
            <FaUserFriends className="text-purple-600 text-2xl mr-4" />
            <p className="text-lg text-left">
              <span className="font-bold text-purple-600">{following}</span>{" "}
              Following
            </p>
          </li>
        </ul>
      </div>

      {/* Languages Widget */}
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Languages</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(languages)
            .sort(([, countA], [, countB]) => countB - countA)
            .map(([language, count]) => {
              const total = Object.values(languages).reduce(
                (sum, value) => sum + value,
                0
              );
              const percentage = ((count / total) * 100).toFixed(1);
              return (
                <div
                  key={language}
                  className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-sm hover:scale-105"
                >
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{
                      backgroundColor:
                        githubColors[language as keyof typeof githubColors] ||
                        "#cccccc",
                    }}
                  ></div>
                  <p className="text-sm font-medium mt-2">{language}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-200">{percentage}%</p>
                </div>
              );
            })}
        </div>
      </div>

      {/* Top Repositories Widget */}
      <div className="p-6 text-center col-span-1 md:col-span-2 lg:col-span-3">
        <h2 className="text-3xl font-bold mb-4">Top Repositories</h2>
        <ul className="space-y-4">
          {repos.slice(0, 5).map((repo) => (
            <li
              key={repo.name}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:scale-102"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold"
              >
                {repo.name}
              </a>
              <span className="text-sm text-gray-500 dark:text-gray-200">
                {repo.stargazers_count} ⭐
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GitHubStats;
