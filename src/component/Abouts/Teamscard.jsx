import React from "react";
import teamMembers from '../../assets/json/Teammembers.json' 



const TeamsCard = () => {
    return (
        <div className="w-full flex justify-center my-14  ">
            <div className=" grid  md:grid-cols-4 gap-6 p-6">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white md:w-[270px]  w-[380px] border-gray-200 border-[1px] text-center   overflow-hidden">
                        <div className="group relative">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="md:w-[380px] w-[400px] md:h-[230px] h-[300px]  px-4 md:px-0  py-3 md:py-0 mb-4"
                            />
                            <div className="absolute inset-0 bg-[#76BB00] bg-opacity-70 flex flex-col items-center justify-center transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center">
                                <div className="flex space-x-4">
                                    <i className="bg-white border-green-600 border-1   text-[#76BB00] text-lg py-2 px-3 rounded-full shadow-lg cursor-pointer transition duration-300 hover:bg-opacity-80 ri-facebook-fill"></i>
                                    <i className="bg-white border-green-600 border-1 text-[#76BB00] text-lg py-2 px-3 rounded-full shadow-lg cursor-pointer transition duration-300 hover:bg-opacity-80 ri-twitter-fill"></i>
                                    <i className="bg-white border-green-600 border-1 text-[#76BB00] text-lg py-2 px-3 rounded-full shadow-lg cursor-pointer transition duration-300 hover:bg-opacity-80 ri-skype-fill"></i>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-lg font-medium  text-gray-800 mt-2">{member.name}</h3>
                        <p className="text-[#76BB00] mb-2 font-medium">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamsCard;
