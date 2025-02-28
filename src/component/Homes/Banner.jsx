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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Cleanup to prevent memory leaks
  }, [activeIndex]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group">
      <div className="relative">
        <div className="w-full h-full bg-black/60 absolute z-20"></div>
        <div className="relative h-[300px] sm:h-[400px] md:h-[540px] lg:h-[740px] overflow-hidden">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 w-full h-full ${
                index === activeIndex ? "opacity-100" : "opacity-0"
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
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center image-cut"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      animationDelay: `${550 + sliceIndex * 50}ms`,
                    }}
                  ></div>
                ))}
              </div>
              <motion.div
                key={animationKey}
                className="absolute md:top-52 top-14 w-full left-10 sm:left-32 md:left-48 lg:left-96 transform -translate-y-1/2 text-white z-20 max-w-lg motion-translate-x-in-[200%] motion-translate-y-in-[6%]"
                initial={{ opacity: 0, x: 400, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                <h2 className=" sm:text-4xl md:text-[50px] font-[1000] md:mb-4">
                  <h2 className="whitespace-nowrap font-extrabold text-[20px] md:text-[55px] md:mb-7">
                    Travel Brings Power &amp; Love
                  </h2>
                  <h2 className="font-extrabold md:text-[55px] text-[20px] ">
                    back To your Life
                  </h2>
                </h2>

                <p className="lg:text-md  sm:text-lg mb-6">
                <span className="whitespace-nowrap text-[10px]  md:text-[21px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                  <br/>
                  <span className=" text-[10px] md:text-[21px]">
                  Nunc sagittis, urna nec semper pharetra.
                  </span>
                </p>
                <div className="flex space-x-4">
                  <button className="lg:px-9 lg:py-3 text-[9px] py-1 px-5 lg:text-[15px]  bg-[#77BA00] border-[#77BA00] text-white border-2 hover:bg-transparent hover:text-[#77BA00] font-semibold rounded-3xl transition">
                    ABOUT US
                  </button>
                  <button className="lg:px-9 lg:py-3 text-[9px] py-1 px-5 lg:text-[15px] bg-transparent text-[#77BA00] border-[#77BA00] border-2 hover:bg-[#77BA00] hover:text-white font-semibold rounded-3xl transition">
                    CONTACT US
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="absolute hidden lg:pt-[180px] top-[450px] opacity-5 left-0 md:left-4 z-30 transform -translate-y-1/2 group-hover:block items-center justify-center p-6 cursor-pointer focus:outline-none md:opacity-60"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/10 hover:bg-[#77BA00] text-xl sm:text-2xl text-white shadow-md">
          ❮
        </span>
      </button>

      <button
        type="button"
        className="absolute hidden lg:pt-[180px]  top-[450px] opacity-5 right-0 z-30 transform -translate-y-1/2 group-hover:block items-center justify-center p-6 cursor-pointer group focus:outline-none md:opacity-60"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/10 hover:bg-[#77BA00] text-xl sm:text-2xl text-white shadow-md">
          ❯
        </span>
      </button>
    </div>
  );
}

export default Banner;
