"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LuLayoutDashboard } from "react-icons/lu";
import { CiSettings, CiShoppingCart } from "react-icons/ci";
import { BiBarChart, BiHelpCircle, BiLogOut } from "react-icons/bi";
import { LiaUser } from "react-icons/lia";
const AdminSidebar = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);

  const navItems = [
    {
      icon: <LuLayoutDashboard size={20} />,
      label: "Dashboard",
      href: "/dashboard",
    },
    { icon: <LiaUser size={20} />, label: "Users", href: "/dashboard/users" },
    {
      icon: <CiShoppingCart size={20} />,
      label: "Products",
      href: "/dashboard/products",
    },
    {
      icon: <BiBarChart size={20} />,
      label: "Analytics",
      href: "/dashboard/analytics",
    },
    {
      icon: <CiSettings size={20} />,
      label: "Settings",
      href: "/dashboard/settings",
    },
    {
      icon: <BiHelpCircle size={20} />,
      label: "Help",
      href: "/dashboard/help",
    },
  ];

  return (
    <div className="h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col">
      {/* Sidebar Header */}
      <div className="h-16 border-b border-gray-200 flex items-center justify-between px-4">
        {expanded && (
          <div className="flex items-center">
            <div className="h-8 w-8 rounded bg-gray-600 flex items-center justify-center">
              <span className="text-white font-semibold">A</span>
            </div>
            <span className="ml-2 font-semibold text-gray-800">
              Admin Portal
            </span>
          </div>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-1 rounded-md hover:bg-gray-100 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {expanded ? (
              <>
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </>
            ) : (
              <>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`flex-grow ${
          expanded ? "w-64" : "w-20"
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="py-4 space-y-1">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <li key={index} className="px-3">
                <Link
                  href={item.href}
                  className={`
                    flex items-center py-3 px-3 rounded-md transition-colors
                    ${
                      isActive
                        ? "bg-gray-50 text-gray-700"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <span
                    className={`${
                      isActive ? "text-gray-600" : "text-gray-500"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {expanded && (
                    <span
                      className={`ml-3 font-medium ${
                        isActive ? "text-gray-700" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                  {isActive && expanded && (
                    <span className="ml-auto w-1.5 h-6 rounded-full bg-gray-500"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile / Logout Button */}
      <div className="border-t border-gray-200 p-4">
        <Link
          href="/logout"
          className="flex items-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md p-2 transition-colors"
        >
          <BiLogOut size={20} className="text-gray-500" />
          {expanded && <span className="ml-3">Logout</span>}
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
