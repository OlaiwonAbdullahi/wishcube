import React from "react";
import FeatureCard from "./featureCard";
import {
  IoGiftOutline,
  IoShareSocialOutline,
  IoSparklesOutline,
} from "react-icons/io5";
import { Md3dRotation } from "react-icons/md";
import { GoDeviceCameraVideo } from "react-icons/go";
import { PiCardsThin } from "react-icons/pi";

const Feature = () => {
  const featureCardData = [
    {
      icon: (
        <span className="text-gray-800 bg-gray-200 p-2.5 rounded-xl flex justify-center items-center mb-1">
          <IoSparklesOutline className=" size-7 " />
        </span>
      ),
      title: "Create AI-Powered Greeting Website",
      description:
        "Let AI help you say the right words. Generate personalized, heartfelt messages and themed cards in seconds — including voice messages and background music.",
    },
    {
      icon: (
        <span className="text-blue-800 bg-blue-200 p-2.5 rounded-xl flex justify-center items-center mb-1">
          <Md3dRotation className=" size-7 " />
        </span>
      ),
      title: " Send Stunning 3D & Animated Website",
      description:
        "Impress your loved ones with interactive cards featuring animations, pop-ups, and confetti effects. Perfect for birthdays, weddings, and more.",
    },
    {
      icon: (
        <span className="text-green-800 bg-green-200 p-2.5 rounded-xl flex justify-center items-center mb-1">
          <IoGiftOutline className=" size-7 " />
        </span>
      ),
      title: " Send Digital Gifts & Vouchers",
      description:
        "Attach gift cards, crypto tips, or shopping vouchers directly to your greeting. Seamless integration with your favorite stores.",
    },
    {
      icon: (
        <span className="text-pink-800 bg-pink-200 p-2.5 rounded-xl flex justify-center items-center mb-1">
          <GoDeviceCameraVideo className=" size-7 " />
        </span>
      ),
      title: "  Host a Virtual Party Room",
      description:
        "Invite friends and family to a live celebration. Enjoy real-time video calls, games, chat, music, and themed party rooms — no downloads needed.",
    },
    {
      icon: (
        <span className="text-purple-800 bg-purple-200 p-2.5 rounded-xl flex justify-center items-center mb-1">
          <PiCardsThin className=" size-7 " />
        </span>
      ),
      title: "Event Invites with RSVP & Reminders",
      description:
        "Plan it all. Send out beautiful digital invitations, track responses, and send auto-reminders. Syncs with Google Calendar and more.",
    },
    {
      icon: (
        <span className="text-yellow-800 bg-yellow-200 p-2.5 rounded-xl flex justify-center items-center mb-1">
          <IoShareSocialOutline className=" size-7 " />
        </span>
      ),
      title: "Share on Socials or Send Privately",
      description:
        "Share your wishes on Instagram, WhatsApp, or via email with a single click.",
    },
  ];

  return (
    <div className="px-[30px] md:px-[60px] bg-[#F8F8FF]">
      <div className="">
        <h1 className="text-3xl font-bold text-center">Features</h1>
        <p className="text-center text-gray-500">
          We offer a range of features to help you create and share your
          greetings with ease.
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 sm:gap-1.5 gap-1.5 mt-5 mb-4 md:mb-10">
          {featureCardData.map((card, index) => (
            <div key={index} className="flex justify-center">
              <FeatureCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
