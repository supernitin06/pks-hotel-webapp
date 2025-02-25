import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({
    home: false,
    about: false,
    services: false,
    pages: false,
    news: false,
    contact: false,
  });

  const toggleDropdown = (key) => {
    setOpenSubMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Close submenus when navigating to a new page
  useEffect(() => {
    setOpenSubMenus({
      home: false,
      about: false,
      services: false,
      pages: false,
      news: false,
      contact: false,
    });
    setMenuOpen(false); // Close the mobile menu as well
  }, [location.pathname]);

  const navItems = ["HOME", "ABOUT", "SERVICES", "PAGES", "NEWS", "CONTACT"];
  const pageSub = ["Gallery box", "404 page"];
  const aboutSub = ["About Us", "Team", "Rooms", "Room Detail", "Testimonial"];
  const subMenus = {
    HOME: [],
    ABOUT: aboutSub,
    SERVICES: [],
    PAGES: pageSub,
    NEWS: [],
    CONTACT: [],
  };

  return (
    <nav className="bg-white text-black font-bold shadow md:py-4 px-4 py-3 w-full sticky top-0 z-50 flex md:justify-center">
      {/* Mobile View */}
      <div className="md:hidden  ">
        <div className="hidden">
          <img
            src="https://wp.hostlin.com/nilachol/images/logo/logo.png"
            alt="Logo"
            className="h-13 relative"
          />
        </div>

        <div className="flex space-x-36     items-center mt-4 bg-slate-50 mr-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center focus:outline-none h-10 ml-2 text-3xl text-[#77BA00] font-bold"
          >
            ☰
          </button>
          <button className="px-9 py-3 bg-[#77BA00] text-white hover:bg-black rounded-3xl">
            Appointment
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 space-y-2 bg-black px-4 py-2">
            {navItems.map((item) => {
              const isActive =
                location.pathname.includes(item.toLowerCase()) ||
                (subMenus[item] &&
                  subMenus[item].some((subItem) =>
                    location.pathname.includes(subItem.toLowerCase())
                  ));

              return (
                <div key={item}>
                  <div className="border-b border-gray-400 pb-2 flex justify-between items-center">
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)} // Close menu on navigation
                      className={`text-white font-bold capitalize cursor-pointer ${isActive ? "text-green-400" : "hover:text-blue-400"
                        }`}
                    >
                      {item}
                    </NavLink>
                    {subMenus[item].length > 0 && (
                      <button
                        onClick={() => toggleDropdown(item)}
                        className="text-white focus:outline-none"
                      >
                        {openSubMenus[item] ? "▲" : "▼"}
                      </button>
                    )}
                  </div>

                  {openSubMenus[item] && subMenus[item].length > 0 && (
                    <div className="ml-4 mt-2 space-y-2 border border-gray-400 rounded-md p-2 transition-all duration-300 ease-in-out">
                      {subMenus[item].map((subItem) => (
                        <NavLink
                          key={subItem}
                          to={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`block text-white font-bold capitalize transition-colors duration-200 ${location.pathname.includes(
                            subItem.toLowerCase().replace(/\s+/g, "-")
                          )
                            ? "text-green-400"
                            : "hover:text-blue-400"
                            }`}
                        >
                          {subItem}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex w-[1200px] items-center justify-between   ">
        <div className="flex items-center ">
          <img
            src="https://wp.hostlin.com/nilachol/images/logo/logo.png"
            alt="Logo"
            className="h-[7vh] w-auto max-w-[20vw] object-contain"
          />

        </div>

        <div className="flex items-center py-2  ">
          <div className="flex items-center space-x-9   md:ml-11">
            {navItems.map((item) => {
              const isActive =
                location.pathname.includes(item.toLowerCase()) ||
                (subMenus[item] &&
                  subMenus[item].some((subItem) =>
                    location.pathname.includes(subItem.toLowerCase())
                  ));

              return (
                <div key={item} className="relative group ">
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={`text-[16px] font-bold capitalize cursor-pointer py-8 ${isActive ? "text-[#77BA00]" : "hover:text-blue-400"
                      }`}
                  >
                    {item}
                  </NavLink>

                  {subMenus[item].length > 0 && (
                    <div className="absolute left-0 top-[60px] bg-gray-700 w-[200px] transition-all duration-300 ease-out transform opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible">
                      {subMenus[item].map((subItem) => (
                        <NavLink
                          key={subItem}
                          to={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`block text-white text-[17px] font-bold capitalize border-b-2 border-black px-2 py-1 ${location.pathname.includes(
                            subItem.toLowerCase().replace(/\s+/g, "-")
                          )
                            ? "text-[#6FB60B]"
                            : "hover:text-blue-400"
                            }`}
                        >
                          {subItem}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="ml-9   ">
            <button className="px-7 py-3 font-bold  text-white bg-[#77BA00] hover:bg-black  rounded-[30px]   text-xl ">
              Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
