import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutsection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="w-full flex justify-center ">
      <section className="container px-6 py-12 md:py-16  ">
        <div className="flex w-full justify-center ">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Section */}
            <div className="w-full lg:w-[500px]">
              <img
                src="https://wp.hostlin.com/nilachol/images/resource/ab.jpg"
                alt="About Nilachol"
                className="w-full"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-[650px] ">
              <h2 className="text-3xl sm:text-4xl font-semibold">
                About <span className="text-[#6FB60B]">Nilachol</span>
              </h2>

              {/* Double Underline */}
              <div className="w-24 sm:w-36 border-b-2 border-[#7dca11] mt-2 mb-1"></div>
                            <div className="w-16 sm:w-24 border-b-2 border-[#7dca11] mb-3"></div>

                            <p className="mt-4 font-semibold    text-gray-700 text-[14px] leading-6">
                                Lorem ipsum dolor sit amet sadipscing detractit salutatus
                                mei. Omnis labor eos ne, scripta facilisi dissentias mel ex, ex vis semper
                                adolescens delicatissimi.
                            </p>

                            <p className="mt-7 text-gray-600 font-light text-[15px] leading-6">
                                Lorem ipsum dolor sit amet, ad vis dicat essent expetenda, an vel
                                dicit choro ani. Sumo repudiare ei pri. Eius intellegat per te. Quando
                                opoportere, quo aeterno definiebas sadipscing ne.ortere, quo aeterno definiebas sadipscing ne.
                                
                            </p>

                            <p className="mt-7 text-gray-600 font-light text-[15px] leading-6">
                                Vis ei erroribus similique. Cum saepe disputationi in. Id mnesarchum per. Ne vix 
                                odio dicit numquam, audiam inermis eu nam. Eius intellegat per te. Quando oportere 
                                odio dicit numquam, audiam inermis eu nam. Eius intellegat per te. Quando oportere 
                                maiestatis qui ut, quo aeterno definiebas sadipscing ne.
                            </p>
                        </div>
                    </div>
                </div>

        {/* Features Section */}
        <div className="flex justify-center">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4   ">
            {[
              {
                title: "Largest Community",
                text: "Lorem ipsum dolor sit amet, et sectetu adipiscing elit, sed do lilae eiusmod at tempor..",
                delay: "0",
              },
              {
                title: "24 Hours Service",
                text: "Lorem ipsum dolor sit amet, et sectetu adipiscing elit, sed do lilae eiusmod at tempor..",
                delay: "300",
              },
              {
                title: "Lifetime Support",
                text: "Lorem ipsum dolor sit amet, et sectetu adipiscing elit, sed do lilae eiusmod at tempor.",
                delay: "600",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={item.delay}
                className="flex items-start gap-4 md:w-[390px]   p-4 "
              >
                <span className="text-white bg-[#76BB00] rounded-full py-2 px-[14px] text-xl mr-2">
                  ✔
                </span>
                <div>
                  <h3 className="text-lg font-medium     ">{item.title}</h3>
                  <p className="text-gray-600 mt-2 font-light   text-[14px] leading-loose   ">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutsection;
