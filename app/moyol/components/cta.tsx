import React from "react";

const Cta = () => {
  return (
    <div className="relative h-[50vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Ready to Transform Your Business?
          </h1>
          <p className="text-gray-300 mb-6">
            Partner with us for expert guidance and strategy that drive growth
            and success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-transparent border border-white text-[#1E3A8A] font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
              Contact Us
            </button>
            <button className="bg-[#1E3A8A] text-white font-semibold py-2 px-6 rounded hover:bg-[#1E3A8A]/80 hover:border-[#1E3A8A] hover:border transition">
              Get Your Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
