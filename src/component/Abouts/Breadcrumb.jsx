import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ link1, link2, finalItem, col1, col2, col3 }) => {
  return (
    <div className="flex items-center justify-center ml-3  md:px-10 py-3 border-b lg:px-32  border-gray-200 max-w-full md:mx-auto">
      <div className="w-[1180px]  flex flex-row justify-between items-center">
        {/* Breadcrumb Navigation */}
        <nav className="text-[16px] flex items-center">
          {link1 && (
            <>
              <Link to={link1.path} className={`text-[${col1}]`}>
                {link1.name}
              </Link>
              {link2 || finalItem ? <span className="mx-2 text-gray-900 text-xl">&gt;</span> : null}
            </>
          )}

          {link2 && (
            <>
              <Link to={link2.path} className={`text-[${col2}]`}>
                {link2.name}
              </Link>
              {finalItem ? <span className="mx-2 text-gray-500">&gt;</span> : null}
            </>
          )}

          {finalItem && <span className={`text-[${col3}] font-medium`}>{finalItem}</span>}
        </nav>

        {/* Share Button */}
        <button className="hidden md:flex items-center text-lg border-x-2 px-4">
          <i className="text-black ri-share-forward-fill"></i>
          <span className="ml-2 text-[#76BB00]">Share</span>
        </button>
      </div>
    </div>
  );
};

export default Breadcrumb;
