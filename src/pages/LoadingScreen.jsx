import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90 z-50 text-white">
      {/* Sword Animation */}
      <div className="relative flex justify-center items-center w-screen bg-gray-900">
        <motion.img
          src="https://freepngimg.com/thumb/sword/4-sword-png-image.png"
          alt="Sword"
          initial={{ width: "30px", opacity: 0, y: -50 }}
          animate={{
            width: ["30px", "300px", "30px"], // Size oscillation
            opacity: [0, 1, 0], // Fade in and out
            y: [-50, 0, -50], // Move up and down
            rotate: [0, 360], // Full rotation
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: 10, // Repeats animation 10 times
            repeatType: "loop", // Ensures it loops back smoothly
          }}
          className="absolute"
        />
      </div>

      {/* Dramatic shaking effect */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }
          .animate-shake {
            animation: shake 0.5s infinite;
          }
        `}
      </style>

      {/* Error Message */}
      {showError && (
        <div className="absolute bottom-10 text-yellow-400 text-xl font-bold animate-shake">
          💀 System Crash Imminent 💀
        </div>
      )}
    </div>
  );
}
