"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Page = () => {
  const faqData = [
    {
      question: "How Do I Send a Best Wishes or Gift?",
      answer:
        "Simply create a personalised card, select a gift from our marketplace, and we will handle the delivery to your recipient!",
      category: "Gift & Products",
    },
    {
      question: "Can I Schedule a Card or Gift For Later?",
      answer:
        "Yes! You can choose a future delivery date during checkout to make sure your gift or card arrives right on time to your recipient!",
      category: "Order & Delivery",
    },
    {
      question: "What Happens if Your Recipient Isn't Available?",
      answer:
        "No worries, we’ll notify them and allow rescheduling without any extra cost; your surprise will stay safe until they claim it!",
      category: "Order & Delivery",
    },
    {
      question: "Do You Restock Items When they Are Sold Out?",
      answer:
        "We restock our popular items regularly. You can also sign up to our newsletter to be notified when specific sold out or new items come!",
      category: "Gift & Products",
    },
    {
      question: "What Type of Gifts are Available on Best Wishes?",
      answer:
        "We offer curated gift items including scented candles, bouquet, cakes, jewelries and more, perfect for every occasion!",
      category: "Gift & Products",
    },
    {
      question: "Is my Payment Information Secure Here on Best Wishes?",
      answer:
        "Absolutely. We use a very secure payment gateways and encryption to protect your personal and billing data!",
      category: "Account & Billing",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilter = (category: string): void => {
    setActiveFilter(category);
  };

  const filteredFaqs =
    activeFilter === "All"
      ? faqData
      : faqData.filter((faq) => faq.category === activeFilter);

  return (
    <div className="p-5 space-y-6 flex flex-col justify-center mx-auto">
      <div className="flex items-center justify-center gap-2.5">
        <div className="flex flex-row items-center -space-x-7">
          <span>
            <IoIosSearch className="text-black z-30 size-5" />
          </span>
          <input
            type="text"
            placeholder="Search articles or topics..."
            className="bg-[#F9F9F7] border border-[#E5E5E5] -z-10 w-[395px] text-black p-2 rounded-md pl-9"
          />
        </div>
        <button className="bg-[#FBC8EB] text-[#F34DBD] p-2 w-[140px] rounded-md">
          Search
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        {[
          "All",
          "Account & Billing",
          "Getting Started",
          "Gift & Products",
          "Order & Delivery",
          "Card & Personization",
        ].map((category) => (
          <button
            key={category}
            className={`whitespace-nowrap p-2 w-fit rounded-md ${
              activeFilter === category
                ? "bg-[#F34DBD] text-white"
                : "bg-[#F8EAF4] text-[#F34DBD]"
            }`}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQs */}
      <div className="flex justify-center">
        <div className="py-2.5 space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4">
          {filteredFaqs.length ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="w-[374px] p-4 border-l-4 rounded-lg shadow-lg space-y-2.5 border-l-[#F34DBD]"
              >
                <h2 className="text-xl font-medium">{faq.question}</h2>
                <p>{faq.answer}</p>
              </div>
            ))
          ) : (
            <p>No FAQs found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
