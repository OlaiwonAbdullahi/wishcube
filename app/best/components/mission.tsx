import React from "react";

const Mission = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#FFD4FF26] py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl text-[#F34DBD] text-center font-semibold mb-10">
        Our Mission
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src="https://placehold.co/600x400"
            alt="Mission illustration"
            className=" w-full"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-5">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            <span className="text-[#F34DBD]">Bringing </span>
            Joy to Every Distance
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Best Wishes, our mission is to make every connection meaningful—
            bridging hearts across any distance by blending thoughtful digital
            greetings with real-world surprises. We strive to empower people to
            celebrate life’s moments, big and small, with ease and authenticity.
            Through beautifully personalized cards, curated gifts, and seamless
            delivery experiences, we make it easier to spread joy wherever you
            are.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
