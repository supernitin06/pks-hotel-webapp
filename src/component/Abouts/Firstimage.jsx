import React from "react";

function FirstImage({ word }) {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-[1]"></div>

      {/* Text Above Everything */}
      <div className="absolute z-[3] w-full h-full text-[45px] whi text-white  flex justify-center items-center     ">
        <span>
        {word}

        </span>
      </div>

      {/* Image */}
      <img
        className="w-full h-full object-cover bg-center z-0"
        src="https://wp.hostlin.com/nilachol/images/background/1.jpg"
        alt={word}
      />
    </div>
  );
}

export default FirstImage;
