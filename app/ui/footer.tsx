import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between gap-8 mb-10">
          {/* Brand Section */}
          <div className="w-full md:w-2/5 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 overflow-hidden rounded-full shadow-md">
                <Image
                  src="/wishcubelogo.png"
                  alt="WishCube Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">WishCube</h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              minus amet tenetur quaerat voluptas, recusandae quis ipsam
              voluptatem velit dolorum.
            </p>

            {/* Social Media Links */}
            <div className="pt-4">
              <p className="text-sm font-medium mb-3 text-gray-700">
                Follow Us
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://facebook.com"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  <CiFacebook className="w-6 h-6" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="text-gray-500 hover:text-pink-600 transition-colors duration-200"
                >
                  <CiInstagram className="w-6 h-6" />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
                >
                  <CiTwitter className="w-6 h-6" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-gray-500 hover:text-blue-700 transition-colors duration-200"
                >
                  <CiLinkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/5 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="w-full md:w-1/5 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/5 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact
            </h3>
            <address className="not-italic text-sm text-gray-500 space-y-2">
              <p>1234 Market Street</p>
              <p>San Francisco, CA 94103</p>
              <p className="pt-2">
                <Link
                  href="mailto:info@wishcube.com"
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  info@wishcube.com
                </Link>
              </p>
              <p>
                <Link
                  href="tel:+14155550123"
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  +1 (415) 555-0123
                </Link>
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm pt-4">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} WishCube. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
