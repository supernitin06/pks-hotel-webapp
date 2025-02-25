import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Banner.css"; // External CSS for clip-path animation

const slides = [
  {
    image: "https://wp.hostlin.com/nilachol/images/slider/4.jpg",
    heading: "Discover the Beauty of Nature",
    text: "Experience breathtaking landscapes and explore untouched wilderness like never before.",
  },
  {
    image: "https://wp.hostlin.com/nilachol/images/slider/5.jpg",
    heading: "Your Adventure Starts Here",
    text: "Embark on thrilling journeys and create unforgettable memories with every step you take.",
  },
  {
    image: "https://wp.hostlin.com/nilachol/images/slider/6.jpg",
    heading: "Embrace the Great Outdoors",
    text: "Find peace and serenity in nature’s wonders, and reconnect with the world around you.",
  },
];

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1); // Forces reanimation on text change
  }, [activeIndex]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="">

      <div className="relative ">
        <div className="w-full h-full bg-black/40 absolute  z-20 ">

        </div>
        <div className="relative h-[300px] sm:h-[400px] md:h-[540px] lg:h-[740px] overflow-hidden   ">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 w-full h-full ${index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: index === activeIndex ? 1 : 0,
                scale: index === activeIndex ? 1 : 1.4,
              }}
              transition={{ duration: 3 }}
            >
              <div className="relative w-full h-full">
                {Array.from({ length: 10 }).map((_, sliceIndex) => (
                  <div
                    key={`${animationKey}-${sliceIndex}`}
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center image-cut bg-black/50"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      animationDelay: `${550 + sliceIndex * 50}ms`,
                    }}
                  ></div>

                ))}
              </div>
              <motion.div
                key={animationKey}
                className="absolute top-52    w-full left-10 sm:left-32  md:left-48   transform -translate-y-1/2 text-white z-20 max-w-lg motion-translate-x-in-[200%] motion-translate-y-in-[6%]"
                initial={{ opacity: 0, x: 400, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                <h2 className="text-2xl sm:text-4xl md:text-[50px] font-extrabold mb-4 ">
                  <h2 className="whitespace-nowrap mb-7">Travel Brings Power &amp; Love </h2>
                  <span>back To your Life</span>
                </h2>

                <p className="text-sm sm:text-lg mb-6">{slide.text}</p>
                <div className="flex space-x-4">
                  <button className="px-9 py-3 bg-[#77BA00] border-2 border-[#77BA00]  hover:bg-transparent  font-semibold rounded-3xl  transition">
                    Learn More
                  </button>
                  <button className="px-9 py-3 bg-transparent border-[#77BA00] border-2  hover:bg-[#77BA00]  font-semibold rounded-3xl   transition">
                    Get Started
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="absolute md:top-[70vh] top-[450px] opacity-5  left-0 md:left-4 z-30 transform -translate-y-1/2 flex items-center justify-center p-6 cursor-pointer group focus:outline-none md:opacity-60"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/30 group-hover:bg-[#77BA00] text-xl sm:text-2xl text-black shadow-md">
          ❮
        </span>
      </button>

      <button
        type="button"
        className="absolute md:top-[70vh] top-[450px] opacity-5 right-0 z-30 transform -translate-y-1/2 flex items-center justify-center p-6 cursor-pointer group focus:outline-none md:opacity-60"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/50 group-hover:bg-[#77BA00] text-xl sm:text-2xl text-black shadow-md">
          ❯
        </span>
      </button>

    </div>
  );
}

export default Banner;
