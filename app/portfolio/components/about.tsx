import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column: Content */}
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                I&apos;m a passionate FrontEnd Developer with expertise in
                building modern web applications and digital experiences that
                solve real-world problems.
              </p>
              <p>
                With over 3 years of experience working with JavaScript
                frameworks like React, Next.js, and Bootsrap, I&apos;ve
                developed a deep understanding of creating performant, scalable
                applications that deliver exceptional user experiences.
              </p>
              <p>
                My approach combines technical excellence with thoughtful design
                principles, ensuring that every project I work on is both
                functionally robust and visually appealing.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Core Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  <span>Frontend Development</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  <span>React & Next.js</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  <span>UI/UX Implementation</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  <span>Backend Fundamentals</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  <span>RESTful APIs</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 relative h-80 sm:h-96 lg:h-auto mt-8 lg:mt-0">
            <div className="absolute z-10 top-0 left-0 w-3/4 shadow-lg rounded-lg overflow-hidden border-4 border-white ">
              <Image
                src="/dp.jpg"
                alt="Abdullahi Olaiwon"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <div className="bg-white p-3 flex items-center justify-between">
                <span className="text-neutral-500 text-sm">
                  @abdullahiOla_05
                </span>
              </div>
            </div>

            <div className="absolute z-20 bottom-0 right-0 w-3/4 shadow-lg rounded-lg overflow-hidden border-4 border-white">
              <Image
                src="/dp.jpg"
                alt="Abdullahi Olaiwon"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <div className="bg-white p-3 flex items-center justify-between">
                <span className="text-neutral-700 text-sm">
                  @abdullahiOla_05
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
