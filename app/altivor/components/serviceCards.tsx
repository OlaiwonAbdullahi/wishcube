"use client";
import React, { useState } from "react";

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "Review & Risk Report",
      description:
        "Suitable for individuals and businesses who need a clear understanding of their contracts and risk before signing but do not require modifications.",
      image: "/dp.jpg",
      hoverBg: "bg-green-600",
    },
    {
      id: 2,
      title: "Review & Mark-Up",
      description:
        "Suitable for individuals and businesses who require detailed insights and suggested changes to improve contract terms but do not require full drafting.",
      image: "/dp.jpg",
      hoverBg: "bg-green-600",
    },
    {
      id: 3,
      title: "Drafting Basic Contracts",
      description:
        "Suitable for businesses and individuals needing basic contracts for straightforward transactions",
      image: "/dp.jpg",
      hoverBg: "bg-green-600",
    },
    {
      id: 4,
      title: "Drafting Advanced Contracts",
      description:
        "Suitable for businesses and individuals with complex agreements or transactions requiring more tailored contractual arrangements.",
      image: "/dp.jpg",
      hoverBg: "bg-green-600",
    },
    {
      id: 5,
      title: "Custom Contracts Advisory",
      description:
        "If your agreement or transaction does not fit one of our standard offerings or if you'd prefer a tailored consultation before proceeding, this option is for you.",
      image: "/dp.jpg",
      hoverBg: "bg-green-600",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative flex flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out
              ${hoveredCard === service.id ? service.hoverBg : "bg-transparent"}
              text-white rounded-lg shadow-lg h-64 overflow-hidden`}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Image */}
            {hoveredCard !== service.id && (
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 bg-opacity-40" />{" "}
                {/* Overlay for better text visibility */}
              </div>
            )}

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 text-center">
                {hoveredCard === service.id ? "" : service.title}
              </h3>
              <p className="text-base opacity-90 text-center">
                {hoveredCard === service.id ? service.description : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
