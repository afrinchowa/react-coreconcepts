/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ message, type = "success", isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 3000); // Auto-close after 3s
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  const getColor = () => {
    switch (type) {
      case "success": return "bg-green-500";
      case "error": return "bg-red-500";
      case "warning": return "bg-yellow-500";
      default: return "bg-gray-800";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 right-6 px-4 py-3 text-white rounded-lg shadow-lg ${getColor()}`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
