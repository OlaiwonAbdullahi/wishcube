"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { CardGenerator } from "./card-generator";
import { ColorPicker } from "./color-picker";
import { GOOGLE_FONTS } from "./use-google-fonts";
import { CardState } from "../page";
import { Palette, Type, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const PRESET_COLORS = [
  "#FFFFFF",
  "#FFE5E5",
  "#FFF5E5",
  "#E5FFE5",
  "#E5F5FF",
  "#F5E5FF",
  "#FFE5F0",
  "#F0FFE5",
];

const PRESET_TEXT_COLORS = [
  "#1A202C",
  "#FFFFFF",
  "#7C3AED",
  "#DC2626",
  "#2563EB",
  "#059669",
];

const PRESET_ACCENT_COLORS = [
  "#A855F7",
  "#EC4899",
  "#F59E0B",
  "#10B981",
  "#06B6D4",
  "#EF4444",
];

const ICONS = [
  "gift-2",
  "heart-handshake",
  "balloons",
  "sparkles",
  "birthday-cake",
  "flower",
  "star",
  "champagne",
];

const PATTERNS = [
  { id: "none", name: "Solid" },
  { id: "gradient", name: "Gradient" },
  { id: "dots", name: "Dots" },
  { id: "grid", name: "Grid" },
];

interface CardCustomizerProps {
  cardState: CardState;
  setCardState: (state: CardState) => void;
}

export function CardCustomizer({
  cardState,
  setCardState,
}: CardCustomizerProps) {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardState({ ...cardState, title: e.target.value });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCardState({ ...cardState, message: e.target.value });
  };

  const handleTemplateSelect = (newTemplate: CardState) => {
    setCardState(newTemplate);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardState({ ...cardState, fontSize: parseInt(e.target.value) });
  };

  const handleFontFamilyChange = (fontFamily: string) => {
    setCardState({ ...cardState, fontFamily });
  };

  const handleBackgroundColorChange = (color: string) => {
    setCardState({ ...cardState, backgroundColor: color });
  };

  const handleTextColorChange = (color: string) => {
    setCardState({ ...cardState, textColor: color });
  };

  const handleAccentColorChange = (color: string) => {
    setCardState({ ...cardState, accentColor: color });
  };

  const handleIconChange = (icon: string) => {
    setCardState({ ...cardState, selectedIcon: icon });
  };

  const handlePatternChange = (pattern: string) => {
    setCardState({ ...cardState, backgroundPattern: pattern });
  };

  return (
    <div className="space-y-4 h-fit sticky top-4">
      <Tabs defaultValue="templates" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="templates" className="text-xs">
            Templates
          </TabsTrigger>
          <TabsTrigger value="text" className="text-xs">
            Text
          </TabsTrigger>
          <TabsTrigger value="design" className="text-xs">
            Design
          </TabsTrigger>
        </TabsList>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-4">
          <CardGenerator
            onSelect={handleTemplateSelect}
            currentTemplate={cardState.templateId}
          />
        </TabsContent>

        {/* Text Tab */}
        <TabsContent value="text" className="space-y-4">
          <Card className="border-border/40 shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Type className="size-4" />
                Edit Text
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Title */}
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Title</Label>
                <Input
                  value={cardState.title}
                  onChange={handleTitleChange}
                  placeholder="Enter card title"
                  className="text-sm bg-muted/50"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Message</Label>
                <textarea
                  value={cardState.message}
                  onChange={handleMessageChange}
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-sm resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>

              <Separator />

              {/* Font Family - Google Fonts */}
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Google Fonts</Label>
                <select
                  value={cardState.fontFamily}
                  onChange={(e) => handleFontFamilyChange(e.target.value)}
                  className="w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {GOOGLE_FONTS.map((font) => (
                    <option key={font.id} value={font.family}>
                      {font.name}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-muted-foreground">
                  Choose from 8 beautiful Google Fonts
                </p>
              </div>

              {/* Font Size */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-semibold">Font Size</Label>
                  <span className="text-xs text-muted-foreground">
                    {cardState.fontSize}px
                  </span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="28"
                  value={cardState.fontSize}
                  onChange={handleFontSizeChange}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Design Tab */}
        <TabsContent value="design" className="space-y-4">
          <Card className="border-border/40 shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Palette className="size-4" />
                Design & Colors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Background Color - Custom Picker */}
              <div className="space-y-3">
                <Label className="text-xs font-semibold">
                  Background Color
                </Label>
                <ColorPicker
                  value={cardState.backgroundColor}
                  onChange={handleBackgroundColorChange}
                />
              </div>

              {/* Background Color Presets */}
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-muted-foreground">
                  Quick Presets
                </Label>
                <div className="grid grid-cols-4 gap-2">
                  {PRESET_COLORS.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleBackgroundColorChange(color)}
                      className={cn(
                        "h-8 rounded-lg border-2 transition-all",
                        cardState.backgroundColor === color
                          ? "border-foreground"
                          : "border-border/40",
                      )}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <Separator />

              {/* Text Color - Custom Picker */}
              <div className="space-y-3">
                <Label className="text-xs font-semibold">Text Color</Label>
                <ColorPicker
                  value={cardState.textColor}
                  onChange={handleTextColorChange}
                />
              </div>

              {/* Text Color Presets */}
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-muted-foreground">
                  Quick Presets
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {PRESET_TEXT_COLORS.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleTextColorChange(color)}
                      className={cn(
                        "h-8 rounded-lg border-2 transition-all",
                        cardState.textColor === color
                          ? "border-foreground"
                          : "border-border/40",
                      )}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <Separator />

              {/* Accent Color - Custom Picker */}
              <div className="space-y-3">
                <Label className="text-xs font-semibold">Accent Color</Label>
                <ColorPicker
                  value={cardState.accentColor}
                  onChange={handleAccentColorChange}
                />
              </div>

              {/* Accent Color Presets */}
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-muted-foreground">
                  Quick Presets
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {PRESET_ACCENT_COLORS.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleAccentColorChange(color)}
                      className={cn(
                        "h-8 rounded-lg border-2 transition-all",
                        cardState.accentColor === color
                          ? "border-foreground"
                          : "border-border/40",
                      )}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <Separator />

              {/* Pattern */}
              <div className="space-y-2">
                <Label className="text-xs font-semibold">
                  Background Pattern
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {PATTERNS.map((pattern) => (
                    <button
                      key={pattern.id}
                      onClick={() => handlePatternChange(pattern.id)}
                      className={cn(
                        "rounded-md border px-3 py-2 text-sm transition-all",
                        cardState.backgroundPattern === pattern.id
                          ? "border-primary bg-primary/10"
                          : "border-border/40 hover:border-border/60",
                      )}
                    >
                      {pattern.name}
                    </button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Icon Selection */}
              <div className="space-y-2">
                <Label className="text-xs font-semibold flex items-center gap-2">
                  <Zap className="size-3" />
                  Card Icon
                </Label>
                <div className="grid grid-cols-4 gap-2">
                  {ICONS.map((icon) => (
                    <button
                      key={icon}
                      onClick={() => handleIconChange(icon)}
                      className={cn(
                        "h-10 rounded-lg border-2 text-lg transition-all",
                        cardState.selectedIcon === icon
                          ? "border-primary bg-primary/10"
                          : "border-border/40 hover:border-border/60",
                      )}
                      title={icon}
                    >
                      {getIconEmoji(icon)}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
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
  };

  return iconMap[iconName] || "🎉";
}
