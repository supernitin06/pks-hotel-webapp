import React from 'react';
import Ourservicecard from './Ourservicecard';

function Ourservice() {
    return (
        <>
            {/* Heading Section */}
            <div className="py-16 w-full flex flex-col items-center bg-[#F7F7F7]">
                <span className="text-center text-4xl ">
                    Our <span className="text-[#6FB60B]">Services</span>
                </span>

                {/* Double Underline */}
                <div className="w-36 border-b-2 border-[#6FB60B] mt-2 mb-[2px]"></div> 
                <div className="w-24 border-b-2 border-[#6FB60B] mb-9"></div> 
          

            {/* Service Cards Grid */}
            <div className="flex flex-wrap justify-center      ">
                <Ourservicecard />
            </div>
            
            </div>
        </>
    );
}

export default Ourservice;
