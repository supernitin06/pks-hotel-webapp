import React from 'react'

function Contactus() {
    return (
        <>
            <div className='flex w-full justify-center flex-col md:flex-row space-x-7'>
                <div className=' w-full md:w-[38%]  ml-5 md:ml-0 flex flex-col md:flex-row justify-center  md:space-x-5 h-auto  ' >
                    <div className=" w-full  bg-white mt-20 ">
                        {/* Header */}
                        <h2 className="text-4xl font-medium  text-gray-900 mb-4">
                            Contact <span className="text-[#76BB00]">Us</span>
                        </h2>
                        <div className="w-32  border-b-[2px] border-[#76BB00] mb-[2px]"></div>
                        <div className="w-16 border-b-2  border-[#76BB00] mb-6"></div>

                        {/* Form */}
                        <form className="space-y-4">
                            {/* Name and Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="w-full border border-gray-100 p-3  focus:border-gray-400 outline-none"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Mail *"
                                    className="w-full border border-gray-100 p-3  focus:border-gray-400 outline-none"
                               
                                    required
                                />
                            </div>

                            {/* Phone and Subject */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full border border-gray-100 p-3  focus:border-gray-400 outline-none"
                              
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full border border-gray-100 p-3  focus:border-gray-400 outline-none"
                                
                                    required

                                />
                            </div>

                            {/* Message */}
                            <textarea
                                placeholder="Your Message..."
                                className="w-full border border-gray-100 p-3  focus:border-gray-400 outline-none"></textarea>

                            {/* Button */}
                            <button
                                type="submit"
                                className="hover:bg-black text-white font-bold py-3 px-7 rounded-full bg-[#76BB00] transition"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
                {/* ADress part */}
                <div className=' w-[350px] md:w-[19%]   md:mr-0 flex flex-col md:flex-row justify-center  md:space-x-5  h-[600px]  ' >
                    <div className=" mx-auto pt-20  ">
                        {/* Heading */}
                        <h2 className="text-4xl font-medium mb-4">
                            Our <span className="text-[#76BB00]">Address</span>
                        </h2>
                        <div className="w-28   border-b-[2px] border-[#76BB00] mb-[2px]"></div>
                        <div className="w-16 border-b-2  border-[#76BB00] mb-6"></div>

                        {/* Description */}
                        <p className="text-[#9CA2C0] text-[15px] font-light mb-4">
                            Lorem ipsum dolor sit amet, vix an natum labitur eleifend, mel amet a laorit menandri.
                        </p>

                        {/* Address */}
                        <div className='mt-5 border-b-2 border-gray-200  '>

                            <div className="flex items-start gap-3 mb-4  ">
                                <i class="text-[#76BB00] text-2xl ri-map-pin-fill"></i>
                                <div>
                                    <p className="font-semibold text-[16px]">Address:</p>
                                    <p className="text-gray-500">121 Rain St, Melbourne 3000, Australia.</p>
                                </div>
                            </div>
                        </div>

                        {/* Call Us */}
                        <div className='mt-5 border-b-2 border-gray-200 '>

                            <div className="flex items-start gap-3 mb-4">
                                <i class="text-[#76BB00] text-2xl ri-phone-fill"></i>
                                <div>
                                    <p className="font-semibold">Call Us:</p>
                                    <p className="text-gray-500">+222 4444 88 999</p>
                                </div>
                            </div>
                        </div>
                        {/* Mail Us */}
                        <div className='mt-5  '>
                            <div className="flex items-start gap-3">
                                <i class=" text-[#76BB00] text-2xl ri-mail-fill"></i>
                                <div>
                                    <p className="font-semibold">Mail Us:</p>
                                    <p className="text-gray-500">Yourmail@info.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus
