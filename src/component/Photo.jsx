import React from 'react'
import { Photocard } from './Photocard'

function Photo() {
    return (
        <div className="py-16    w-full flex flex-col items-center">
            {/* Centered Heading with Styled "Suites" */}
            <span className="text-center text-4xl   font-semibold">
                Photo <span className="text-[#6FB60B]">Gallery</span>
            </span>
            
            {/* Double Underline */}
            <div className="w-36 border-b-2 border-[#6FB60B] mt-2 mb-[2px]"></div> 
            <div className="w-24 border-b-2 border-[#6FB60B] mb-9  "></div> 

            <Photocard/>
        </div>
    )
}

export default Photo
