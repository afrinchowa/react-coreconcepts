import React from "react";

const Banner = ({ title, subtitle, buttonText, onButtonClick, image }) => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 md:py-20">
        
        {/* Text Section */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">{subtitle}</p>
          {buttonText && (
            <button
              onClick={onButtonClick}
              className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* Image Section */}
        {image && (
          <div className="mt-8 md:mt-0 md:ml-8">
            <img
              src={image}
              alt="Banner illustration"
              className="w-64 md:w-96 drop-shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;
