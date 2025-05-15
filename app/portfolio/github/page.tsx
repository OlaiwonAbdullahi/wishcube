"use client";
import React, { useEffect, useState } from "react";
import StatsCards from "./components/starsCard";
import Navbar from "../components/navbar";
interface GitHubInfo {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio?: string;
  location?: string;
  name?: string;
  company?: string;
  blog?: string;
  email?: string;
  twitter_username?: string;
  created_at: string;
  updated_at: string;
}

interface RepoStats {
  totalStars: number;
  totalForks: number;
  totalWatchers: number;
}

interface PageProps {
  username?: string;
}

const Page: React.FC<PageProps> = ({ username = "OlaiwonAbdullahi" }) => {
  const [githubInfo, setGithubInfo] = useState<GitHubInfo | null>(null);
  const [repoStats, setRepoStats] = useState<RepoStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const generateGithubInfo = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Failed to fetch GitHub data");
      const data: GitHubInfo = await response.json();
      setGithubInfo(data);
    } catch (error: unknown) {
      if (error instanceof Error) setError(error.message);
    }
  };

  const fetchRepoStats = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      if (!response.ok) throw new Error("Failed to fetch repo stats");

      interface GithubRepo {
        stargazers_count: number;
        forks_count: number;
        watchers_count: number;
      }

      const repos: GithubRepo[] = await response.json();

      const totalStars = repos.reduce(
        (sum, repo) => sum + (repo.stargazers_count || 0),
        0
      );
      const totalForks = repos.reduce(
        (sum, repo) => sum + (repo.forks_count || 0),
        0
      );
      const totalWatchers = repos.reduce(
        (sum, repo) => sum + (repo.watchers_count || 0),
        0
      );

      setRepoStats({ totalStars, totalForks, totalWatchers });
    } catch (error: unknown) {
      if (error instanceof Error) setError(error.message);
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      await generateGithubInfo();
      await fetchRepoStats();
      setLoading(false);
    };
    fetchAll();
  }, [username]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-4 w-full sm:w-1/2 mx-auto p-4">
        <h2 className="text-3xl text-center">GitHub Statistics</h2>
        <p className="text-lg text-gray-500 text-center">
          A Snapshot of my GitHub activity and contributions.
        </p>
        <button
          onClick={() =>
            window.open(`https://github.com/${username}`, "_blank")
          }
          className="bg-neutral-900 p-3 rounded-md text-white w-1/3 mx-auto whitespace-nowrap"
        >
          View On GitHub
        </button>
        <StatsCards githubInfo={githubInfo} repoStats={repoStats} />
      </div>
    </>
  );
};

export default Page;
