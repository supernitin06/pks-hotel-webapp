import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function AboutNilachol() {
    const [showVideo, setShowVideo] = useState(false);
    useEffect(() => {
        if (showVideo) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
    
        // Cleanup function to reset overflow on unmount
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [showVideo]);

    return (
        <div className="flex flex-col md:flex-row w-full md:h-[520px] bg-[#1C1C1C] relative">
            {/* Content Section */}
            <div className="flex flex-col  md:px-6 py-20 px-7  md:py-20 justify-center    lg:pl-64   w-full md:w-1/2  text-white">
                {/* Heading */}
                <h5 className="text-3xl font-bold">
                    About <span className="text-[#6FB60B]">Nilachol</span>
                </h5>

                {/* Decorative Lines */}
                <div className="w-28 border-b-[1px] border-[#6FB60B] mt-2"></div>
                <div className="w-16 border-b-[1px] border-[#6FB60B] mt-[2px] mb-6"></div>

                {/* Paragraph */}
                <p className="text-[#848484] leading-[2] text-sm md:pr-36 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                 laboris nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat 
                nulla paria tur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>

                {/* Button Section */}
                <div className="mt-6 ">
                <Link to="/aboutus">

                    <button className="bg-[#6FB60B] text-white px-9 py-3 font-extrabold text-md hover:bg-black transition duration-300">
                        LEARN MORE →
                    </button>
                </Link>
                </div>
            </div>

            {/* Video Section */}
            <div className="relative w-full md:w-1/2 h-80   md:h-auto overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://wp.hostlin.com/nilachol/images/resource/about.jpg"
                    alt="Video Thumbnail"
                />
                {/* Play Button */}
                <button
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 hover:bg-opacity-50 transition-all duration-300"
                >
                    <span className="flex items-center justify-center w-24 h-24  border-2 border-white rounded-full text-white">
                        <i className="ri-play-fill text-3xl"></i>
                    </span>
                </button>
            </div>

            {/* Video Popup Modal */}
            {showVideo && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                onClick={() => setShowVideo(false)}>
                  
                    <div className="relative w-[90%] max-w-3xl bg-black p-4 rounded-lg">
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-2 z-40 right-2 text-white text-3xl font-bold bg-red-600 hover:bg-red-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                        >
                            &times;
                        </button>

                        <div className="relative w-full aspect-video">
                            <iframe
                                className="w-full h-[400px] rounded-lg"
                                src="https://www.youtube.com/embed/P6jvmZafAIo?autoplay=0"
                                title="YouTube video"
                            
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AboutNilachol;
