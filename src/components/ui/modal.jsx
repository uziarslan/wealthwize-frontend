import React from "react";
import { X } from "lucide-react";
import { Button } from "./button";

export const Modal = ({ isOpen, onClose, title, message, type = "success" }) => {
  if (!isOpen) return null;

  const typeStyles = {
    success: {
      bg: "bg-gradient-to-r from-[#5ce0e5] to-[#2b4fee]",
      icon: "✓",
    },
    error: {
      bg: "bg-gradient-to-r from-red-500 to-red-600",
      icon: "✕",
    },
    info: {
      bg: "bg-gradient-to-r from-blue-500 to-blue-600",
      icon: "ℹ",
    },
  };

  const currentStyle = typeStyles[type] || typeStyles.success;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-300 animate-scaleIn">
        {/* Header with gradient */}
        <div className={`${currentStyle.bg} px-6 py-4 flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl font-bold">
              {currentStyle.icon}
            </div>
            <h3 className="text-xl font-bold text-white [font-family:'Poppins',Helvetica]">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <p className="text-gray-700 text-base [font-family:'Poppins',Helvetica] leading-relaxed">
            {message}
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 flex justify-end gap-3">
          <Button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#5ce0e5] to-[#2b4fee] text-white [font-family:'Poppins',Helvetica] font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Got it!
          </Button>
        </div>
      </div>
    </div>
  );
};

