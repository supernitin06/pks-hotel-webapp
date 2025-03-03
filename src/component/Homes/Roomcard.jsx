import React from "react";
import roomData from "../../assets/json/Roomcard.json";
import { Link } from "react-router-dom";

function Roomcard() {
  return (
    <div className="flex flex-col  justify-center gap-8 md:flex-row flex-wrap p-2 ">
      {roomData.map((room, index) => (
        <div
          key={index}
          className="flex flex-col w-full sm:w-[100%] md:w-[370px] md:shadow-[2px_2px_6px_rgba(0,0,0,0.2)] duration-300 group "
        >
        {/* Image section */}
          <div > 
            <a href="#">
              <img
                className="w-full h-auto  object-cover  "
                src={room.image_url}
                alt={room.name}
              />
            </a>
          </div>
          <div className="p-7 bg-white relative overflow-hidden  transition-all duration-500 ">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[#6FB60B] translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>

            <div className="relative z-10">
              
              <Link to="/roomdetail">

                <h3 className="mb-2 text-xl  group-hover:text-white transition-all duration-500">
                  {room.name}
                </h3>
              </Link>

            </div>

            <div className="flex space-x-4 relative z-10">
              <div className="text-[#A1A1A0] text-sm group-hover:text-white transition-all duration-500">
                <span className=" text-lg text-[#6FB60B] group-hover:text-white font-light">
                  $250
                </span>
                <span className="font-light ">
                / Night
                </span>
              </div>

              {/* Vertical Line */}
              <div className="mt-2 h-5 w-[1px] bg-gray-400 group-hover:bg-white transition-all duration-500"></div>

              <div className="mt-1">
                <ul className="flex space-x-0">
                  {[...Array(5)].map((_, index) => (
                    <li
                      key={index}
                      className=""
                    >
                      <i className=" text-[#6FB60B] ri-star-s-fill group-hover:text-white "></i>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Roomcard;
