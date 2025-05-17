"use client";
import React, { useEffect, useState } from "react";
import Card from "./card";

interface DataItem {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  avatar?: string;
}

const MarketPlace = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://67e56ea718194932a5860813.mockapi.io/info"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
      setError(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Welcome to The Blakhub
          </h1>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="relative">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-[#85A663] border-t-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="h-2 w-2 bg-[#85A663] rounded-full"></span>
              </div>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="p-6 border border-red-400 rounded-lg bg-black text-red-400 mb-8">
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>{error}</p>
            </div>
            <button
              onClick={fetchData}
              className="mt-4 py-2 px-4 bg-transparent border border-red-400 text-red-400 rounded-lg hover:bg-red-400/10 transition-colors text-sm font-medium"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty state */}
        {data.length === 0 && !loading && !error && (
          <div className="flex flex-col items-center justify-center py-16 px-4 border border-gray-800 rounded-lg bg-black/50">
            <svg
              className="w-16 h-16 text-gray-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <p className="text-gray-400 text-lg mb-4">
              No items found in the marketplace
            </p>
            <button
              onClick={fetchData}
              className="py-2 px-6 bg-transparent border border-[#85A663] text-[#85A663] rounded-lg hover:bg-[#85A663]/10 transition-colors font-medium"
            >
              Refresh
            </button>
          </div>
        )}

        {/* Content grid */}
        {!loading && !error && data.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
            {data.map((item) => (
              <Card
                key={item.id}
                name={item.name || ""}
                description={item.description || ""}
                avatar={
                  item.avatar ||
                  "https://placehold.co/240x150/222/444?text=No+Image"
                }
                createdAt={item.createdAt || ""}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer section */}
      {!loading && data.length > 0 && (
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              Showing {data.length} item{data.length !== 1 ? "s" : ""}
            </p>
            <button
              onClick={fetchData}
              className="text-[#85A663] py-2 px-6 bg-transparent border border-[#85A663] rounded-lg hover:bg-[#85A663]/10 transition-colors text-sm font-medium"
            >
              Refresh Content
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketPlace;
