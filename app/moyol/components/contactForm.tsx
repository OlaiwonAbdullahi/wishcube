"use client";
import React, { useState } from "react";
import {
  LuMail,
  LuMessageSquare,
  LuPhone,
  LuSend,
  LuUser,
} from "react-icons/lu";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<FormData>;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl  border border-blue-200/50"
    >
      <div className="text-start mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Send Us Message
        </h2>
      </div>

      <div className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <div className="relative">
            <div className="absolute z-30 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LuUser className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-white/80 backdrop-blur-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.name
                  ? "border-red-300 focus:ring-red-500/20 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500/20 focus:border-blue-500"
              }`}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="relative">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LuMail className="z-10 h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-white/80 backdrop-blur-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.email
                  ? "border-red-300 focus:ring-red-500/20 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500/20 focus:border-blue-500"
              }`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Phone Field */}
        <div className="relative">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LuPhone className="z-10 h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 123-4567"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-white/80 backdrop-blur-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.phone
                  ? "border-red-300 focus:ring-red-500/20 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500/20 focus:border-blue-500"
              }`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="relative">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message *
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <LuMessageSquare className="z-10 h-5 w-5 text-gray-400" />
            </div>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us how we can help you..."
              className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-white/80 backdrop-blur-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                errors.message
                  ? "border-red-300 focus:ring-red-500/20 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500/20 focus:border-blue-500"
              }`}
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 transform ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#1E3A8A] hover:bg-[#1E3A8A]/50 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/20 active:scale-[0.98]"
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <LuSend className="h-5 w-5" />
                Send Message
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
