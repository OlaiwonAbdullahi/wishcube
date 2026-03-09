"use client";

import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardState } from "../page";

interface CardGeneratorProps {
  onSelect: (template: CardState) => void;
  currentTemplate: string;
}

const TEMPLATES = [
  {
    id: "blank",
    name: "Blank Canvas",
    description: "Start from scratch",
    colors: ["#FFFFFF", "#F5F5F5", "#E0E0E0"],
    icon: "🎨",
    defaultState: {
      title: "Your Title Here",
      message: "Write your custom message here. You can change everything!",
      backgroundColor: "#FFFFFF",
      textColor: "#1A202C",
      accentColor: "#3B82F6",
      selectedIcon: "sparkles",
      fontSize: 16,
      fontFamily: "Inter",
      backgroundPattern: "none",
    },
  },
  {
    id: "birthday",
    name: "Birthday",
    description: "Celebrate someone special",
    colors: ["#FFFFFF", "#FFE5E5", "#FFF5E5"],
    icon: "🎂",
  },
  {
    id: "anniversary",
    name: "Anniversary",
    description: "Celebrate your love",
    colors: ["#FFFFFF", "#FFE5F0", "#FFF0E5"],
    icon: "💑",
  },
  {
    id: "congratulations",
    name: "Congratulations",
    description: "Celebrate achievements",
    colors: ["#FFFFFF", "#E5F5FF", "#F0E5FF"],
    icon: "🏆",
  },
  {
    id: "thankyou",
    name: "Thank You",
    description: "Express gratitude",
    colors: ["#FFFFFF", "#E5FFE5", "#F5FFF0"],
    icon: "🙏",
  },
  {
    id: "holiday",
    name: "Holiday",
    description: "Festive greetings",
    colors: ["#FFFFFF", "#FFE5E5", "#E5FFE5"],
    icon: "🎄",
  },
];

export function CardGenerator({
  onSelect,
  currentTemplate,
}: CardGeneratorProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Choose a Template</h3>
        <p className="text-xs text-muted-foreground">
          Start with a template or create from scratch
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {TEMPLATES.map((template) => (
          <button
            key={template.id}
            onClick={() => {
              const defaultState = template.defaultState || {};
              onSelect({
                templateId: template.id,
                ...defaultState,
              } as CardState);
            }}
            className={cn(
              "relative overflow-hidden rounded-lg border-2 transition-all duration-200",
              "p-4 text-left hover:shadow-md",
              currentTemplate === template.id
                ? "border-primary bg-primary/5"
                : "border-border/40 hover:border-border/60",
            )}
          >
            {/* Color Preview */}
            <div className="flex gap-1 mb-3">
              {template.colors.map((color, idx) => (
                <div
                  key={idx}
                  className="h-3 w-3 rounded-full border border-border/40"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-semibold text-sm">{template.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {template.description}
                  </p>
                </div>
                <span className="text-xl">{template.icon}</span>
              </div>
            </div>

            {currentTemplate === template.id && (
              <div className="absolute top-2 right-2">
                <Badge className="bg-primary">
                  <Check className="size-3 mr-1" />
                  Selected
                </Badge>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
