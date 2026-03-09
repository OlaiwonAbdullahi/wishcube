"use client";

import { useState, useEffect } from "react";
import { CardGenerator } from "./_components/card-generator";
import { CardPreview } from "./_components/card-preview";
import { CardCustomizer } from "./_components/card-customizer";
import { useGoogleFonts } from "./_components/use-google-fonts";

export interface CardTemplate {
  id: string;
  name: string;
  occasion: string;
  colors: string[];
  defaultText: {
    title: string;
    message: string;
  };
}

export interface CardState {
  templateId: string;
  title: string;
  message: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  selectedIcon: string;
  fontSize: number;
  fontFamily: string;
  backgroundPattern: string;
}

export default function CardsPage() {
  useGoogleFonts();

  const [cardState, setCardState] = useState<CardState>({
    templateId: "birthday",
    title: "Happy Birthday! 🎉",
    message: "Wishing you a wonderful day filled with joy and celebration!",
    backgroundColor: "#FFFFFF",
    textColor: "#1A202C",
    accentColor: "#A855F7",
    selectedIcon: "gift-2",
    fontSize: 16,
    fontFamily: "Inter",
    backgroundPattern: "none",
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Greeting Card Generator
        </h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Create beautiful, personalized greeting cards for any occasion. Choose
          from stunning templates, customize with your own colors and fonts, or
          start from scratch and design something unique!
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel: Customizer */}
        <div className="lg:col-span-1">
          <CardCustomizer cardState={cardState} setCardState={setCardState} />
        </div>

        {/* Right Panel: Preview */}
        <div className="lg:col-span-2">
          <CardPreview cardState={cardState} />
        </div>
      </div>
    </div>
  );
}
