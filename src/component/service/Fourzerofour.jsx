import React from "react";

const Fouzerofour = () => {
  return (
    <div className="flex flex-col items-center mt-16 h-[680px] bg-white text-center ">
      <h1 className="text-[200px]  font-extrabold   text-[#76BB00]">404</h1>
      <h2 className="text-[40px] font-medium ">Opps!! Looks like something went wrong</h2>
      <p className="text-gray-900 mt-4 ">
        The page you are looking for was moved, removed, renamed, or might never have existed.
      </p>

      {/* Responsive Container for Button and Search */}
      <div className="mt-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-[500px]">
        <button className="bg-[#76BB00] text-white px-8 text-[13px] py-3 rounded-3xl font-semibold hover:bg-black transition w-full md:w-auto">
          GO HOME
        </button>
       
        <div className="text-xl">
            or
        </div>
        <div>

          <input
            type="text"
            placeholder="Search..."
            className="border-2 border-[#76BB00] focus:border-[#76BB00] focus:ring-0  focus:ring-[#76BB00] focus:outline-none   rounded-3xl px-4 py-3  w-[300px]"
          />
          <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
        </div>
        </div>
      </div>
 
  );
};

export default Fouzerofour;
