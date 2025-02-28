import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {  FaChevronLeft, FaChevronRight } from "react-icons/fa";
import teamMembers from '../../assets/json/Teamslider.json';

const Teamslider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (!swiperInstance) return;

    const interval = setInterval(() => {
      swiperInstance.slideNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [swiperInstance]);

  return (
    <div className="w-full bg-white">
      <div className="w-full flex flex-col items-center pt-20">
        <h2 className="text-3xl sm:text-4xl font-[500] text-shadow-lg">
          Meet <span className="text-[#6FB60B]">Our Team</span>
        </h2>


        <div className="w-24 sm:w-36 border-b-2 border-[#7dca11] mt-1 mb-[2px]"></div>
        <div className="w-16 sm:w-24 border-b-2 border-[#7dca11] mb-3"></div>
      </div>


      <div className="w-full flex flex-col items-center  py-10">
        <div className="w-full max-w-6xl">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            loop={true}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            grabCursor={true}
            speed={400}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onSwiper={setSwiperInstance}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="bg-white shadow-lg group text-center border border-gray-200 transition-transform duration-1000">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full md:h-[230px] h-[300px] md:object-cover px-4 md:px-0 py-3 md:py-0 mb-4"
                  />
                  <div className="absolute inset-0 bg-[#76BB00] bg-opacity-70 flex flex-col items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <div className="flex space-x-4">
                      <i class=" absolute top-24  right-[155px] bg-white text-[#76BB00] text-lg py-2 px-3 rounded-full shadow-lg cursor-pointer transition duration-300 hover:bg-opacity-80 ri-facebook-fill"></i>
                      <i class="absolute top-24 right-[107px] mr-3 bg-white text-[#76BB00] text-lg py-2 px-3 rounded-full shadow-lg cursor-pointer transition duration-300 hover:bg-opacity-80 ri-twitter-fill"></i>
                      <i class=" absolute top-24 right-[59px] bg-white text-[#76BB00] text-lg py-2 px-3 rounded-full shadow-lg cursor-pointer transition duration-300 hover:bg-opacity-80 ri-skype-fill"></i>
                    </div>
                  </div>
                </div>
                <h3 className="text-black text-lg font-medium ">{member.name}</h3>
                <p className="text-[#76BB00] text-sm font-medium mt-2 mb-3">{member.designation}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons Below the Images */}
          <div className="relative flex mt-9 mb-9 ">
            <button className="custom-prev bg-white  ml-[140px] md:ml-[530px] border border-gray-200 text-gray-400 p-3 rounded-full    transition-all duration-300 hover:bg-[#76BB00] hover:text-white flex items-center justify-center">
              <FaChevronLeft className="text-lg" />
            </button>
            <button className="custom-next bg-white  border border-gray-200 text-gray-400 p-3 rounded-full transition-all duration-300 hover:bg-[#76BB00] hover:text-white flex items-center justify-center ml-4">
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teamslider;
