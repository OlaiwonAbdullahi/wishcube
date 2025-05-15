import React from "react";

const HowItWorks = () => {
  return (
    <div className="py-10">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-lg text-center mb-8">
          Our platform is designed to make your life easier. Here&apos;s how it
          works in 4 easy steps:
        </p>
      </div>

      <div className=" flex flex-row md:flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-10/12 mx-auto mb-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-transparent p-1.5 rounded-full border-2 border-[#1c1c1c]">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1c1c1c] text-white font-semibold">
                1
              </div>
            </div>
            <span className="mt-2 text-sm">Step 1</span>
          </div>

          {/* Connector */}
          <div className="md:flex-1 md:h-1 h-16 w-1 bg-gray-300 mx-2 my-2"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-transparent p-1.5 rounded-full border-2 border-[#1c1c1c]">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1c1c1c] text-white font-semibold">
                2
              </div>
            </div>
            <span className="mt-2 text-sm">Step 2</span>
          </div>

          {/* Connector */}
          <div className="md:flex-1 md:h-1 h-16 w-1 bg-gray-300 mx-2 my-2"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-transparent p-1.5 rounded-full border-2 border-[#1c1c1c]">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1c1c1c] text-white font-semibold">
                3
              </div>
            </div>
            <span className="mt-2 text-sm">Step 3</span>
          </div>

          {/* Connector */}
          <div className="md:flex-1 md:h-1 h-16 w-1 bg-gray-300 mx-2 my-2"></div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="bg-transparent p-1.5 rounded-full border-2 border-[#1c1c1c]">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1c1c1c] text-white font-semibold">
                4
              </div>
            </div>
            <span className="mt-2 text-sm">Step 4</span>
          </div>
        </div>

        {/* Step Descriptions */}
        <div className="flex flex-col md:flex-row items-center w-10/12 mx-auto gap-6">
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">Sign Up</h3>
            <p className="text-lg text-left max-w-md">
              Create an account with us to get started. It&apos;s quick and
              easy!
            </p>
          </div>

          <div className="flex flex-col items-start mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">
              Fill the Generator Form
            </h3>
            <p className="text-lg text-left max-w-md">
              Choose the type of content you want to generate and provide the
              necessary details.
            </p>
          </div>

          <div className="flex flex-col items-start mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">Add Gift (Optional)</h3>
            <p className="text-lg text-left max-w-md">
              You can add a gift to your content. This is optional but adds a
              nice touch.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-semibold mb-2 whitespace-nowrap">
              Get Link to Share/Download
            </h3>
            <p className="text-lg text-left max-w-md">
              Once you submit the form, you will receive a link to your
              generated content. You can share it with others or download it for
              yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
