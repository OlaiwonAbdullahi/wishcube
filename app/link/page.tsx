"use client";
import React, { useState, useCallback } from "react";
import {
  IoCopyOutline,
  IoShareSocialOutline,
  IoCheckmarkCircleOutline,
  IoLinkOutline,
  IoMailOutline,
  IoLogoWhatsapp,
  IoLogoTwitter,
  IoLogoFacebook,
} from "react-icons/io5";
import { FiExternalLink, FiShare2 } from "react-icons/fi";

interface GreetingData {
  recipientName: string;
  occasion: string;
  message: string;
  theme: string;
  image?: string;
  gift?: string | null;
  voiceMessage?: string;
  music?: string;
}

interface LinkSharingProps {
  greetingData: GreetingData;
  onLinkGenerated?: (link: string) => void;
  className?: string;
}

const LinkSharing: React.FC<LinkSharingProps> = ({
  greetingData,
  onLinkGenerated,
  className = "",
}) => {
  const [generatedLink, setGeneratedLink] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle"
  );
  const [showShareOptions, setShowShareOptions] = useState<boolean>(false);

  // Generate unique greeting ID
  const generateGreetingId = useCallback((): string => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 15);
    return `${timestamp}-${randomStr}`;
  }, []);

  // Generate and store greeting link
  const generateGreetingLink = useCallback(async (): Promise<void> => {
    if (!greetingData?.recipientName?.trim()) {
      alert("Please enter recipient's name first");
      return;
    }

    setIsGenerating(true);

    try {
      // Generate unique ID
      const greetingId = generateGreetingId();

      // Create the greeting data object with metadata
      const greetingPayload = {
        ...greetingData,
        id: greetingId,
        createdAt: new Date().toISOString(),
        version: "1.0",
      };

      // Store in memory (in a real app, this would be sent to a backend)
      const greetingKey = `greeting_${greetingId}`;

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real implementation, you'd store this on a server
      // For demo purposes, we'll use localStorage as fallback
      if (typeof window !== "undefined") {
        localStorage.setItem(greetingKey, JSON.stringify(greetingPayload));
      }

      // Generate the shareable URL
      const baseUrl =
        typeof window !== "undefined" ? window.location.origin : "";
      const greetingUrl = `${baseUrl}/greeting/${greetingId}`;

      setGeneratedLink(greetingUrl);
      onLinkGenerated?.(greetingUrl);
    } catch (error) {
      console.error("Failed to generate greeting link:", error);
      alert("Failed to generate greeting link. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  }, [greetingData, generateGreetingId, onLinkGenerated]);

  // Copy link to clipboard
  const copyToClipboard = useCallback(async (text: string): Promise<void> => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setCopyStatus("copied");
      } else {
        setCopyStatus("error");
      }

      // Reset copy status after 3 seconds
      setTimeout(() => setCopyStatus("idle"), 3000);
    } catch (err) {
      console.error("Failed to copy text:", err);
      setCopyStatus("error");
      setTimeout(() => setCopyStatus("idle"), 3000);
    }
  }, []);

  // Share via different platforms
  const shareVia = useCallback((platform: string, url: string): void => {
    const message = `Check out this special greeting I created for you! 🎉`;
    const encodedUrl = encodeURIComponent(url);
    const encodedMessage = encodeURIComponent(message);

    const shareUrls = {
      whatsapp: `https://wa.me/?text=${encodedMessage}%20${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      email: `mailto:?subject=Special Greeting For You&body=${message}%0A%0A${url}`,
    };

    const shareUrl = shareUrls[platform as keyof typeof shareUrls];
    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  }, []);

  // Use Web Share API if available
  const nativeShare = useCallback(
    async (url: string): Promise<void> => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: `Special Greeting for ${greetingData.recipientName}`,
            text: `Check out this special ${
              greetingData.occasion || "greeting"
            } I created for you! 🎉`,
            url: url,
          });
        } catch (err) {
          console.error("Error sharing:", err);
        }
      } else {
        setShowShareOptions(!showShareOptions);
      }
    },
    [greetingData.recipientName, greetingData.occasion, showShareOptions]
  );

  const getCopyButtonText = (): string => {
    switch (copyStatus) {
      case "copied":
        return "Copied!";
      case "error":
        return "Error";
      default:
        return "Copy Link";
    }
  };

  const getCopyButtonIcon = () => {
    switch (copyStatus) {
      case "copied":
        return <IoCheckmarkCircleOutline className="text-lg" />;
      case "error":
        return <IoCopyOutline className="text-lg" />;
      default:
        return <IoCopyOutline className="text-lg" />;
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Generate Link Section */}
      {!generatedLink && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <IoLinkOutline className="text-2xl text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Generate Shareable Link
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Create a unique link to share your personalized greeting card
              </p>
            </div>
            <button
              onClick={generateGreetingLink}
              disabled={isGenerating || !greetingData.recipientName.trim()}
              className={`
                px-6 py-3 rounded-lg font-medium transition-all duration-200
                ${
                  isGenerating || !greetingData.recipientName.trim()
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transform hover:scale-105"
                }
              `}
            >
              {isGenerating ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>Generating...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <FiShare2 className="text-lg" />
                  <span>Generate Link</span>
                </div>
              )}
            </button>
            {!greetingData.recipientName.trim() && (
              <p className="text-xs text-red-500 mt-2">
                Please enter recipient &apos;s name first
              </p>
            )}
          </div>
        </div>
      )}

      {/* Generated Link Section */}
      {generatedLink && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          {!greetingData?.recipientName?.trim() && (
            <p className="text-xs text-red-500 mt-2">
              Please enter recipient&apos;s name first
            </p>
          )}
          <div>
            <h3 className="font-semibold text-gray-800">
              Link Generated Successfully!
            </h3>
            <p className="text-sm text-gray-600">
              Your greeting is ready to share
            </p>
          </div>

          {/* Link Display */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-3">
                <p className="text-xs text-gray-500 mb-1">Shareable Link:</p>
                <p className="text-sm text-gray-800 font-mono break-all bg-white px-3 py-2 rounded border">
                  {generatedLink}
                </p>
              </div>
              <button
                onClick={() => window.open(generatedLink, "_blank")}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                title="Open link"
              >
                <FiExternalLink className="text-lg" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => copyToClipboard(generatedLink)}
              className={`
                flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200
                ${
                  copyStatus === "copied"
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : copyStatus === "error"
                    ? "bg-red-100 text-red-700 border border-red-200"
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md"
                }
              `}
            >
              {getCopyButtonIcon()}
              <span>{getCopyButtonText()}</span>
            </button>

            <div className="relative">
              <button
                onClick={() => nativeShare(generatedLink)}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-md"
              >
                <IoShareSocialOutline className="text-lg" />
                <span>Share</span>
              </button>

              {/* Share Options Dropdown */}
              {showShareOptions && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  <button
                    onClick={() => shareVia("whatsapp", generatedLink)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                  >
                    <IoLogoWhatsapp className="text-green-600" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={() => shareVia("twitter", generatedLink)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                  >
                    <IoLogoTwitter className="text-blue-500" />
                    <span>Twitter</span>
                  </button>
                  <button
                    onClick={() => shareVia("facebook", generatedLink)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                  >
                    <IoLogoFacebook className="text-blue-600" />
                    <span>Facebook</span>
                  </button>
                  <button
                    onClick={() => shareVia("email", generatedLink)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                  >
                    <IoMailOutline className="text-gray-600" />
                    <span>Email</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Success Message */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-blue-800">
              🎉 <strong>Great!</strong> Your personalized greeting for{" "}
              <strong>{greetingData.recipientName}</strong> is ready. Share the
              link above and they&apos;ll be able to view your special message,
              {greetingData.gift && " receive their gift,"} and enjoy the full
              experience!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkSharing;
