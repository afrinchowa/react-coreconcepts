/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertTriangle, Info, XCircle, X } from "lucide-react";

export default function Toast({ message, type = "success", isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 3000); // Auto-close after 3s
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  const getStyles = () => {
    switch (type) {
      case "success":
        return { bg: "bg-green-500/90", icon: <CheckCircle className="w-5 h-5 text-white" /> };
      case "error":
        return { bg: "bg-red-500/90", icon: <XCircle className="w-5 h-5 text-white" /> };
      case "warning":
        return { bg: "bg-yellow-500/90", icon: <AlertTriangle className="w-5 h-5 text-white" /> };
      case "info":
        return { bg: "bg-blue-500/90", icon: <Info className="w-5 h-5 text-white" /> };
      default:
        return { bg: "bg-gray-800/90", icon: <Info className="w-5 h-5 text-white" /> };
    }
  };

  const { bg, icon } = getStyles();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 right-6 flex items-center gap-3 px-4 py-3 text-white rounded-xl shadow-lg backdrop-blur-sm ${bg}`}
        >
          {/* Icon */}
          {icon}

          {/* Message */}
          <span className="font-medium">{message}</span>

          {/* Close Button */}
          <button onClick={onClose} className="ml-auto hover:opacity-80">
            <X className="w-4 h-4 text-white" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
