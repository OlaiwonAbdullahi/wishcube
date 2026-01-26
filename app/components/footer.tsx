import React from "react";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "About", href: "#about" },
    ],
    company: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/wishcubeapp",
      label: "X",
    },

    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:wishcubeapp@gmail.com",
      label: "Mail",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden py-12 px-6 mt-24">
      {/* Background Effects */}
      <div aria-hidden className="absolute top-0 left-0 w-full h-full " />
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-zinc-900/10 rounded-full blur-[150px] opacity-30 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full backdrop-blur-md bg-white/[0.08] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.12] hover:border-white/20 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {currentYear} WishCube. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm">
            Made with <span className="text-white">♥</span> for celebrations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
