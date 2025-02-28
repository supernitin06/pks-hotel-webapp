import React from "react";
import hotel from '../../assets/json/Hotleroom.json';



const Hotelroom = () => {
    return (
        <div className="w-full flex justify-center my-14  ">
            <div className=" grid  md:grid-cols-3 gap-6 p-6">
                {hotel.map((member, index) => (
                    <div key={index} className="bg-white md:w-full  w-[380px] border-gray-200 border-[1px] text-center   overflow-hidden">
                        <div className="group relative">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="md:w-[380px] w-[400px] md:h-[230px] h-[300px]  px-4 md:px-0  py-3 md:py-0 mb-4"
                            />

                        </div>
                        <div className=" w-full items-center flex  flex-col ">
                            <div>
                                <ul className="flex space-x-0">
                                    {[...Array(5)].map((_, index) => (
                                        <li
                                            key={index}
                                            className=""
                                        >
                                            <i className=" text-[#6FB60B] text-xl ri-star-s-fill  "></i>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a href="/roomdetail">

                                <h3 className="text-[19px]  font-bold  cursor-pointer  mt-[2px]">{member.name}</h3>
                            </a>
                            <div className="flex w-full px-4 justify-between items-center my-">
                                <p className="text-[26px] font-bold" >
                                    <span className="text-[30px] font-bold">
                                        $
                                    </span>
                                    {member.price}</p>
                                <p className="text-[#76BB00] underline cursor-pointer underline-offset-4  text-[14px] font-medium">
                                    BOOK NOW
                                </p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hotelroom;
