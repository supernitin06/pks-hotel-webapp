import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    icon: "https://cdn-icons-png.flaticon.com/128/1794/1794767.png",
    number: 1382,
    sign: "+",
    text: "Happy Clients",
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/128/2933/2933356.png",
    number: 289,
    text: "Awards Winning",
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/128/2352/2352167.png",
    number: 754,
    text: "Our Staff",
  },
  {
    id: 4,
    icon: "https://cdn-icons-png.flaticon.com/128/78/78846.png",
    number: 3650,
    sign:"+",
    text: "Cup of Coffee",
  },
];

const Numbercounter = () => {
  return (
    <div className=" bg-black/70 py-20  " >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img
              src={item.icon}
              alt={item.text}
              className="w-14 h-14 mb-4 filter invert brightness-0"
            />
            <h2 className="text-4xl font-bold text-[#77BA00]">
              <CountUp start={0} end={item.number} duration={2.5} />
              <span className="font-extrabold ">

              {item?.sign} 
              </span>
            </h2>
            <p className="text-lg font-[800] ">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbercounter;
