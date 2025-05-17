import React from "react";

const WhyChoose = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col gap-6">
      <div className="mb-4">
        <h2 className="text-4xl font-semibold text-gray-800">Why Choose Us?</h2>
      </div>

      <div className="bg-[url('/dp.jpg')] bg-cover bg-center w-full h-fit relative flex flex-col justify-between ">
        {/* First card - aligned to the left */}
        <div className=" w-1/3">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="border border-gray-300 rounded-lg p-5">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Multidisciplinary Approach
              </h3>
              <p className="text-gray-600">
                We integrate compliance, AI governance, and strategic insights
                to provide well-rounded solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Second card - centered */}
        <div className="mx-auto w-1/3">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="border border-gray-300 rounded-lg p-5">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Industry Expertise
              </h3>
              <p className="text-gray-600">
                Our team brings years of specialized experience across various
                sectors to address your unique challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Third card - aligned to the right */}
        <div className="self-end w-1/3">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="border border-gray-300 rounded-lg p-5">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Client-Focused Solutions
              </h3>
              <p className="text-gray-600">
                We tailor our approach to your specific needs, ensuring
                measurable results and lasting success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
