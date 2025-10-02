import React from "react";

const HeroBanner = ({ backgroundImage, headline, tagline, ctaText, onCtaClick }) => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">{headline}</h1>
        <p className="text-lg md:text-2xl mb-8 opacity-90">{tagline}</p>
        {ctaText && (
          <button
            onClick={onCtaClick}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold shadow-lg transition"
          >
            {ctaText}
          </button>
        )}
      </div>
     
    </section>
  );
};

export default HeroBanner;
