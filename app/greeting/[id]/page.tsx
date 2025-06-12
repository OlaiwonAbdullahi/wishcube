"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LuHeartHandshake } from "react-icons/lu";
import { IoSparklesOutline } from "react-icons/io5";
import { BiRocket } from "react-icons/bi";
import { useParams } from "next/navigation";

// --- Theme Colors Definition (MUST MATCH your Generator component's themes) ---
// It's highly recommended to put this `themeColors` object in a shared file
// (e.g., `lib/themes.ts` or `constants/themes.ts`) and import it into both components.
// For now, I'm duplicating it here for clarity, but be aware of the DRY principle.

interface ThemeConfig {
  name: string;
  primary: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
  bgNeutral: string;
  textNeutral: string;
  bgAccent?: string;
  hoverAccent?: string;
}

const themeColors: { [key: string]: Omit<ThemeConfig, 'name'> } = {
  "corporate-blue": {
    primary: "bg-blue-600",
    secondary: "bg-blue-800",
    textPrimary: "text-blue-600",
    textSecondary: "text-blue-800",
    bgNeutral: "bg-gray-50",
    textNeutral: "text-gray-50",
    bgAccent: "bg-blue-100",
    hoverAccent: "hover:bg-blue-100",
  },
  "elegant-charcoal": {
    primary: "bg-gray-700",
    secondary: "bg-gray-900",
    textPrimary: "text-gray-700",
    textSecondary: "text-gray-900",
    bgNeutral: "bg-gray-100",
    textNeutral: "text-gray-100",
    bgAccent: "bg-gray-200",
    hoverAccent: "hover:bg-gray-200",
  },
  "emerald-success": {
    primary: "bg-emerald-600",
    secondary: "bg-emerald-800",
    textPrimary: "text-emerald-600",
    textSecondary: "text-emerald-800",
    bgNeutral: "bg-white",
    textNeutral: "text-white",
    bgAccent: "bg-emerald-100",
    hoverAccent: "hover:bg-emerald-100",
  },
  "royal-purple": {
    primary: "bg-purple-600",
    secondary: "bg-purple-900",
    textPrimary: "text-purple-600",
    textSecondary: "text-purple-900",
    bgNeutral: "bg-gray-50",
    textNeutral: "text-gray-50",
    bgAccent: "bg-purple-100",
    hoverAccent: "hover:bg-purple-100",
  },
  "classic-maroon": {
    primary: "bg-red-800",
    secondary: "bg-red-900",
    textPrimary: "text-red-800",
    textSecondary: "text-red-900",
    bgNeutral: "bg-gray-100",
    textNeutral: "text-gray-100",
    bgAccent: "bg-red-100",
    hoverAccent: "hover:bg-red-100",
  },
  "teal-professional": {
    primary: "bg-teal-600",
    secondary: "bg-teal-800",
    textPrimary: "text-teal-600",
    textSecondary: "text-teal-800",
    bgNeutral: "bg-white",
    textNeutral: "text-white",
    bgAccent: "bg-teal-100",
    hoverAccent: "hover:bg-teal-100",
  },
  "amber-accent": {
    primary: "bg-amber-600",
    secondary: "bg-amber-800",
    textPrimary: "text-amber-600",
    textSecondary: "text-amber-800",
    bgNeutral: "bg-gray-50",
    textNeutral: "text-gray-50",
    bgAccent: "bg-amber-100",
    hoverAccent: "hover:bg-amber-100",
  },
  "indigo-modern": {
    primary: "bg-indigo-600",
    secondary: "bg-indigo-900",
    textPrimary: "text-indigo-600",
    textSecondary: "text-indigo-900",
    bgNeutral: "bg-white",
    textNeutral: "text-white",
    bgAccent: "bg-indigo-100",
    hoverAccent: "hover:bg-indigo-100",
  },
  // Add a default theme if the fetched theme name doesn't match any
  "default": {
    primary: "bg-gray-700",
    secondary: "bg-gray-900",
    textPrimary: "text-gray-700",
    textSecondary: "text-gray-900",
    bgNeutral: "bg-gray-100",
    textNeutral: "text-gray-100",
    bgAccent: "bg-gray-200",
    hoverAccent: "hover:bg-gray-200",
  },
};
// --- End Theme Colors Definition ---

interface GreetingData {
  id: string;
  recipientName: string;
  occasion: string;
  message: string;
  theme: string; // This is the theme NAME (e.g., "corporate-blue")
  image: string;
  gift: string | null;
}

export default function GreetingCard() {
  const params = useParams();
  const id = params.id as string;

  const [greetingData, setGreetingData] = useState<GreetingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGreeting = async () => {
      setIsLoading(true);
      setError(null);

      // Check localStorage first
      if (typeof window !== "undefined") {
        const storedData = localStorage.getItem(`greeting_${id}`);
        if (storedData) {
          setGreetingData(JSON.parse(storedData));
          setIsLoading(false);
          return;
        }
      }

      // If not in localStorage, fetch from API
      try {
        const response = await fetch(`/api/link?id=${id}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        const data: GreetingData = await response.json();
        setGreetingData(data);

        // Store data in localStorage after successful fetch
        if (typeof window !== "undefined") {
          localStorage.setItem(`greeting_${id}`, JSON.stringify(data));
        }
      } catch (err: any) {
        console.error("Failed to fetch greeting data:", err);
        setError(err.message || "An unknown error occurred.");
        setGreetingData(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchGreeting();
    }
  }, [id]);

  // Determine the current theme colors based on greetingData.theme
  // Use a fallback to "default" if the theme is not found or null
  const currentTheme = greetingData?.theme && themeColors[greetingData.theme]
    ? themeColors[greetingData.theme]
    : themeColors.default;


  // --- Render Logic ---

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Error Loading Greeting</h1>
          <p className="text-red-500 mb-4">{error}</p>
          <p className="text-gray-600">Please try again later or check the link.</p>
        </div>
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
    // Outer container background
    <div className={`min-h-screen ${currentTheme.background} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Header Section */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${currentTheme.bgAccent} flex items-center`}>
                <LuHeartHandshake size={25} className={currentTheme.textPrimary} />
              </div>
            </div>
            <div>
              <h2 className={`text-xl font-semibold ${currentTheme.textSecondary} capitalize`}>
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
                  <h1 className={`text-3xl font-bold ${currentTheme.textPrimary}`}>
                    Hey, {greetingData.recipientName}
                  </h1>
                )}

                {greetingData.occasion && (
                  <div className={`inline-block px-4 py-1 rounded-full text-sm ${currentTheme.primary} ${currentTheme.textNeutral}`}>
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
              <div className={`mx-auto max-w-md p-6 rounded-xl shadow-sm ${currentTheme.bgNeutral}`}>
                <p className={`${currentTheme.textPrimary} leading-relaxed`}>
                  {greetingData.message}
                </p>
              </div>
            )}

            {/* Gift Button (if gift exists) */}
            {greetingData.gift && (
              <div className="text-center">
                <button className={`text-lg ${currentTheme.secondary} ${currentTheme.textNeutral} p-1 rounded-full px-2.5`}>
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