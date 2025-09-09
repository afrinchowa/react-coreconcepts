import React from "react";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function Store() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-blue-100 to-indigo-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-10 max-w-md w-full text-center border border-white/40"
      >
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="flex justify-center mb-6"
        >
          <div className="p-5 bg-gradient-to-br from-indigo-200 to-indigo-400 rounded-full shadow-md">
            <ShoppingBag className="w-12 h-12 text-indigo-700" />
          </div>
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Welcome to Store
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 mb-8 leading-relaxed">
          Discover amazing products curated just for you. 🚀
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-xl shadow-lg hover:bg-indigo-700 transition"
          >
            Shop Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2.5 bg-gray-100 text-gray-800 font-medium rounded-xl shadow hover:bg-gray-200 transition"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
