import React from 'react';
import service from '../../assets/json/Ourservice.json';

function Ourservicecard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-8   items-center  ">
            {service.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-3 group w-full md:w-80">
                    {/* Icon with Green Background and Hover Effect */}
                    <div className="w-[70px] h-[70px] flex items-center justify-center bg-[#93c73a] rounded-full transition-all duration-300 group-hover:bg-white border border-[#77BA00]">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-11 h-11 transition-all duration-300 filter invert drop-shadow-[0_0_0_white] group-hover:brightness-0 group-hover:drop-shadow-[#77BA00]"
                        />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>

                    {/* Description */}
                    <p className="text-[#9B9A9A] text-[13px] font-semibold text-center leading-relaxed cursor-pointer">
                        Lorem ipsum dolor sit amet, consectetur 
                        <span> adipiscing elit. Nunc sagittis urna nec semper</span>  pharetra, 
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Ourservicecard;
