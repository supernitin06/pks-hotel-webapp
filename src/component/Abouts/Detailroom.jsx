import React from 'react'
function Detailroom() {
    return (

        <div className=' flex w-full justify-center items-center flex-col my-20' >
            <div className='px-3 shadow-slate-200 shadow-2xl  relative md:px-0'>
                <img src='https://wp.hostlin.com/nilachol/images/resource/rd.jpg' />
                <div className='absolute w-[120px] h-[120px] bottom-3 py-4  right-3 text-center   bg-[#76BB00]   '>
                    <span className='text-white font-bold text-[20px]   '>Per Night</span>
                    <br />
                    <span className='text-white text-[40px] font-bold'>
                        $150

                    </span>
                </div>
            </div>
            <div className=' w-full md:w-[58%] flex flex-col md:flex-row md:space-x-5  ' >
                {/* main content */}
                <div className='   md:w-[65%] py-10 '>
                    <span className="text-[26px] tracking-tight md:ml-0 ml-3  ">Classic Bed Room</span>

                    {/* Decorative Lines */}
                    <div className="w-20 border-b-[3px] border-[#89c13a] md:ml-0 ml-3 mt-1 mb-4"></div>
                    <div>
                        <div className="space-y-4 text-gray-700 text-[16px] md:px-0 pr-10 md:pr-0 px-3 leading-relaxed">
                            <p>
                                Lorem ipsum dolor sit amet, vix an natum labitur
                                eleifend, mel amet a laorit menandri. Ei justo complectitur duo.
                                Ei mundi solet ut soletu mel possit quo. Sea cu justo laudem.
                                An utinam consulatu eos, est facilis suscipiantur te, vim te iudico
                                delenit voluptatibus. Lorem ipsum dolor sit amet, vix an natum labitur
                                eleifend, mel amet a laorit menandri. Ei justo complectitur duo. Ei mundi
                                solet ut soletu mel possit quo. Sea cu justo laudem. An utinam consulatu eos,
                                est facilis suscipiantur te, vim te iudico delenit voluptatibus. Lorem ipsum
                                dolor sit amet, vix an natum labitur eleifend, mel amet a laorit menandri.
                                Ei justo complectitur duo. Ei mundi solet ut soletu mel possit quo. Sea cu justo
                                laudem. An utinam consulatu eos, est facilis suscipiantur te, vim te iudico delenit voluptatibus.
                            </p>
                            <p>
                                An utinam consulatu eos, est facilis suscipitatur te, vim te iudico delenit voluptatibus.
                                Lorem ipsum dolor sit amet, vix an natum labitur eleifend, mel amet a laorit menandri.
                                Ei justo complectitur duo. Ei mundi solet ut soletu mel possit quo.
                            </p>
                        </div>
                    </div>
                    {/* form */}
                    <div className='pt-14 '>
                        <span className="text-[26px] tracking-tight md:ml-0 ml-3  ">Have Any Questions</span>
                        <div className="w-20 border-b-[3px] border-[#89c13a] md:ml-0 ml-3 mt-1 mb-4"></div>
                        <form className="mt-6">
                            {/* Name & Email Fields */}
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className='pr-8'>
                                    <label className="block text-gray-900 font-medium    mb-4 mt-4  ">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-[#76BB00]"
                                        placeholder=""
                                    />
                                </div>

                                <div className='pr-8 '>
                                    <label className="block text-gray-900 font-medium   mb-4 mt-4  ">Your Email*</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-[#76BB00]"
                                        placeholder=""
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="mb-4 pr-8">
                                <label className="block text-gray-900 font-medium   mb-4 mt-4  ">Your Message</label>
                                <textarea
                                    className="w-full p-3  bg-gray-100  focus:outline-none focus:ring-2 focus:ring-[#76BB00]"
                                    rows="5"
                                    placeholder=""
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button className="bg-[#76BB00] text-white font-semibold px-6 py-3 mt-4  w-full md:w-[260px] hover:bg-black  ">
                                SEND YOUR MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
                {/* line */}
                <div className='  '>
                    <div className='h-screen border-gray-100 mt-24    border-[1px] '>

                    </div>
                </div>
                {/* box */}
                <div className='  md:w-[30%] '>
                    <div class="space-y-6 pt-24  ">
                        <div class="flex items-start space-x-4">
                            <div class="group w-[54px]  h-[54px] border-[#76BB00]  border-[1px] flex items-center justify-center bg-[#76BB00] text-white rounded-full flex-shrink-0 transition-all duration-300 hover:bg-white">
                                <i class="ri-umbrella-line text-xl group-hover:text-[#76BB00]"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold text-lg text-gray-900">Natural Environment</h3>
                                <p class="text-[#6c5f71] text-sm leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="group w-[54px]  h-[54px] border-[#76BB00]  border-[1px]   flex items-center justify-center bg-[#76BB00] text-white rounded-full flex-shrink-0 transition-all duration-300 hover:bg-white">
                                <i class="ri-wifi-line text-xl group-hover:text-[#76BB00]"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold text-lg text-gray-900">High Speed Wifi</h3>
                                <p class="text-[#6c5f71] text-sm leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="group w-[54px]  h-[54px] border-[#76BB00]  border-[1px]  flex items-center justify-center bg-[#76BB00] text-white rounded-full flex-shrink-0 transition-all duration-300 hover:bg-white">
                                <img class="h-6 w-6 filter invert group-hover:filter-none group-hover:text-[#76BB00]" src="https://cdn-icons-png.flaticon.com/128/2454/2454221.png" />
                            </div>
                            <div>
                                <h3 class="font-semibold text-lg text-gray-900">Tasty Restaurant</h3>
                                <p class="text-[#6c5f71] text-sm leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="group w-[54px]  h-[54px] border-[#76BB00]  border-[1px]  flex items-center justify-center bg-[#76BB00] text-white rounded-full flex-shrink-0 transition-all duration-300 hover:bg-white">
                                <img class="h-6 w-6 filter invert group-hover:filter-none group-hover:text-[#76BB00]" src="https://cdn-icons-png.flaticon.com/128/7167/7167411.png" />
                            </div>
                            <div>
                                <h3 class="font-semibold text-lg text-gray-900">Free Car Parking</h3>
                                <p class="text-[#6c5f71] text-sm leading-loose">Lorem ipsum dolor sit amet,  adipiscing elit sed do eiusmod tempor</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Detailroom
