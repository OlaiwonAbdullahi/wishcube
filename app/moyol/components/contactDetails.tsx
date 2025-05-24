import React from "react";
import {
  LuClock,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuPhone,
} from "react-icons/lu";

const ContactDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <div className="mb-8 text-start">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Live Chat */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center">
                <LuMessageCircle className="w-6 h-6 text-[#1E3A8A]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Live Chat Support
              </h3>
              <p className="text-gray-600 mb-4">
                Chat with our support team 24/7 for instant assistance
              </p>
              <button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/50 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>

        {/* Phone Support */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <LuPhone className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Phone Support
              </h3>
              <div className="flex items-center text-gray-600 mb-2">
                <LuClock className="w-4 h-4 mr-2" />
                <span className="text-sm">
                  Monday - Friday, 9:00 AM - 6:00 PM
                </span>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-medium text-gray-900">
                  +1 (234) 567-8904
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Support */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <LuMail className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email Support
              </h3>
              <p className="text-gray-600 mb-3">
                Send us an email and we&apos;ll respond within 24 hours
              </p>
              <a
                href="mailto:support@company.com"
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                info@moyinolconsulting.com
              </a>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <LuMapPin className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Visit Our Office
              </h3>
              <address className="text-gray-600 not-italic leading-relaxed">
                123 Business Avenue
                <br />
                Suite 456
                <br />
                New York, NY 10001
                <br />
                United States
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
