"use client";

import React from "react";
import { Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: "About", href: "#about" },
      { name: "Features", href: "#features" },
    ],
    company: [
      { name: "Contact", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/usewishcube",
      label: "X",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:wishcubeapp@gmail.com",
      label: "Mail",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden p-8 md:p-12 bg-[#191A23] rounded-t-3xl mt-24">
      {/* Background Effects */}
      <div aria-hidden className="absolute top-0 left-0 w-full h-full " />
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-zinc-900/10 rounded-full blur-[150px] opacity-30 pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              WishCube
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Creating magical moments through AI-powered celebrations and
              digital gifting.
            </p>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-3">
                {links.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-zinc-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-zinc-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full backdrop-blur-md bg-white/[0.08] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-zinc-500 text-sm">
            © {currentYear} WishCube. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm">
            Made with <span className="text-white">♥</span> for celebrations
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
