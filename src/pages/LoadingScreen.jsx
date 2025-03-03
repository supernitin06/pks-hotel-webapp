import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="relative flex items-center justify-center w-screen  h-screen">
      {/* Background Image */}
      <div className="absolute inset-0  rounded-full opacity-90">
        <img
          src="https://wp.hostlin.com/nilachol/images/icons/preloader.gif"
          alt="Loading"
          className="w-[300px] h-[300px] mx-auto mt-[300px] rounded-full object-cover"
        />
      </div>

      {/* Rotating Circular Design */}
      <motion.div
        className="relative w-full h-full rounded-full border-[10px] border-transparent"
        style={{
          maskImage:
            "conic-gradient(#d9534f 0% 25%, #5cb85c 25% 50%, transparent 50% 100%)",
          WebkitMaskImage:
            "conic-gradient(#d9534f 0% 25%, #5cb85c 25% 50%, transparent 50% 100%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      ></motion.div>
    </div>
  );
};

export default LoadingScreen;
