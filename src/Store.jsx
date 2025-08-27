import React from "react";
import { ShoppingBag } from "lucide-react";

export default function Store() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-50 to-blue-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center transition hover:shadow-2xl">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-indigo-100 rounded-full">
            <ShoppingBag className="w-10 h-10 text-indigo-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Store</h1>
        
        {/* Subtitle */}
        <p className="text-gray-600 mb-6">
          Discover amazing products curated just for you. 🚀
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-5 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
            Shop Now
          </button>
          <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
