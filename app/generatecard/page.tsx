"use client";
import React, { useState, useRef, useEffect } from "react";
import { BsBalloon, BsBalloonHeart } from "react-icons/bs";
import { CiEdit, CiShare2 } from "react-icons/ci";
import { IoCloudDownloadOutline, IoSparklesOutline } from "react-icons/io5";
import { PiConfettiThin } from "react-icons/pi";
import { FaStar, FaGift, FaFeatherAlt } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";
import { LuSparkles } from "react-icons/lu";
import Menu from "../ui/menu";
import { toBlob, toPng } from "html-to-image";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../AuthContext";

// Extracted constants
const THEMES = [
  { name: "purple-indigo", gradient: "from-purple-500 to-indigo-600" },
  { name: "orange-red", gradient: "from-orange-500 to-red-600" },
  { name: "cyan-blue", gradient: "from-cyan-500 to-blue-600" },
  { name: "gray-black", gradient: "from-gray-500 to-black" },
  { name: "yellow-green", gradient: "from-yellow-500 to-green-600" },
  { name: "sunset-glow", gradient: "from-pink-500 to-yellow-500" },
  { name: "aqua-dream", gradient: "from-teal-400 to-blue-500" },
  { name: "forest-magic", gradient: "from-emerald-500 to-lime-500" },
  { name: "berry-bliss", gradient: "from-pink-600 to-purple-600" },
  { name: "cool-sky", gradient: "from-sky-400 to-indigo-500" },
  { name: "midnight-ocean", gradient: "from-blue-800 to-gray-900" },
  { name: "sunrise-peach", gradient: "from-red-300 to-yellow-200" },
];

const DECORATIONS = [
  <LuSparkles key="1" className="text-white/80" />,
  <FaStar key="2" className="text-white/80" />,
  <BsBalloonHeart key="3" className="text-white/80" />,
  <MdCelebration key="4" className="text-white/80" />,
  <FaGift key="5" className="text-white/80" />,
  <PiConfettiThin key="6" className="text-white/80" />,
];

const OCCASIONS = [
  { value: "", label: "Select an Occasion" },
  { value: "birthday", label: "Birthday" },
  { value: "anniversary", label: "Anniversary" },
  { value: "wedding", label: "Wedding" },
  { value: "get well", label: "Get Well" },
];

const GreetingCardPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    recipientName: "",
    occasion: "",
    customMessage: "",
  });

  // Card state
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);
  const [isHovering, setIsHovering] = useState(false);
  const [animate, setAnimate] = useState(false);

  const cardRef = useRef(null);

  // Handle form input changes

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Animation effect when theme changes
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 700);
    return () => clearTimeout(timer);
  }, [selectedTheme]);

  // Generate AI message
  const generateMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { recipientName, occasion, customMessage } = formData;

    if (!recipientName || !occasion) {
      toast.error("Please provide recipient name and occasion");
      return;
    }

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      const message =
        data.choices?.[0]?.message?.content || "No message generated.";
      setGeneratedMessage(message);
    } catch (error) {
      console.error("Failed to generate message:", error);
      toast.error("Failed to generate message");
    }
  };

  // Download card as image
  const downloadCard = () => {
    const node = document.getElementById("GreetingCard");
    if (!node) return;

    node.scrollIntoView();

    setTimeout(() => {
      toPng(node, { quality: 0.95, cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "greeting-card.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error("Download failed:", error);
          toast.error("Download failed");
        });
    }, 300);
  };

  // Share card
  const shareCard = async () => {
    const node = document.getElementById("GreetingCard");
    if (!node) return;

    try {
      node.scrollIntoView();
      const blob = await toBlob(node, { quality: 0.95, cacheBust: true });

      if (!blob) {
        toast.error("Could not generate image");
        return;
      }

      const file = new File([blob], "greeting-card.png", { type: blob.type });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "Greeting Card",
          text: "Here's my Greeting Card",
          files: [file],
        });
      } else {
        toast.error(
          "Sharing is not supported on this browser. Try downloading instead."
        );
      }
    } catch (error) {
      console.error("Share failed:", error);
      toast.error("An error occurred while trying to share");
    }
  };

  const { userProfile } = useAuth();
  console.log(userProfile);

  // Render form section
  const renderForm = () => (
    <div className="flex flex-col w-full md:w-1/2 bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-sm border border-black/25 p-6 rounded-2xl space-y-6 mx-auto m-10">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col self-start text-left">
          <h1 className="text-2xl font-bold text-left">Generate Your Card</h1>
          <p className="text-left text-gray-600">
            Create personalized greeting cards for any occasion.
          </p>
        </div>
        <div className=" flex items-center gap-2">
          <CiEdit className="size-6" />
          Customize Form
        </div>
      </div>

      <form onSubmit={generateMessage}>
        {/* Name Input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="name">Your Name (or Nickname)</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter Your Name"
            className="border p-1.5 rounded-lg text-gray-800 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-violet-200"
          />
          <span>
            {" "}
            Or Use Your Name &quot;{userProfile?.displayName}&quot; ?
          </span>
        </div>

        {/* Recipient Name Input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="recipientName">Recipient Name</label>
          <input
            type="text"
            id="recipientName"
            value={formData.recipientName}
            onChange={handleInputChange}
            placeholder="Enter Recipient Name"
            className="border p-1.5 rounded-lg text-gray-800 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-violet-200"
            required
          />
        </div>

        {/* Occasion Dropdown */}
        <div className="flex flex-col mb-4">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={formData.occasion}
            onChange={handleInputChange}
            className="border p-1.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-200"
            required
          >
            {OCCASIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Custom Message Textarea */}
        <div className="flex flex-col mb-4">
          <label htmlFor="customMessage">Custom Message (Optional)</label>
          <textarea
            id="customMessage"
            value={formData.customMessage}
            onChange={handleInputChange}
            rows={5}
            placeholder="Write your message here..."
            className="border p-3.5 rounded-lg text-gray-800 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-violet-200"
          ></textarea>

          {/* Generate Button */}
          <div className="mt-2.5 flex items-center gap-2">
            <IoSparklesOutline className="size-4 text-gray-500" />
            <button
              type="submit"
              className="cursor-pointer text-sm text-blue-600 hover:underline"
            >
              Generate AI Message
            </button>
          </div>

          {/* Generated Message Preview */}
          {generatedMessage && (
            <p className="text-gray-800 mt-4 bg-gray-300 p-4 rounded-xl shadow-lg text-lg font-light">
              {generatedMessage}
            </p>
          )}
        </div>

        {/* Theme Selection */}
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-[#1c1c1c]">Select Theme</label>
          <div className="flex justify-around flex-wrap gap-4">
            {THEMES.map((theme) => (
              <div
                key={theme.name}
                onClick={() => setSelectedTheme(theme)}
                className={`h-20 w-20 rounded-xl bg-gradient-to-r ${
                  theme.gradient
                } cursor-pointer ${
                  selectedTheme.name === theme.name
                    ? "border-4 border-[#1c1c1c]"
                    : "hover:border-2 hover:border-[#1c1c1c]"
                }`}
              />
            ))}
          </div>
        </div>
      </form>
    </div>
  );

  // Render card section
  const renderCard = () => (
    <div className="space-y-6 w-full md:w-1/2 items-start self-start mt-10">
      <div
        id="GreetingCard"
        ref={cardRef}
        className={`relative w-full mx-auto overflow-hidden ${
          animate ? "animate-pulse" : ""
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Premium badge */}
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl shadow-lg transform -rotate-6">
            PREMIUM
          </div>
        </div>

        <div
          className={`w-full bg-gradient-to-r ${
            selectedTheme.gradient
          } p-8 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-md space-y-6 text-white transform transition-all duration-500 ${
            isHovering ? "scale-[1.01]" : ""
          }`}
        >
          {/* Top icons */}
          <div className="flex justify-center gap-6 text-white/70">
            <IoSparklesOutline className="size-7 hover:text-white hover:scale-125 transition duration-300" />
            <BsBalloonHeart className="size-7 hover:text-white hover:scale-125 transition duration-300" />
            <BsBalloon className="size-7 hover:text-white hover:scale-125 transition duration-300" />
            <PiConfettiThin className="size-7 hover:text-white hover:scale-125 transition duration-300" />
          </div>

          {/* Decorations */}
          <div className="absolute top-20 left-10 opacity-20 text-4xl transform -rotate-12">
            {DECORATIONS[0]}
          </div>
          <div className="absolute bottom-20 right-10 opacity-20 text-4xl transform rotate-12">
            {DECORATIONS[2]}
          </div>

          {/* Heading */}
          <div className="relative">
            <div className="absolute -left-2 top-3 text-5xl text-white/5">
              ✦
            </div>
            <div className="absolute -right-2 top-3 text-5xl text-white/5">
              ✦
            </div>
            <h2 className="text-center font-extrabold capitalize tracking-wide py-2">
              <span className="block text-sm uppercase tracking-widest mb-1 text-white/80">
                Happy
              </span>
              <span className="text-4xl bg-clip-text bg-gradient-to-b from-white to-white/80 pb-1">
                {formData.occasion}
              </span>
            </h2>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-white/20 w-1/4"></div>
            <FaFeatherAlt className="mx-4 text-white/40" />
            <div className="h-px bg-white/20 w-1/4"></div>
          </div>

          {/* Message Content */}
          <div className="bg-white/10 rounded-xl p-8 text-center space-y-4 shadow-inner relative overflow-hidden backdrop-blur-sm border border-white/20">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-4xl"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                >
                  {DECORATIONS[Math.floor(Math.random() * DECORATIONS.length)]}
                </div>
              ))}
            </div>

            <p className="text-xl font-semibold">
              Dear{" "}
              <span className="italic capitalize font-bold">
                {formData.recipientName}
              </span>
              ,
            </p>
            <p
              className="text-lg leading-relaxed text-white/90"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
            >
              {generatedMessage || formData.customMessage}
            </p>
            <div className="pt-3 text-right italic text-white/80">
              <p>With love,</p>
              <p className="font-medium">{formData.name}</p>
            </div>
          </div>

          {/* Bottom icons */}
          <div className="flex justify-center gap-6 text-white/70">
            <IoSparklesOutline className="size-7 hover:text-white hover:scale-125 transition duration-300" />
            <BsBalloonHeart className="size-7 hover:text-white hover:scale-125 transition duration-300" />
            <BsBalloon className="size-7 hover:text-white hover:scale-125 transition duration-300" />
            <PiConfettiThin className="size-7 hover:text-white hover:scale-125 transition duration-300" />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <div className="text-xs uppercase tracking-widest text-white/60">
              WishCube Premium
            </div>
            <div className="flex flex-col leading-tight text-right">
              <span className="text-sm text-white/80">&copy; WishCube</span>
              <span className="text-xs text-white/60">Built by Abdullahi</span>
            </div>
          </div>
        </div>

        {/* Shine effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 ${
            isHovering ? "animate-shine" : ""
          }`}
        ></div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-4 w-full  mx-auto">
        <button
          onClick={downloadCard}
          className="flex cursor-pointer whitespace-nowrap items-center justify-center gap-2 bg-[#1c1c1c] text-white w-1/2 px-4 py-2 rounded-md hover:bg-gray-600 transition"
        >
          <IoCloudDownloadOutline className="size-5" /> Download Card
        </button>
        <button
          onClick={shareCard}
          className="flex cursor-pointer whitespace-nowrap items-center justify-center gap-2 bg-[#1c1c1c] text-white w-1/2 px-4 py-2 rounded-md hover:bg-gray-600 transition"
        >
          <CiShare2 /> Share Card
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row items-center p-6 pb-15 gap-10 justify-between">
      <Toaster />
      {renderForm()}
      {generatedMessage && renderCard()}
      <Menu />
    </div>
  );
};

export default GreetingCardPage;
