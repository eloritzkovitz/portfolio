import React, { useEffect, useState } from "react";
import { FaCode, FaStar, FaUsers, FaUserFriends } from "react-icons/fa";
import LanguagesCard from "./LanguagesCard";
import ProfileCard from "./ProfileCard";
import StatCard from "./StatCard";
import TopRepositoriesCard from "./TopRepositoriesCard";

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

const GitHubOverview: React.FC = () => {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch GitHub data on component mount
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch(
          "https://api.github.com/users/eloritzkovitz"
        );
        const user = await userRes.json();
        const reposRes = await fetch(
          "https://api.github.com/users/eloritzkovitz/repos"
        );
        const repos = await reposRes.json();

        // Aggregate languages and total stars
        const languages: { [key: string]: number } = {};
        let totalStars = 0;
        repos.forEach((repo: any) => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
          totalStars += repo.stargazers_count;
        });

        // Set state with fetched data
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
      } catch (err) {
        setError("Failed to load GitHub data.");
      }
    };
    fetchGitHubData();
  }, []);

  // Show error state
  if (error) {
    return <p className="text-center text-red-500 mb-12">{error}</p>;
  }

  // Show loading state
  if (!githubData) {
    return <p className="text-center mb-12">Loading GitHub data...</p>;
  }

  const formattedDate = new Date(githubData.created_at).toLocaleDateString();

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-12 mt-8">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
        GitHub Overview
      </h1>

      {/* Profile and Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GitHub Profile */}
        <ProfileCard
          profileUrl={githubData.profile_url}
          avatarUrl={githubData.avatar_url}
          username="eloritzkovitz"
          joinedDate={formattedDate}
        />

        {/* Languages Pie Chart */}
        <LanguagesCard languages={githubData.languages} />
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-4 mt-8 w-full">
        <StatCard
          icon={<FaCode />}
          value={githubData.public_repos}
          label="Repositories"
          colorClass="text-blue-600"
        />
        <StatCard
          icon={<FaStar />}
          value={githubData.total_stars}
          label="Stars"
          colorClass="text-yellow-500"
        />
        <StatCard
          icon={<FaUsers />}
          value={githubData.followers}
          label="Followers"
          colorClass="text-green-600"
        />
        <StatCard
          icon={<FaUserFriends />}
          value={githubData.following}
          label="Following"
          colorClass="text-purple-600"
        />
      </div>

      {/* Top Repositories Widget */}
      <TopRepositoriesCard repos={githubData.repos} />
    </section>
  );
};

export default GitHubOverview;
