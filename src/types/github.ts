// Repository
export type Repository = {
  name: string;
  html_url: string;
  stargazers_count: number;
  language: string | null;
};

// Languages with their usage count
export type Languages = {
  [key: string]: number;
};

// Main GitHub data interface
export interface GitHubData {
  profile_url: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
  languages: Languages;
  repos: Repository[];
  avatar_url: string;
}