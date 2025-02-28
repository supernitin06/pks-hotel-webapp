import React from 'react';
import Roomcard from './Roomcard';

function Roomsuit() {
    return (
        <div className="py-16    w-full flex flex-col items-center">
            {/* Centered Heading with Styled "Suites" */}
            <span className="text-center text-[38px]  font-medium    ">
                Room & <span className="text-[#6FB60B]">Suites</span>
            </span>
            
            {/* Double Underline */}
            <div className="w-36 border-b-2 border-[#6FB60B] mt-2 mb-[2px]"></div> 
            <div className="w-24 border-b-2 border-[#6FB60B] mb-9  "></div> 

            <Roomcard />
        </div>
    );
}

export default Roomsuit;
