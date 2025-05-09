"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LuHeartHandshake } from "react-icons/lu";
import { IoSparklesOutline } from "react-icons/io5";
import { BiRocket } from "react-icons/bi";

interface GreetingData {
  id: string;
  recipientName: string;
  occasion: string;
  message: string;
  theme: string;
  image: string;
  gift: string | null;
}

// For App Router, correct type is { params: { id: string } }
export default function GreetingPage({ params }: { params: { id: string } }) {
  const [greetingData, setGreetingData] = useState<GreetingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get greeting data from localStorage
    // Safely handle cases where localStorage might not be available during SSR
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem(`greeting_${params.id}`);
      if (storedData) {
        setGreetingData(JSON.parse(storedData));
      }
    }
    setIsLoading(false);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!greetingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Greeting Not Found
          </h1>
          <p className="text-gray-600">
            The greeting you&apos;re looking for doesn&apos;t exist or has
            expired.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Header Section */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gray-100 flex items-center">
                <LuHeartHandshake size={25} className="text-gray-700" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700 capitalize">
                {greetingData.occasion
                  ? `${greetingData.occasion} Greeting`
                  : "Greeting"}
              </h2>
            </div>
          </div>

          {/* Greeting Content */}
          <div className="p-8 space-y-6">
            <div className="flex md:flex-row flex-col space-y-6 items-center justify-between">
              <div className="space-y-3.5">
                {greetingData.recipientName && (
                  <h1 className="text-3xl font-bold text-gray-700">
                    Hey, {greetingData.recipientName}
                  </h1>
                )}

                {greetingData.occasion && (
                  <div className="inline-block px-4 py-1 rounded-full text-sm bg-gray-700 text-white">
                    <div className="flex gap-2 items-center">
                      <IoSparklesOutline className="size-4" />
                      {greetingData.occasion.charAt(0).toUpperCase() +
                        greetingData.occasion.slice(1)}
                    </div>
                  </div>
                )}
              </div>

              {greetingData.image && (
                <div className="py-4">
                  <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-md bg-white">
                    <Image
                      src={greetingData.image}
                      alt="Greeting"
                      width={256}
                      height={256}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {greetingData.message && (
              <div className="mx-auto max-w-md p-6 rounded-xl shadow-sm bg-gray-50">
                <p className="text-gray-700 leading-relaxed">
                  {greetingData.message}
                </p>
              </div>
            )}

            {/* Gift Button (if gift exists) */}
            {greetingData.gift && (
              <div className="text-center">
                <button className="text-lg bg-gray-700 text-white p-1 rounded-full px-2.5">
                  Redeem Gift
                </button>
              </div>
            )}

            <div className="flex justify-center items-center gap-1 pt-6 text-sm text-gray-500">
              <BiRocket className="text-xs" />
              <span>Made With 💜 with WishCube</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
