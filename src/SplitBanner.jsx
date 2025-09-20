
import React from "react";

const SplitBanner = ({ 
  title, 
  subtitle, 
  buttonText, 
  onButtonClick, 
  image, 
  reverse = false 
}) => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16">
      <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 ${reverse ? "md:flex-row-reverse" : ""}`}>
        
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            {title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {subtitle}
          </p>
          {buttonText && (
            <button
              onClick={onButtonClick}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition"
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* Image Section */}
        {image && (
          <div className="flex-1">
            <img 
              src={image} 
              alt="Banner illustration" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SplitBanner;
