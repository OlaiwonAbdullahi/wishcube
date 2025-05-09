"use client";
import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const ClientIntakeForm = () => {
  const [formProgress, setFormProgress] = useState(0);

  // Track form completion
  const updateProgress = () => {
    // Implementation would calculate actual form completion percentage
    setFormProgress(formProgress < 100 ? formProgress + 10 : formProgress);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Client Intake Form
        </h1>
        <p className="text-gray-600 mb-4">
          Please complete this form to provide the necessary information for
          your contract drafting request. Once submitted, we may follow up to
          gather any additional details needed to finalize your contract.
        </p>

        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
          <div
            className="bg-[#459446] h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${formProgress}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-500">{formProgress}% Complete</span>
      </div>

      <form className="space-y-8" onChange={updateProgress}>
        {/* Section 1: Basic Information */}
        <section className=" pb-6">
          <div className="flex items-center mb-4">
            <span className="bg-[#459446] w-8 h-8 flex justify-center items-center rounded-full text-white text-lg font-medium mr-3">
              1
            </span>
            <h2 className="font-semibold text-xl text-gray-800">
              Basic Information
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Full Name/Company Name*
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Name"
                className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-[#459446] focus:border-[#459446] outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Email Address*
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Email"
                className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-[#459446] focus:border-[#459446] outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number*
              </label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="Phone Number"
                className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-[#459446] focus:border-[#459446] outline-none"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Contract Type & Purpose */}
        <section className=" pb-6">
          <div className="flex items-center mb-4">
            <span className="bg-[#459446] w-8 h-8 flex justify-center items-center rounded-full text-white text-lg font-medium mr-3">
              2
            </span>
            <h2 className="font-semibold text-xl text-gray-800">
              Contract Type & Purpose
            </h2>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col">
              <label
                htmlFor="contractType"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                What type of contract do you need?
              </label>
              <input
                id="contractType"
                type="text"
                required
                placeholder="(E.g., Service Agreement, NDA, Employment Contract, etc.)"
                className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-[#459446] focus:border-[#459446] outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="contractPurpose"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                What is the purpose of this contract?*
              </label>
              <p className="text-sm text-gray-500 mb-1">
                Briefly explain what the contract is meant to achieve.
              </p>

              <div className=" p-4 rounded-md mb-3">
                <p className="font-medium text-gray-700 mb-2">
                  Example Responses:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <IoMdCheckmark className=" mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      I&apos;m hiring someone to design my website, and I want
                      to make sure we agree on the price and deadlines.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <IoMdCheckmark className=" mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      I&apos;m sharing my business idea with a potential
                      investor and want to make sure they don&apos;t use it
                      without me.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <IoMdCheckmark className=" mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      I&apos;m starting a business with a friend, and we want to
                      put our agreement in writing so everything is clear.
                    </span>
                  </li>
                </ul>
              </div>

              <textarea
                id="contractPurpose"
                required
                rows={4}
                placeholder="Describe the purpose of your contract"
                className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-[#459446] focus:border-[#459446] outline-none"
              ></textarea>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="parties"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Who are the parties involved?*
              </label>
              <p className="text-sm text-gray-500 mb-2">
                Please include full legal names of all individuals or
                businesses.
              </p>
              <textarea
                id="parties"
                required
                rows={3}
                placeholder="List all individuals or businesses that will be parties to this contract"
                className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-[#459446] focus:border-[#459446] outline-none"
              ></textarea>
            </div>
          </div>
        </section>

        {/* Section 3: Key Terms & Details */}
        <section className=" pb-6">
          <div className="flex items-center mb-4">
            <span className="bg-[#459446] w-8 h-8 flex justify-center items-center rounded-full text-white text-lg font-medium mr-3">
              3
            </span>
            <h2 className="font-semibold text-xl text-gray-800">
              Key Terms & Details
            </h2>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col">
              <label
                htmlFor="obligations"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                What are the main obligations of each party?*
              </label>
              <p className="text-sm text-gray-500 mb-1">
                Describe what each party is responsible for.
              </p>

              <div className=" p-4 rounded-md mb-3">
                <p className="font-medium text-gray-700 mb-2">
                  Example Responses:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <IoMdCheckmark className="text-green mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      Company provides marketing services; client agrees to pay
                      monthly.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <IoMdCheckmark className="text-green mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      Freelancer delivers graphic designs; client provides
                      feedback within 3 days.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <IoMdCheckmark className="text-green mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      One party licenses software; the other pays a yearly
                      subscription.
                    </span>
                  </li>
                </ul>
              </div>

              <textarea
                id="obligations"
                required
                rows={4}
                placeholder="Describe the responsibilities of each party"
                className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-[#459446] focus:border-[#459446] outline-none"
              ></textarea>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="paymentInvolved"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Will there be any payments involved?* (Yes/No - If yes,
                  specify amount, frequency, and payment terms.)
                </label>
                <input
                  id="contractType"
                  type="text"
                  required
                  placeholder="Will there be any payments involved?"
                  className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-[#459446] focus:border-[#459446] outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Additional Considerations */}
        <section className="pb-6">
          <div className="flex items-center mb-4">
            <span className="bg-[#459446] w-8 h-8 flex justify-center items-center rounded-full text-white text-lg font-medium mr-3">
              4
            </span>
            <h2 className="font-semibold text-xl text-gray-800">
              Additional Considerations
            </h2>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col">
              <label
                htmlFor="specificClauses"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Any specific clauses or terms you need included?
              </label>
              <p className="text-sm text-gray-500 mb-2">
                E.g., confidentiality, dispute resolution, penalties for
                non-compliance.
              </p>
              <textarea
                id="specificClauses"
                rows={4}
                placeholder=" E.g., confidentiality, dispute resolution, penalties for
                non-compliance."
                className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              ></textarea>
            </div>
          </div>
        </section>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-[#459446] text-white rounded-md hover:bg-[#459446] focus:outline-none focus:ring-2 focus:ring-[#459446] focus:ring-offset-2"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientIntakeForm;
