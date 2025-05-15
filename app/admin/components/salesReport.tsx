import React from "react";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FiDollarSign } from "react-icons/fi";
import { BsArrow90DegDown } from "react-icons/bs";
import { VscGift } from "react-icons/vsc";

type Metric = {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
  bg: string;
  iconBg: string;
  iconColor: string;
};

const SalesReport = () => {
  const metrics: Metric[] = [
    {
      title: "Total Users",
      value: "2,548",
      change: "+12%",
      positive: true,
      icon: <CiUser size={20} />,
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Gift Code Created",
      value: "1,257",
      change: "+23%",
      positive: true,
      icon: <VscGift size={20} />,
      bg: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Total Redeemed Gift Code",
      value: "1,257",
      change: "-2%",
      positive: false,
      icon: <BsArrow90DegDown size={20} />,
      bg: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      title: "Revenue",
      value: "$42,580",
      change: "+8%",
      positive: true,
      icon: <FiDollarSign size={20} />,
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  // Stat card component
  const StatCard = ({ metric }: { metric: Metric }) => {
    return (
      <div className={`rounded-lg border border-gray-200  p-5 ${metric.bg}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="font-medium text-gray-700">{metric.title}</div>
          <div
            className={`p-2 rounded-full ${metric.iconBg} ${metric.iconColor}`}
          >
            {metric.icon}
          </div>
        </div>
        <div className="flex items-end gap-2 justify-between">
          <h2 className="text-2xl font-bold text-gray-800">{metric.value}</h2>
          <div
            className={`flex items-center gap-1 text-sm ${
              metric.positive ? "text-green-600" : "text-red-500"
            }`}
          >
            {metric.positive ? <BiTrendingUp /> : <BiTrendingDown />}
            <span>{metric.change}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-transparent backdrop-blur-3xl p-6 rounded-xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Sales Performance</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <StatCard key={index} metric={metric} />
        ))}
      </div>
    </div>
  );
};

export default SalesReport;
