"use client";

import { useEffect } from "react";

const GOOGLE_FONTS = [
  { id: "Inter", name: "Inter", family: "Inter" },
  {
    id: "Playfair Display",
    name: "Playfair Display",
    family: "Playfair Display",
  },
  { id: "Lora", name: "Lora", family: "Lora" },
  { id: "Poppins", name: "Poppins", family: "Poppins" },
  { id: "Merriweather", name: "Merriweather", family: "Merriweather" },
  { id: "Caveat", name: "Caveat", family: "Caveat" },
  { id: "Montserrat", name: "Montserrat", family: "Montserrat" },
  { id: "Roboto", name: "Roboto", family: "Roboto" },
];

export function useGoogleFonts() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&family=Lora:wght@400;500;600&family=Poppins:wght@400;500;600;700&family=Merriweather:wght@400;700&family=Caveat:wght@400;700&family=Montserrat:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
}

export { GOOGLE_FONTS };
