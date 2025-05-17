import React from "react";
import { IoDocument } from "react-icons/io5";

const Expertise = () => {
  const expertise = [
    {
      icon: IoDocument,
      title: "Regulatory & Compliance Mastery",
      description:
        "Strong expertise in global regulatory frameworks, risk management, and industry best practices, ensuring businesses stay compliant while maintaining flexibility.",
    },
    {
      icon: IoDocument,
      title: "Business Strategy & Operations",
      description:
        "A combination of business acumen and hands-on experience in optimizing processes, improving efficiency, and implementing scalable strategies.",
    },
    {
      icon: IoDocument,
      title: "AI Governance & Emerging Technology Regulation",
      description:
        "Deep understanding of AI risk, governance models, and compliance requirements, equipping businesses to navigate the evolving digital landscape.",
    },
    {
      icon: IoDocument,
      title: "Innovation & Market Insights",
      description:
        "Staying ahead of regulatory and technological trends to provide forward-looking guidance that supports long-term growth.",
    },
  ];
  return (
    <div>
      <span>Our team brings together a powerful mix of:</span>
      <div className="grid grid-cols-2 gap-2  rounded-lg p-4">
        {expertise.map((item) => (
          <div
            key={item.title}
            className="border border-gray-200 rounded-lg p-4"
          >
            <div className="flex items-center gap-2">
              <IoDocument className="size-12 text-gray-600" />
              <span className="text-xl font-bold">{item.title}</span>
            </div>
            <p className="text-gray-600 text-base leading-6">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
