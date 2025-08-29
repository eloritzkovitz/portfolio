import { useEffect, useState } from "react";
import GitHubStats from "../components/GitHubStats";

// GitHubData interface
interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
  languages: { [key: string]: number };
  total_stars: number;
  repos: { name: string; html_url: string; stargazers_count: number }[];
  profile_url: string;
  created_at: string;
}

function GitHub() {
  const [githubData, setGitHubData] = useState<GitHubData | null>(null);

  useEffect(() => {
    // Fetch GitHub profile data
    fetch("https://api.github.com/users/eloritzkovitz")
      .then((response) => response.json())
      .then((data) => {
        // Fetch repositories
        fetch("https://api.github.com/users/eloritzkovitz/repos")
          .then((response) => response.json())
          .then((repos) => {
            const languageCounts: { [key: string]: number } = {};
            let totalStars = 0;

            repos.forEach((repo: any) => {
              if (repo.language) {
                languageCounts[repo.language] =
                  (languageCounts[repo.language] || 0) + 1;
              }
              totalStars += repo.stargazers_count;
            });

            setGitHubData({
              public_repos: data.public_repos,
              followers: data.followers,
              following: data.following,
              languages: languageCounts,
              total_stars: totalStars,
              repos: repos.sort(
                (a: any, b: any) => b.stargazers_count - a.stargazers_count
              ),
              profile_url: data.html_url,
              created_at: data.created_at,
            });
          });
      })
      .catch((error) => console.error("Error fetching GitHub data:", error));
  }, []);

  return (
    <section className="w-full max-w-screen-xl mx-auto px-2 sm:px-12 py-4 sm:py-10">
      {/* Intro Card */}
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          GitHub Statistics
        </h1>
      </div>

      {/* GitHub Data Section */}
      {githubData ? (
        <GitHubStats
          profile_url={githubData.profile_url}
          created_at={githubData.created_at}
          public_repos={githubData.public_repos}
          followers={githubData.followers}
          following={githubData.following}
          total_stars={githubData.total_stars}
          languages={githubData.languages}
          repos={githubData.repos}
        />
      ) : (
        <p className="text-center">Loading GitHub data...</p>
      )}
    </section>
  );
}

export default GitHub;