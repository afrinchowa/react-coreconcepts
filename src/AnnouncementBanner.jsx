import React from "react";

const AnnouncementBanner = ({ message, linkText, linkUrl, bgColor = "bg-yellow-400" }) => {
  return (
    <div className={`${bgColor} text-black px-4 py-3 flex items-center justify-center text-sm font-medium`}>
      <span>{message}</span>
      {linkText && linkUrl && (
        <a
          href={linkUrl}
          className="ml-2 underline hover:text-gray-800 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

export default AnnouncementBanner;
