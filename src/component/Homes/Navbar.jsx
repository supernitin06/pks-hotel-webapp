import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({
    about: false,
    pages: false,
  });

  const toggleDropdown = (key) => {
    setOpenSubMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    setOpenSubMenus({ about: false, pages: false });
    setMenuOpen(false);
  }, [location.pathname]);

  const isActiveParent = (paths) => {
    return paths.some((path) => location.pathname.includes(path));
  }
  return (
    <nav className="bg-white text-black font-bold shadow  md:px-4 px-1  w-full sticky top-0 z-50 flex md:justify-center">
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex space-x-48    items-center mt-2 py-2 bg-slate-100 ">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-[#77BA00] font-bold"
          >
            ☰
          </button>
          <button className="px-7 py-3   text-[15px] bg-[#77BA00] text-white hover:bg-black rounded-3xl">
            APPOINTMENT
          </button>
        </div>

        {menuOpen && (
          <ul className="mt-4 space-y-2 bg-black px-4 py-2">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-white font-bold hover:text-blue-400"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <button
                className={`text-white font-bold ${isActiveParent(["/aboutus", "/team"]) ? "text-red-500" : "hover:text-blue-400"
                  }`}
                onClick={() => toggleDropdown("about")}
              >
                ABOUT ▼
              </button>
              {openSubMenus.about && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <NavLink
                      to="/aboutus"
                      className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white hover:text-blue-400"
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/team"
                      className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white hover:text-blue-400"
                      }
                    >
                      Team
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-white font-bold hover:text-blue-400"
                }
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <button
                className={`text-white font-bold ${isActiveParent(["/gallery-box", "/404"]) ? "text-red-500" : "hover:text-blue-400"
                  }`}
                onClick={() => toggleDropdown("pages")}
              >
                PAGES ▼
              </button>
              {openSubMenus.pages && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <NavLink
                      to="/gallery-box"
                      className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white hover:text-blue-400"
                      }
                    >
                      Gallery Box
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/404"
                      className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white hover:text-blue-400"
                      }
                    >
                      404 Page
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-white font-bold hover:text-blue-400"
                }
              >
                NEWS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-white font-bold hover:text-blue-400"
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        )}
      </div>

      {/* Desktop View */}
      {/* Desktop View */}
      {/* Desktop View */}
      {/* Desktop View */}
      <div className="hidden md:flex lg:w-[1200px]  items-center justify-between">
        <div className="flex items-center">
          <img src="https://wp.hostlin.com/nilachol/images/logo/logo.png" alt="Logo" className="h-[50px] w-full  my-6 " />
        </div>

        <ul className="flex items-center space-x-9 md:ml-11">
          <li className=" py-7  ">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-[#76BB00]" : "text-black hover:text-[#76BB00]"
              }
            >
              HOME
            </NavLink>
          </li>



          <li className="relative group py-7">
            <span
              className={`cursor-pointer  ${isActiveParent(["/aboutus", "/team", "/rooms", "/roomdetail", "/testimonial"])
                  ? "text-[#76BB00]"
                  : "text-black hover:text-[#76BB00]"
                }`}
            >
              ABOUT
            </span>
            <ul className="absolute  border-black  left-[-10px] top-20 bg-[#333333] w-[220px] transition-all duration-300 ease-out transform opacity-0 scale-y-0 origin-top invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible">
              <li className="pl-4 font-light py-2  border-b-[1px] border-[#252525] ">
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) => (isActive ? "text-[#76BB00]" : "text-white hover:text-[#76BB00]")}
                >
                  About Us
                </NavLink>
              </li>
              <li className="pl-4 font-light py-2  border-b-[1px] border-[#252525] ">
                <NavLink
                  to="/team"
                  className={({ isActive }) => (isActive ? "text-[#76BB00]" : "text-white hover:text-[#76BB00]")}
                >
                  Team
                </NavLink>
              </li>
              <li className="pl-4 font-light py-2  border-b-[1px] border-[#252525] ">
                <NavLink
                  to="/rooms"
                  className={({ isActive }) => (isActive ? "text-[#76BB00]" : "text-white hover:text-[#76BB00]")}
                >
                  Rooms
                </NavLink>
              </li>
              <li className="pl-4 font-light py-2  border-b-[1px] border-[#252525] ">
                <NavLink
                  to="/roomdetail"
                  className={({ isActive }) => (isActive ? "text-[#76BB00]" : "text-white hover:text-[#76BB00]")}
                >
                  Room Details
                </NavLink>
              </li>
              <li className="pl-4 font-light py-2  border-b-[1px] border-[#252525] ">
                <NavLink
                  to="/testimonial"
                  className={({ isActive }) => (isActive ? "text-[#76BB00]" : "text-white hover:text-[#76BB00]")}
                >
                  Testimonial
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-[#76BB00]" : "text-black hover:text-[#76BB00]"
              }
            >
              SERVICES
            </NavLink>
          </li>
          <li className="relative group  py-7 ">
            <span
              className={`cursor-pointer ${isActiveParent(["/gallery-box", "/404-page"]) ? "text-[#76BB00]" : "text-black hover:text-[#76BB00]"
                }`}
            >
              PAGES
            </span>
            <ul className="absolute  border-black  left-[-10px] top-20 bg-[#333333] w-[220px] transition-all duration-300 ease-out transform opacity-0 scale-y-0 origin-top invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible">
            <li className="pl-4 font-light py-2  border-b-[1px] border-[#252525] ">
                <NavLink
                  to="/gallery-box"
                  className={({ isActive }) => (isActive ? "text-[#76BB00]" : "text-white hover:text-[#76BB00]")}
                >
                  Gallery Box
                </NavLink>
              </li>
              <li className="pl-4 font-light py-2  border-b-[1px] border-[#252525] ">
                <NavLink
                  to="/404-page"
                  className={({ isActive }) => (isActive ? "text-[#76BB00]" : "text-white hover:text-[#76BB00]")}
                >
                  404 Page
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/news" className={({ isActive }) => (isActive ? "text-[#76BB00]" : "hover:text-[#76BB00]")}>
              NEWS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-[#76BB00]" : "hover:text-[#76BB00]")}>
              CONTACT
            </NavLink>
          </li>
        </ul>

        <button className="px-7 py-3 bg-[#77BA00] hover:bg-black text-white rounded-[30px]">APPOINTMENT</button>
      </div>
    </nav>
  );
}
