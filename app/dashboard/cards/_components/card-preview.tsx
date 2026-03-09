"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
import { toPng } from "html-to-image";
import { CardState } from "../page";

interface CardPreviewProps {
  cardState: CardState;
}

export function CardPreview({ cardState }: CardPreviewProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current) return;

    setIsDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `greeting-card-${Date.now()}.png`;
      link.click();
    } catch (error) {
      console.error("Failed to download card:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const blob = await fetch(dataUrl).then((res) => res.blob());
      const file = new File([blob], "greeting-card.png", { type: "image/png" });

      if (navigator.share) {
        await navigator.share({
          files: [file],
          title: "My Greeting Card",
          text: cardState.title,
        });
      } else {
        // Fallback: Copy to clipboard
        alert("Share your card by downloading it!");
      }
    } catch (error) {
      console.error("Failed to share card:", error);
    }
  };

  // Get background pattern
  const getBackgroundStyle = () => {
    const baseStyle = {
      backgroundColor: cardState.backgroundColor,
    };

    if (cardState.backgroundPattern === "dots") {
      return {
        ...baseStyle,
        backgroundImage:
          "radial-gradient(circle, rgba(0,0,0,0.1) 2px, transparent 2px)",
        backgroundSize: "20px 20px",
      };
    }

    if (cardState.backgroundPattern === "grid") {
      return {
        ...baseStyle,
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      };
    }

    if (cardState.backgroundPattern === "gradient") {
      return {
        backgroundImage: `linear-gradient(135deg, ${cardState.backgroundColor} 0%, ${cardState.accentColor}20 100%)`,
      };
    }

    return baseStyle;
  };

  return (
    <div className="space-y-4">
      <Card className="border-border/40 shadow-none">
        <CardHeader>
          <CardTitle className="text-lg">Live Preview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Preview Container */}
          <div
            ref={cardRef}
            className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl shadow-xl"
            style={{
              aspectRatio: "4/6",
              ...getBackgroundStyle(),
            }}
          >
            {/* Card Content */}
            <div className="relative flex h-full flex-col items-center justify-center px-8 py-12 text-center">
              {/* Decorative Elements */}
              <div
                className="absolute top-6 left-6 text-4xl opacity-20"
                style={{ color: cardState.accentColor }}
              >
                ✨
              </div>
              <div
                className="absolute bottom-6 right-6 text-4xl opacity-20"
                style={{ color: cardState.accentColor }}
              >
                🎉
              </div>

              {/* Main Content */}
              <div className="relative z-10 space-y-4 w-full">
                {/* Icon */}
                {cardState.selectedIcon && (
                  <div className="text-5xl mb-4">
                    {getIconEmoji(cardState.selectedIcon)}
                  </div>
                )}

                {/* Title */}
                <div>
                  <h2
                    className="font-bold leading-tight"
                    style={{
                      color: cardState.textColor,
                      fontSize: `${Math.min(cardState.fontSize + 12, 48)}px`,
                      fontFamily: cardState.fontFamily,
                    }}
                  >
                    {cardState.title}
                  </h2>
                </div>

                {/* Separator */}
                <div
                  className="h-1 w-12 mx-auto rounded-full"
                  style={{ backgroundColor: cardState.accentColor }}
                />

                {/* Message */}
                <p
                  className="leading-relaxed max-w-md mx-auto"
                  style={{
                    color: cardState.textColor,
                    fontSize: `${cardState.fontSize}px`,
                    fontFamily: cardState.fontFamily,
                    opacity: 0.8,
                  }}
                >
                  {cardState.message}
                </p>

                {/* Footer */}
                <div
                  className="pt-4 border-t border-current"
                  style={{ borderColor: `${cardState.accentColor}40` }}
                >
                  <p
                    className="text-xs"
                    style={{
                      color: cardState.accentColor,
                      fontFamily: cardState.fontFamily,
                    }}
                  >
                    With warm wishes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="gap-2 rounded-lg"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              <Download className="size-4" />
              Download
            </Button>
            <Button className="gap-2 rounded-lg" onClick={handleShare}>
              <Share2 className="size-4" />
              Share
            </Button>
          </div>

          {/* Info */}
          <div className="rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
            💡 Your card will be downloaded as a high-quality PNG image perfect
            for sharing via email, social media, or messaging apps.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function getIconEmoji(iconName: string): string {
  const iconMap: Record<string, string> = {
    "gift-2": "🎁",
    "heart-handshake": "🤝",
    balloons: "🎈",
    sparkles: "✨",
    "birthday-cake": "🎂",
    flower: "🌹",
    star: "⭐",
    champagne: "🍾",
    rose: "🌹",
    crown: "👑",
    guitar: "🎸",
    coffee: "☕",
    moon: "🌙",
    sun: "☀️",
  };

  return iconMap[iconName] || "🎉";
}
