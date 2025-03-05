import React from 'react';
import Testimonial from '../../assets/json/Testtimonial.json';

function Testimon() {
    return (
        <div className="w-full flex justify-center my-14">
            <div className="grid md:grid-cols-3 gap-6 p-6">
                {Testimonial.map((member, index) => (
                    <div key={index} className="bg-white md:w-[374px] w-[380px] border-[#f2f0f0] border-[1px] hover:shadow-xl hover:shadow-gray-200   duration-300  text-center overflow-hidden">
                        <div className='flex items-center flex-col'>
                       <div  className='text-[15px] px-4 font-light py-7 text-[#848484] '>
                        {member.lorem}
                       </div>
                            <div className="">
                                <img
                                    src={member.image}
                                    alt={member.Name}
                                    className=" rounded-full   px-4 md:px-0 py-3 md:py-0 mb-4"
                                />
                            </div>
                            <div>
                                <h3 className="text-[19px] font-bold cursor-pointer mt-[2px]">
                                    {member.Name}
                                </h3>
                            </div>
                            <div>
                                <h3 className="text-[15px] font-semibold text-[#76BB00] pb-10  cursor-pointer mt-[2px]">
                                    {member.country}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimon;
