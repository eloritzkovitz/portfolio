import React from "react";
import { FaCode, FaStar, FaUsers, FaUserFriends } from "react-icons/fa";
import LanguagesCard from "./LanguagesCard";
import ProfileCard from "./ProfileCard";
import StatCard from "./StatCard";
import TopRepositoriesCard from "./TopRepositoriesCard";
import { useGitHubData } from "../../hooks/useGitHubData";

const username = "eloritzkovitz";

const GitHubOverview: React.FC = () => {
  const { githubData, error } = useGitHubData(username);

  // Show error state
  if (error) {
    return <p className="text-center text-red-500 mb-12" aria-live="polite">{error}</p>;
  }

  // Show loading state
  if (!githubData) {
    return <p className="text-center mb-12" aria-live="polite">Loading GitHub data...</p>;
  }

  // Format the joined date
  const formattedDate = githubData
  ? new Date(githubData.created_at).toLocaleDateString()
  : "";

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