import React, { useEffect, useState } from "react";
import { FaCode, FaStar, FaUsers, FaUserFriends } from "react-icons/fa";
import githubColors from "../data/github-lang-colors.json";

interface GitHubData {
  profile_url: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
  languages: { [key: string]: number };
  repos: { name: string; html_url: string; stargazers_count: number }[];
  avatar_url: string;
}

const GitHubStats: React.FC = () => {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      const userRes = await fetch("https://api.github.com/users/eloritzkovitz");
      const user = await userRes.json();
      const reposRes = await fetch(
        "https://api.github.com/users/eloritzkovitz/repos"
      );
      const repos = await reposRes.json();

      const languages: { [key: string]: number } = {};
      let totalStars = 0;
      repos.forEach((repo: any) => {
        if (repo.language) {
          languages[repo.language] = (languages[repo.language] || 0) + 1;
        }
        totalStars += repo.stargazers_count;
      });

      // Set the fetched data to state
      setGithubData({
        profile_url: user.html_url,
        created_at: user.created_at,
        public_repos: user.public_repos,
        followers: user.followers,
        following: user.following,
        total_stars: totalStars,
        languages,
        repos: repos.sort(
          (a: any, b: any) => b.stargazers_count - a.stargazers_count
        ),
        avatar_url: user.avatar_url,
      });
    };
    fetchGitHubData();
  }, []);

  // Show loading state while fetching data
  if (!githubData) {
    return <p className="text-center mb-12">Loading GitHub data...</p>;
  }

  // Format the creation date
  const formattedDate = new Date(githubData.created_at).toLocaleDateString();

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-12 mt-8">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
        GitHub Overview
      </h1>

      {/* Profile and Languages */}      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GitHub Profile */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-102">
          <h2 className="text-3xl font-bold mb-4">GitHub Profile</h2>
          <a
            href={githubData.profile_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold hover:text-blue-300"
            aria-label="Visit GitHub profile"
          >
            eloritzkovitz
          </a>
          <p className="text-sm mt-2">Joined on {formattedDate}</p>
          <div className="mt-4">
            <img
              src={githubData.avatar_url}
              alt="GitHub Avatar"
              className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg"
              aria-label="GitHub avatar"
            />
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-102">
          <h2 className="text-3xl font-bold mb-4">Languages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(githubData.languages)
              .sort(([, countA], [, countB]) => countB - countA)
              .map(([language, count]) => {
                const total = Object.values(githubData.languages).reduce(
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
                    <p className="text-xs text-gray-500 dark:text-gray-200">
                      {percentage}%
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-4 mt-8 w-full">        
        {/* Repositories Card */}
        <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center transition-transform hover:scale-105">
          <FaCode className="text-blue-600 text-3xl mb-2" />
          <span className="font-bold text-blue-600 text-2xl">
            {githubData.public_repos}
          </span>
          <span className="text-gray-700 mt-1">Repositories</span>
        </div>
        {/* Stars Card */}
        <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center transition-transform hover:scale-105">
          <FaStar className="text-yellow-500 text-3xl mb-2" />
          <span className="font-bold text-yellow-500 text-2xl">
            {githubData.total_stars}
          </span>
          <span className="text-gray-700 mt-1">Stars</span>
        </div>
        {/* Followers Card */}
        <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center transition-transform hover:scale-105">
          <FaUsers className="text-green-600 text-3xl mb-2" />
          <span className="font-bold text-green-600 text-2xl">
            {githubData.followers}
          </span>
          <span className="text-gray-700 mt-1">Followers</span>
        </div>
        {/* Following Card */}
        <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center transition-transform hover:scale-105">
          <FaUserFriends className="text-purple-600 text-3xl mb-2" />
          <span className="font-bold text-purple-600 text-2xl">
            {githubData.following}
          </span>
          <span className="text-gray-700 mt-1">Following</span>
        </div>
      </div>

      {/* Top Repositories Widget */}
      <div className="text-center col-span-1 md:col-span-2 lg:col-span-3 mt-12">    
        <h2 className="text-3xl font-bold mb-6">Top Repositories</h2>   
        <ul className="space-y-4">
          {githubData.repos.slice(0, 5).map((repo) => (
            <li
              key={repo.name}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:scale-102"
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
    </section>
  );
};

export default GitHubStats;
