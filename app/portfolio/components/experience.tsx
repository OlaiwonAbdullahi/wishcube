import React from "react";

const Experience = () => {
  const experiences = [
    {
      period: "2025 - Present",
      title: "Frontend Developer Intern",
      company: "Nile Tech",
      description:
        "Collaborated with senior developers on building responsive user interfaces using React and Next.js. Implemented design systems and contributed to the development of reusable components, improving development efficiency by 30%.",
      skills: ["React", "Next.js", "Tailwind CSS", "Git"],
      current: true,
    },
    {
      period: "2023 - 2024",
      title: "Frontend Developer",
      company: "Unity High School",
      description:
        "Developed and maintained the school's website. Redesigned the UI/UX to improve user experience, resulting in a 40% increase in parent engagement. Implemented responsive designs ensuring compatibility across all devices.",
      skills: ["JavaScript", "HTML/CSS", "Bootstrap", "ReactJs"],
      current: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey in software development has equipped me with a diverse
            set of skills and experiences.
          </p>
        </div>

        <div className="relative border-l-2 border-gray-500 pl-8 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-11 mt-1.5">
                <div
                  className={`h-5 w-5 rounded-full border-4 ${
                    exp.current
                      ? "bg-gray-500 border-gray-200"
                      : "bg-white border-gray-500"
                  }`}
                ></div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg relative">
                <div className="absolute -top-3 left-0 bg-neutral-900 text-white text-sm font-medium px-4 py-1 rounded-full shadow-sm">
                  {exp.period}
                </div>

                <div className="mt-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {exp.title}
                    </h3>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-blue-50 text-blue-700 px-4 md:py-1.5 py-1 rounded-full border border-blue-200 font-medium  items-center gap-2 inline-block">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            exp.current
                              ? "bg-green-500 animate-pulse"
                              : "bg-blue-500"
                          }`}
                        ></span>
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-5">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute -bottom-4 -left-2.5">
            <div className="h-6 w-6 rounded-full border-2 border-gray-500 bg-gray-50 flex items-center justify-center">
              <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Education section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Education</h3>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-gray-800">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-gray-600">
                  Ladoke Akintola University of Technology
                </p>
              </div>
              <div className="text-blue-600 font-medium">2024 - Present</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
