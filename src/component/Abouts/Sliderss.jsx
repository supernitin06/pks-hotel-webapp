import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import testimonials from '../../assets/json/Sliderimages.json'
const Sliderss = () => {

    return (
        <div className="relative w-full h-[500px] flex justify-center items-center ">
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/* Swiper Card Container */}
            <div className="relative md:w-[60%] w-[85%] ">
                <Swiper
                    modules={[Pagination, Autoplay]} // Ensure Autoplay module is included
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    speed={1000} // Smooth transition duration (1000ms = 1 sec)
                    className="overflow-hidden transition-all ease-in-out"
                >

                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide className="pb-10 cursor-pointer " key={index}>
                            <div className="flex flex-col items-center justify-center text-center  mb-8">
                                {/* Profile Image */}
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110"
                                />

                                {/* Name & Designation */}
                                <h3 className="text-white text-md font-semibold mt-4 mb-1 drop-shadow-lg">
                                    {testimonial.name}
                                </h3>
                                <p className="text-green-300  font-light text-sm drop-shadow-md">
                                    {testimonial.designation}
                                </p>

                                {/* Quote */}
                                <p className="text-white text-sm font-medium leading-relaxed mt-4 italic w-full md:w-[700px] drop-shadow-lg">
                                    {testimonial.quote}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom CSS for green pagination bullets & smooth transition */}
                <style jsx>{`
                    .swiper-pagination-bullet {
                        background-color: green !important;
                        opacity: 0.8;
                    }
                    .swiper-pagination-bullet-active {
                        background-color: limegreen !important;
                        transform: scale(1.2);
                    }
                    /* Smooth transition effect */
                    .swiper-wrapper {
                        transition-timing-function: ease-in-out !important;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Sliderss;
