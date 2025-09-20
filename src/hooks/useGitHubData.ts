import { useEffect, useState } from "react";
import { GitHubData, Languages, Repository } from "../types/github";

export function useGitHubData(username: string) {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const user = await userRes.json();
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await reposRes.json();

        const languages: Languages = {};
        let totalStars = 0;
        repos.forEach((repo: Repository) => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
          totalStars += repo.stargazers_count;
        });

        setGithubData({
          profile_url: user.html_url,
          created_at: user.created_at,
          public_repos: user.public_repos,
          followers: user.followers,
          following: user.following,
          total_stars: totalStars,
          languages,
          repos: repos.sort(
            (a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count
          ),
          avatar_url: user.avatar_url,
        });
      } catch (err) {
        setError("Failed to load GitHub data.");
      }
    };
    fetchGitHubData();
  }, [username]);

  return { githubData, error };
}