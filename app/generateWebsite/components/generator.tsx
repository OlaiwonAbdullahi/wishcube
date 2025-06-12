"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  IoShareSocialOutline,
  IoCloudUploadOutline,
  IoCopyOutline,
  IoSettingsOutline,
  IoSparklesOutline,
  IoRoseOutline,
} from "react-icons/io5";
import { LuHeartHandshake, LuSquareArrowOutUpRight } from "react-icons/lu";
import { GoPaste } from "react-icons/go";
import { CiIceCream, CiMenuKebab, CiSettings, CiShare2 } from "react-icons/ci";
import VoiceMessage from "./voiceMessage";
import Music from "./music";
import { BiBookOpen, BiEdit, BiRocket } from "react-icons/bi";
import Gift from "./gift";
import { GiCupcake } from "react-icons/gi";

// Define theme type
interface Theme {
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

// Define occasion type
interface Occasion {
  value: string;
  label: string;
}

// Define gift type
export interface GiftItem {
  id: string;
  name: string;
  price: number;
  icon: React.ReactNode;
  bgColor: string;
}

// Theme configurations with professional color schemes
const THEMES: Theme[] = [
  {
    name: "corporate-blue",
    primary: "bg-blue-600",
    secondary: "bg-blue-800",
    textPrimary: "text-blue-600",
    textSecondary: "text-blue-800",
    bgNeutral: "bg-gray-50",
    textNeutral: "text-gray-50",
    bgAccent: "bg-blue-100",
    hoverAccent: "hover:bg-blue-100",
  },
  {
    name: "elegant-charcoal",
    primary: "bg-gray-700",
    secondary: "bg-gray-900",
    textPrimary: "text-gray-700",
    textSecondary: "text-gray-900",
    bgNeutral: "bg-gray-100",
    textNeutral: "text-gray-100",
    bgAccent: "bg-gray-200",
    hoverAccent: "hover:bg-gray-200",
  },
  {
    name: "emerald-success",
    primary: "bg-emerald-600",
    secondary: "bg-emerald-800",
    textPrimary: "text-emerald-600",
    textSecondary: "text-emerald-800",
    bgNeutral: "bg-white",
    textNeutral: "text-white",
    bgAccent: "bg-emerald-100",
    hoverAccent: "hover:bg-emerald-100",
  },
  {
    name: "royal-purple",
    primary: "bg-purple-600",
    secondary: "bg-purple-900",
    textPrimary: "text-purple-600",
    textSecondary: "text-purple-900",
    bgNeutral: "bg-gray-50",
    textNeutral: "text-gray-50",
    bgAccent: "bg-purple-100",
    hoverAccent: "hover:bg-purple-100",
  },
  {
    name: "classic-maroon",
    primary: "bg-red-800",
    secondary: "bg-red-900",
    textPrimary: "text-red-800",
    textSecondary: "text-red-900",
    bgNeutral: "bg-gray-100",
    textNeutral: "text-gray-100",
    bgAccent: "bg-red-100",
    hoverAccent: "hover:bg-red-100",
  },
  {
    name: "teal-professional",
    primary: "bg-teal-600",
    secondary: "bg-teal-800",
    textPrimary: "text-teal-600",
    textSecondary: "text-teal-800",
    bgNeutral: "bg-white",
    textNeutral: "text-white",
    bgAccent: "bg-teal-100",
    hoverAccent: "hover:bg-teal-100",
  },
  {
    name: "amber-accent",
    primary: "bg-amber-600",
    secondary: "bg-amber-800",
    textPrimary: "text-amber-600",
    textSecondary: "text-amber-800",
    bgNeutral: "bg-gray-50",
    textNeutral: "text-gray-50",
    bgAccent: "bg-amber-100",
    hoverAccent: "hover:bg-amber-100",
  },
  {
    name: "indigo-modern",
    primary: "bg-indigo-600",
    secondary: "bg-indigo-900",
    textPrimary: "text-indigo-600",
    textSecondary: "text-indigo-900",
    bgNeutral: "bg-white",
    textNeutral: "text-white",
    bgAccent: "bg-indigo-100",
    hoverAccent: "hover:bg-indigo-100",
  },
];

const OCCASIONS: Occasion[] = [
  { value: "", label: "Select an Occasion" },
  { value: "birthday", label: "Birthday" },
  { value: "anniversary", label: "Anniversary" },
  { value: "congratulations", label: "Congratulations" },
  { value: "appreciation", label: "Appreciation" },
  { value: "wedding", label: "Wedding" },
  { value: "getwell", label: "Get Well" },
  { value: "professional", label: "Professional Greeting" },
  { value: "holiday", label: "Holiday" },
  { value: "other", label: "Other" },
];

const Generator: React.FC = () => {
  // Form state
  const [selectedTheme, setSelectedTheme] = useState<Theme>(THEMES[0]);
  const [recipientName, setRecipientName] = useState<string>("");
  const [occasion, setOccasion] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [customMessage, setCustomMessage] = useState<string>("");
  const [generatedMessage, setGeneratedMessage] = useState<string>("");
  const [imageName, setImageName] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedGift, setSelectedGift] = useState<string | null>(null);
  const [greetingId, setGreetingId] = useState<string>("");
  const [isOn, setIsOn] = useState(false);
  const [addMusic, setAddMusic] = useState(false);

  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Check if window is defined (client-side only)
  const isBrowser = typeof window !== "undefined";

  // Generate a unique ID for the greeting
  const generateGreetingId = (): string => {
    return(
      Math.random().toString(36).substring(2, 15)
    );
  };

  const generateMessage = async (): Promise<void> => {
    const prompt = `
You are a professional greeting card writer. 
Please write a heartfelt and personalized ${occasion} greeting for someone named "${recipientName}". 
If relevant, incorporate the following message or sentiment: "${customMessage}". 
The tone should be warm, sincere, and creative. 
Keep it concise but meaningful (around 3-5 sentences). 
Do not include a signature or sender name. Use emojis.
`;
    try {
      const response = await fetch("https://ai.hackclub.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      const newMessage =
        data.choices?.[0]?.message?.content || "No message generated.";
      setGeneratedMessage(newMessage);

      // Update the message state with the generated content
      setMessage(newMessage);
    } catch (error) {
      console.error("Failed to generate message:", error);
    }
  };

  // Handle image upload with preview capability
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageName(file.name);

      // Create an image preview
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target?.result) {
          setImagePreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const copyGreetingLink = async (): Promise<void> => {
  try {
    // Generate a new ID if one doesn't exist
    if (!greetingId) {
      setGreetingId(generateGreetingId());
      
    }

    // Create the greeting data object
    const greetingData = {
      id: generateGreetingId(),
      recipientName,
      occasion,
      message: message || customMessage,
      theme: selectedTheme.name,
      image: imagePreview,
      gift: selectedGift,
    };
    console.log(greetingId)
    console.log(greetingData)
    // Post the greeting data to your backend API
    const response = await fetch('/api/link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(greetingData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Create the URL with the greeting data
    const baseUrl = window.location.origin;
    const greetingUrl = `${baseUrl}/greeting/${greetingData.id}`;

    // Copy the URL to clipboard
    await navigator.clipboard.writeText(greetingUrl);

    // Show success message
    alert(
      "Greeting saved and link copied to clipboard! Share this link with your recipient."
    );
  } catch (err) {
    console.error("Failed to save and copy greeting link:", err);
    alert("Failed to save and copy the greeting link. Please try again.");
  }
};

  // Paste message functionality
  const handlePasteMessage = async (): Promise<void> => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      if (clipboardText) {
        setCustomMessage(clipboardText);
        if (messageRef.current) {
          messageRef.current.focus();
        }
      }
    } catch (err) {
      console.error("Failed to read clipboard:", err);
      alert(
        "Unable to access clipboard. Please check your browser permissions."
      );
    }
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle using the generated message as the custom message
  const useGeneratedMessage = (): void => {
    setCustomMessage(generatedMessage);
    setGeneratedMessage("");
  };
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  const handleMusicToggle = () => {
    setAddMusic(!addMusic);
  };

  // Gift data
  const gifts: GiftItem[] = [
    {
      id: "flower",
      name: "Flower",
      price: 500,
      icon: <IoRoseOutline className="size-6 text-pink-600" />,
      bgColor: "bg-pink-100",
    },
    {
      id: "ice-cream",
      name: "Ice Cream",
      price: 500,
      icon: <CiIceCream className="size-6 text-teal-600" />,
      bgColor: "bg-teal-100",
    },
    {
      id: "cupcake",
      name: "Cupcake",
      price: 750,
      icon: <GiCupcake className="size-6 text-purple-600" />,
      bgColor: "bg-purple-100",
    },
    {
      id: "frozen-yogurt",
      name: "Frozen Yogurt",
      price: 650,
      icon: <CiIceCream className="size-6 text-blue-600" />,
      bgColor: "bg-blue-100",
    },
  ];

  // Simple form validation
  const isFormValid = recipientName.trim() !== "";

  // Render form section
  const renderForm = () => (
    <form className="space-y-5">
      {/* Recipient Name */}
      <div className="flex flex-col">
        <label
          htmlFor="recipientName"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Recipient&apos;s Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="recipientName"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
          placeholder="Enter recipient's name"
          required
          className="rounded-lg px-4 py-3 border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
        />
      </div>

      {/* Occasion */}
      <div className="flex flex-col">
        <label
          htmlFor="occasion"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Occasion
        </label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="rounded-lg px-4 py-3 border border-gray-300 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full appearance-none bg-white"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;charset=US-ASCII,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.5L10 12.5L15 7.5" stroke="%236B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>\')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem center",
          }}
        >
          {OCCASIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col mb-4">
        <label
          htmlFor="message"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Custom Message (Optional)
        </label>
        <textarea
          id="message"
          value={customMessage}
          onChange={(e) => setCustomMessage(e.target.value)}
          ref={messageRef}
          cols={20}
          rows={5}
          placeholder="Write your message here..."
          className="border border-gray-500 p-3.5 rounded-lg text-gray-800 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-violet-200"
        ></textarea>
        <div className="mt-2.5 flex items-center gap-2">
          <div className="flex">
            <IoSparklesOutline className="size-4 text-gray-500" />
            <button
              type="button"
              onClick={generateMessage}
              className="cursor-pointer text-sm text-blue-600 hover:underline"
            >
              Generate AI Message
            </button>
          </div>
          <div className="flex mb-1.5">
            <button
              type="button"
              onClick={handlePasteMessage}
              className="flex items-center gap-2 mt-1.5 text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              <GoPaste className="size-3" />
              Paste Message
            </button>
          </div>
        </div>
        {generatedMessage && (
          <div className="text-gray-800 mt-4 bg-gray-100 p-4 rounded-xl shadow-lg">
            <p className="text-lg font-light">{generatedMessage}</p>
            <button
              type="button"
              onClick={useGeneratedMessage}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              Use this message
            </button>
          </div>
        )}
      </div>

      {/* Image Upload */}
      <div className="flex flex-col">
        <label
          htmlFor="image"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Upload Image
        </label>
        <div className="flex flex-col">
          <label
            htmlFor="image"
            className="cursor-pointer flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg py-6 hover:bg-gray-50 transition"
          >
            {imagePreview ? (
              <div className="flex flex-col items-center">
                <div className="h-24 w-48 relative mb-2 rounded overflow-hidden">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    layout="fill"
                    objectFit="contain"
                    className="rounded"
                  />
                </div>
                <span className="text-xs text-gray-500">{imageName}</span>
                <span className="text-xs text-blue-600 mt-1">
                  Click to change
                </span>
              </div>
            ) : (
              <>
                <IoCloudUploadOutline className="text-gray-400 text-3xl mb-2" />
                <span className="text-sm text-gray-600">Upload an image</span>
                <span className="text-xs text-gray-500 mt-1">
                  PNG, JPG, GIF up to 5MB
                </span>
              </>
            )}
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Theme Picker */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-2">
          Select Theme
        </label>
        <div className="grid grid-cols-4 gap-3">
          {THEMES.map((theme) => (
            <div
              key={theme.name}
              onClick={() => setSelectedTheme(theme)}
              className={`rounded-lg cursor-pointer transition-all duration-200 ${
                selectedTheme.name === theme.name
                  ? "ring-2 ring-blue-500 ring-offset-2"
                  : "hover:ring-1 hover:ring-gray-300"
              }`}
            >
              <div className="flex flex-col h-16 w-full rounded-lg overflow-hidden">
                <div className={`flex flex-row flex-1`}>
                  <div className={`flex-1 ${theme.primary}`} />
                  <div className={`flex-1 ${theme.bgNeutral}`} />
                </div>
                <div className={`flex-1 ${theme.secondary}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Features */}
      <div className=" space-y-4">
        <div className="border-t border-gray-200 pt-4 mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Additional Features
          </h3>
          <div className=" flex items-center justify-between  mx-auto border border-gray-300 rounded-xl p-3">
            <div className="">
              <h2 className=" text-xl font-medium">Add Gift</h2>
            </div>
            <div
              className={`h-5 w-10 rounded-xl border border-gray-400 flex items-center cursor-pointer transition-colors duration-200 ${
                isOn ? "bg-gray-200" : "bg-gray-200"
              }`}
              onClick={handleToggle}
            >
              <div
                className={`bg-gray-800 h-4 w-4 rounded-full shadow-sm transition-transform duration-200 ${
                  isOn
                    ? "transform translate-x-5 "
                    : "transform translate-x-0.5 bg-gray-700"
                }`}
              />
            </div>
          </div>
          <div className=" flex items-center justify-between  mx-auto border border-gray-300 rounded-xl p-3 mt-4">
            <div className="">
              <h2 className=" text-xl font-medium">Add Music</h2>
            </div>
            <div
              className={`h-5 w-10 rounded-xl border border-gray-400 flex items-center cursor-pointer transition-colors duration-200 ${
                addMusic ? "bg-gray-200" : "bg-gray-200"
              }`}
              onClick={handleMusicToggle}
            >
              <div
                className={`bg-gray-800 h-4 w-4 rounded-full shadow-sm transition-transform duration-200 ${
                  addMusic
                    ? "transform translate-x-5 "
                    : "transform translate-x-0.5 bg-gray-700"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {isOn && (
            <div className="">
              <Gift gifts={gifts} onSelectGift={setSelectedGift} />
            </div>
          )}
          {addMusic && (
            <div className="">
              <Music />
            </div>
          )}
          <VoiceMessage />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-2">
        <button
          type="button"
          disabled={!isFormValid}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
            isFormValid
              ? "bg-gray-600 hover:bg-gray-700"
              : "bg-gray-400 cursor-not-allowed"
          } transition duration-200`}
        >
          Generate Greeting
        </button>
        {!isFormValid && (
          <p className="text-xs text-red-500 mt-1">
            Please enter recipient&apos;s name to continue
          </p>
        )}
      </div>
    </form>
  );

  // Render preview section
  const renderPreview = () => (
    <div className="sticky top-6">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Preview Header */}
        <div className="bg-gray-50 p-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="font-medium text-gray-700">Preview</h3>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <IoSettingsOutline className="text-gray-500 text-lg" />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <LuSquareArrowOutUpRight className="text-gray-500 text-lg" />
            </button>
          </div>
        </div>

        {/* Greeting Preview */}
        <div
          className={`${selectedTheme.bgNeutral} p-8 min-h-[500px] max-h-[600px] overflow-y-auto`}
        >
          <div className="relative">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6 border-b pb-4 border-gray-200">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-full ${selectedTheme.bgAccent} flex items-center`}
                >
                  <LuHeartHandshake
                    size={25}
                    className={selectedTheme.textPrimary}
                  />
                </div>
              </div>
              <div className="">
                <h2
                  className={`text-xl font-semibold capitalize ${selectedTheme.textSecondary}`}
                >
                  {occasion ? `${occasion} Greeting` : "Greeting"}
                </h2>
              </div>

              <button
                onClick={toggleMenu}
                className={`p-2 rounded-full transition-colors ${selectedTheme.hoverAccent}`}
                aria-label="Menu"
              >
                <CiMenuKebab size={18} className={selectedTheme.textPrimary} />
              </button>
            </div>

            {isMenuOpen && (
              <div className="absolute right-0 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10">
                <ul>
                  <li className="px-2">
                    <button className="flex items-center gap-3 w-full px-3 py-2 text-left text-gray-700 rounded-md hover:bg-gray-50">
                      <BiEdit size={16} className={selectedTheme.textPrimary} />
                      <span>Create Your Own</span>
                    </button>
                  </li>
                  <li className="px-2">
                    <button className="flex items-center gap-3 w-full px-3 py-2 text-left text-gray-700 rounded-md hover:bg-gray-50">
                      <BiBookOpen
                        size={16}
                        className={selectedTheme.textPrimary}
                      />
                      <span>View Templates</span>
                    </button>
                  </li>
                  <li className="px-2">
                    <button className="flex items-center gap-3 w-full px-3 py-2 text-left text-gray-700 rounded-md hover:bg-gray-50">
                      <CiShare2
                        size={16}
                        className={selectedTheme.textPrimary}
                      />
                      <span>Share</span>
                    </button>
                  </li>
                  <li className="border-t border-gray-100 mt-1 pt-1 px-2">
                    <button className="flex items-center gap-3 w-full px-3 py-2 text-left text-gray-700 rounded-md hover:bg-gray-50">
                      <CiSettings
                        size={16}
                        className={selectedTheme.textPrimary}
                      />
                      <span>Settings</span>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-6 text-center">
            <div className="flex md:flex-row flex-col space-y-6 items-center justify-between">
              <div className="space-y-3.5">
                {recipientName && (
                  <h1
                    className={`text-3xl font-bold ${selectedTheme.textPrimary}`}
                  >
                    Hey, {recipientName}
                  </h1>
                )}

                {occasion && (
                  <div
                    className={`inline-block px-4 py-1 rounded-full text-sm ${selectedTheme.primary} text-white`}
                  >
                    <div className="flex gap-2 items-center">
                      <IoSparklesOutline className="size-4" />
                      {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
                    </div>
                  </div>
                )}
              </div>

              {/* Image (if uploaded) */}
              {imagePreview && (
                <div className="py-4">
                  <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-md bg-white">
                    <Image
                      src={imagePreview}
                      alt="Greeting"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Message */}
            {(message || customMessage) && (
              <div
                className={`mx-auto max-w-md p-6 rounded-xl shadow-sm ${
                  selectedTheme.bgNeutral === "bg-white"
                    ? "bg-gray-50"
                    : "bg-white"
                }`}
              >
                <p className="text-gray-700 leading-relaxed">
                  {message || customMessage}
                </p>
              </div>
            )}

            <div>
              <button
                className={`text-lg ${selectedTheme.secondary} ${selectedTheme.textNeutral} p-1 rounded-full px-2.5`}
              >
                Redeem Gift
              </button>
            </div>

            <div className="flex justify-center items-center gap-1 pt-6 text-sm text-gray-500">
              <BiRocket className="text-xs" />
              <span>Made With 💜 with WishCube</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={copyGreetingLink}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              <IoCopyOutline className="text-lg" />
              <span>Copy Link</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition">
              <IoShareSocialOutline className="text-lg" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 p-6 bg-gray-100">
      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-xl lg:w-1/2 w-full p-8 space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Create Professional Greeting Website
          </h2>
          <button
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            className="md:hidden px-4 py-2 bg-gray-100 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
          >
            {isPreviewMode ? "Edit" : "Preview"}
          </button>
        </div>

        {(!isPreviewMode || (isBrowser && window.innerWidth >= 768)) &&
          renderForm()}
      </div>

      {/* Preview Section */}
      {(!isPreviewMode || (isBrowser && window.innerWidth >= 768)) && (
        <div className="lg:w-1/2 w-full">{renderPreview()}</div>
      )}
    </div>
  );
};

export default Generator;
