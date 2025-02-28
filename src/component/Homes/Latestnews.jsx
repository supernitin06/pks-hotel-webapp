import React from 'react'
import Latestcard from './Latestcard'

function Latestnews() {
    return (
        <>
              <div className="py-10  w-full flex flex-col items-center bg-white">
                <span className="text-center text-4xl font-semibold">
                    Latest<span className="text-[#6FB60B]">News</span>
                </span>

                {/* Double Underline */}
                <div className="w-36 border-b-2 border-[#6FB60B] mt-2 mb-[2px]"></div> 
                <div className="w-24 border-b-2 border-[#6FB60B] mb-9"></div> 
          

        
            <Latestcard/>
            </div>
        </>
    )
}

export default Latestnews
