import React from "react";
import { GoGitMerge } from "react-icons/go";
import { IoIosGitPullRequest } from "react-icons/io";
import { HiOutlineEye } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { TbUsersPlus } from "react-icons/tb";

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  iconColor: string;
}

interface GitHubInfo {
  public_repos: number;
  followers: number;
  following: number;
}

interface RepoStats {
  totalStars: number;
  totalForks: number;
  totalWatchers: number;
}

interface StatsCardsProps {
  githubInfo: GitHubInfo | null;
  repoStats: RepoStats | null;
}

const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  title,
  value,
  iconColor,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-500/20 p-4 transition-all hover:shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className={`text-${iconColor}`}>{icon}</div>
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  );
};

const StatsCards: React.FC<StatsCardsProps> = ({ githubInfo, repoStats }) => {
  const stats: StatsCardProps[] = [
    {
      icon: <IoIosGitPullRequest className="size-5" />,
      title: "Total Repositories",
      value: githubInfo?.public_repos || 0,
      iconColor: "purple-500",
    },
    {
      icon: <TbUsersPlus className="size-5" />,
      title: "Followers",
      value: githubInfo?.followers || 0,
      iconColor: "pink-500",
    },
    {
      icon: <FiUsers className="size-5" />,
      title: "Following",
      value: githubInfo?.following || 0,
      iconColor: "indigo-500",
    },
    {
      icon: <CiStar className="size-5" />,
      title: "Total Stars",
      value: repoStats?.totalStars || 0,
      iconColor: "amber-500",
    },
    {
      icon: <GoGitMerge className="size-5" />,
      title: "Total Forks",
      value: repoStats?.totalForks || 0,
      iconColor: "teal-500",
    },
    {
      icon: <HiOutlineEye className="size-5" />,
      title: "Total Watchers",
      value: repoStats?.totalWatchers || 0,
      iconColor: "cyan-500",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            iconColor={stat.iconColor}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsCards;
