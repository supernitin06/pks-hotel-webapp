import React from 'react';

export default function Footer() {
    return (
        <footer
            className=" text-center text-white lg:text-left  font-sans relative   ">


            <div
                className="flex items-center justify-center   flex-wrap border-neutral-200  bg-[#6FB60B] lg:justify-around  py-5 md:py-7 lg: px-48  ">
                <div className="  text-[30px] font-[700] pb-8  text-nowrap  font-poppins md:mr-[250px] md:pb-0 ">
                    <span>Subscirbe Newsletter!</span>
                </div>
                <div>
                    <button className="bg-[#6FB60B] text-white rounded-3xl px-9 font-bold  md:py-2.5 hover:bg-black transition duration-300 border-[2px]  focus:ring-2 focus:ring-white focus:outline-none">
                        SUBSCRIBE NOW
                    </button>

                </div>
            </div>




            {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}

            <div className="   text-left  bg-[url('https://wp.hostlin.com/nilachol/images/background/6.jpg')]  bg-no-repeat bg-left bg-cover   ">


                <div className="grid-1 grid space-x-8   md:grid-cols-2 lg:grid-cols-4 px-5 py-24   md:px-[370px] md:py-[50px] z-20  bg-black bg-black/80 ">
                    {/* <!-- TW Elements section --> */}
                    <div className=" md:py-5  ">
                        <img className='z-30 cursor-pointer ' src='https://wp.hostlin.com/nilachol/images/logo/logo2.png'></img>
                        <p className="text-neutral-600 dark:text-neutral-200 mt-7">
                            23/223 Apple Street, New York <br />
                            Phone: +123-456-7890 <br />
                            <a href="mailto:Mail@Nilacholteam.com">Mail@Nilacholteam.com</a>
                        </p>
                        {/* SOCIAL iCON */}
                        <div className="flex justify-start mt-8 z-40">
                            <a className="mr-6 text-neutral-600 dark:text-neutral-200 hover:text-[#6FB60B] cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a className="mr-6 text-neutral-600 dark:text-neutral-200 hover:text-[#6FB60B] cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a className="mr-6 text-neutral-600 dark:text-neutral-200 hover:text-[#6FB60B] cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                            <a className="text-neutral-600 dark:text-neutral-200 hover:text-[#6FB60B] cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>


                    {/* <!-- Useful links section --> */}
                    {/* <!-- Useful links section --> */}
                    <div className=" md: mt-3  ">
                        <h6 className="mb-4 flex font-semibold text-xl underline underline-offset-[16px]  decoration-[#6FB60B]  decoration-[1px] justify-start">
                            Our Services
                        </h6>
                        <p className="mb-2 mt-[30px] ">
                            <a className="text-neutral-600 cursor-pointer hover:text-[#6fb60b] dark:text-neutral-200">Bedroom</a>
                        </p>
                        <p className="mb-2">
                            <a className="text-neutral-600 cursor-pointer hover:text-[#6fb60b] dark:text-neutral-200">Parking</a>
                        </p>
                        <p className="mb-2">
                            <a className="text-neutral-600 cursor-pointer hover:text-[#6fb60b] dark:text-neutral-200">Bathroom</a>
                        </p>
                        <p className="mb-2">
                            <a className="text-neutral-600 cursor-pointer hover:text-[#6fb60b] dark:text-neutral-200">Swimming Pool</a>
                        </p>
                        <p>
                            <a className="text-neutral-600 cursor-pointer hover:text-[#6fb60b] dark:text-neutral-200">Restaurant</a>
                        </p>
                    </div>

                    {/* <!-- Products section --> */}

                    <div className=" md: mt-3 ">
                        <h6 className="mb-4 flex font-semibold text-xl underline underline-offset-[16px]  decoration-[#6FB60B] decoration-[1px]  justify-start">
                            Quick Links
                        </h6>
                        <p className="mb-2 mt-[30px] ">
                            <a className="text-neutral-600 cursor-pointer hover:text-[#6fb60b] dark:text-neutral-200">About</a>
                        </p>
                        <p className="mb-2">
                            <a className="text-neutral-600 cursor-pointer hover:text-[#6fb60b] dark:text-neutral-200">Contact</a>
                        </p>
                        <p className="mb-2">
                            <a className="text-neutral-600 cursor-pointer hover:text-[#6fb60b] dark:text-neutral-200">Team</a>
                        </p>
                        <p className="mb-2">
                            <a className="text-neutral-600 cursor-pointer hover:text-[#6fb60b] dark:text-neutral-200">Service</a>
                        </p>
                        <p>
                            <a className="text-neutral-600 cursor-pointer hover:text-[#6fb60b] dark:text-neutral-200">Blog</a>
                        </p>
                    </div>


                    {/* <!-- IMAGE section --> */}
                    <div className=" md: mt-3  ">
                        <h6 className="mb-4 flex font-semibold text-xl underline underline-offset-[16px]   decoration-[#6FB60B]   decoration-[1px] justify-start">
                            Instagram
                        </h6>
                        <div className='flex flex-row space-x-1  '>

                            <div className='mt-[30px] relative   '>
                                <img src='https://wp.hostlin.com/nilachol/images/resource/i1.jpg'></img>
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                            </div>
                            <div className='mt-[30px] relative   '>
                                <img className='hover:bg-black/30' src='https://wp.hostlin.com/nilachol/images/resource/i2.jpg'></img>
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                            </div>
                            <div className='mt-[30px] relative   '>
                                <img src='https://wp.hostlin.com/nilachol/images/resource/i3.jpg'></img>
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!--Copyright section--> */}
            <div className=" p-6 text-center bg-black ">
                <span className='text-gray-500 text-sm '  >Copyrights © 2018 All Rights Reserved by </span>
                <a
                    className="font-semibold text-[#6FB60B]"
                    href="https://tw-elements.com/"
                >Nilachol.</a>
            </div>
        </footer>
    );
}