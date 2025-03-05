import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { removeuser } from "../../store/authslice";


export default function Navbar() {
  const location = useLocation();
  const [openmodel, setopenmodel] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({
    about: false,
    pages: false,
  });
  const dispatch = useDispatch();

const [logout , setlogout] = useState(false)
  const logoutRef = useRef(null);

  // Function to handle clicks outside of the logout menu


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (logoutRef.current && !logoutRef.current.contains(event.target)) {
        setlogout(false);
      }
    };

    if (logout) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [logout]);



  const toggleDropdown = (key) => {
    setOpenSubMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    setOpenSubMenus({ about: false, pages: false });
    setMenuOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    if (openmodel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openmodel]);

  const isActiveParent = (paths) => {
    return paths.some((path) => location.pathname.includes(path));
  }
  return (
    <>
      {/* <div className=" w-full flex  "> */}


      <nav className="  bg-white text-black font-bold shadow  md:px-4 px-1  w-full sticky top-0 z-50  flex md:justify-center"
      >
        {/* Mobile View */}
        <div className="md:hidden w-full p-2 ">
          <div className="flex justify-between   py-3 items-center  bg-slate-100 ">

            <div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-3xl text-[#77BA00] ml-3 font-bold"
              >
                ☰
              </button>
            </div>
            <div>

              <button className="px-7 py-3  mr-3 text-[15px] bg-[#77BA00] text-white hover:bg-black rounded-3xl"
                onClick={() => setopenmodel(true)}
              >
                APPOINTMENT
              </button>
            </div>
          </div>

          {menuOpen && (
            <ul className="mt-4  bg-black">
              <li className="flex justify-between items-center border-b-[1px] border-white">
                <div className="px-4">
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive ? "text-red-500 font-bold" : "text-white font-normal text-[14px] hover:text-blue-400"
                    }
                  >
                    HOME
                  </NavLink>
                </div>
                <div className="border-l-[1px] px-3 py-2 border-white">
                  <i className="text-white text-xl font-light ri-arrow-down-s-line"></i>
                </div>
              </li>

              <li className="flex  justify-between items-center border-b-[1px] border-white">
                <div className="px-4">
                  <button
                    className={`text-white font-normal text-[14px] ${isActiveParent(["/aboutus", "/team"]) ? "text-red-500" : "hover:text-blue-400"}`}

                  >
                    ABOUT
                  </button>
                </div>
                <div className="border-l-[1px] px-3 py-2 border-white">
                  <i className="text-white text-xl font-light ri-arrow-down-s-line"
                    onClick={() => toggleDropdown("about")}
                  >
                  </i>
                </div>
              </li>

              {openSubMenus.about && (


                <ul
                  as={motion.ul}
                  initial={{ y: "-100%", opacity: 0 }} // Start position (top, hidden)
                  animate={{ y: "0%", opacity: 1 }} // Animate to visible position
                  exit={{ y: "-100%", opacity: 0 }} // Exit animation (slides back up)
                  transition={{ duration: 1, ease: "easeInOut" }} // Smooth transitio


                  className=" mt-2 space-y-2"
                >
                  <li className=" border-b-[1px] pl-6 border-white font-light">
                    <NavLink
                      to="/aboutus"
                      className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white hover:text-blue-400"
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className=" border-b-[1px] pl-6 border-white font-light">
                    <NavLink
                      to="/team"
                      className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white hover:text-blue-400"
                      }
                    >
                      Team
                    </NavLink>

                  </li>
                  <li className=" border-b-[1px] pl-6 border-white font-light">
                    <NavLink
                      to="/rooms"
                      className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white hover:text-blue-400"
                      }
                    >
                      Rooms
                    </NavLink>

                  </li>
                  <li className=" border-b-[1px] pl-6 border-white font-light">
                    <NavLink
                      to="/roomdetail"
                      className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white hover:text-blue-400"
                      }
                    >
                      Room Details
                    </NavLink>

                  </li>
                  <li className=" border-b-[1px] pl-6 border-white font-light">
                    <NavLink
                      to="/testimonial"
                      className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white hover:text-blue-400"
                      }
                    >
                      Testimonial
                    </NavLink>

                  </li>
                </ul>

              )}

              <li className="flex justify-between items-center border-b-[1px] border-white">
                <div className="px-4">
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive ? "text-red-500 font-bold" : "text-white font-normal text-[14px] hover:text-blue-400"
                    }
                  >
                    SERVICES
                  </NavLink>
                </div>
                <div className="border-l-[1px] px-3 py-2 border-white">
                  <i className="text-white text-xl font-light ri-arrow-down-s-line"></i>
                </div>
              </li>

              <li className="flex justify-between items-center border-b-[1px] border-white">
                <div className="px-4">
                  <button
                    className={`text-white font-normal text-[14px] ${isActiveParent(["/gallery-box", "/404"]) ? "text-red-500" : "hover:text-blue-400"}`}
                  >
                    PAGES
                  </button>
                </div>
                <div className="border-l-[1px] px-3 py-2 border-white">
                  <i className="text-white text-xl font-light ri-arrow-down-s-line"
                    onClick={() => toggleDropdown("pages")}
                  ></i>
                </div>
              </li>

              {openSubMenus.pages && (
                <ul className=" space-y-2">
                  <li className=" border-b-[1px] pl-6 pt-2 border-white font-light">
                    <NavLink
                      to="/gallery-box"
                      className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white hover:text-blue-400"
                      }
                    >
                      Gallery Box
                    </NavLink>

                  </li>

                  <li className=" border-b-[1px] pl-6 border-white font-light">
                    <NavLink
                      to="/404-page"
                      className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white hover:text-blue-400"
                      }
                    >
                      404-page
                    </NavLink>

                  </li>
                </ul>
              )}

              <li className="flex justify-between items-center border-b-[1px] border-white">
                <div className="px-4">
                  <NavLink
                    to="/news"
                    className={({ isActive }) =>
                      isActive ? "text-red-500 font-bold" : "text-white font-normal text-[14px] hover:text-blue-400"
                    }
                  >
                    NEWS
                  </NavLink>
                </div>
                <div className="border-l-[1px] px-3 py-2 border-white">
                  <i className="text-white text-xl font-light ri-arrow-down-s-line"></i>
                </div>
              </li>

              <li className="flex justify-between items-center border-b-[1px] border-white">
                <div className="px-4">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-red-500 font-bold" : "text-white font-normal text-[14px] hover:text-blue-400"
                    }
                  >
                    CONTACT
                  </NavLink>
                </div>
                <div className="border-l-[1px] px-3 py-2 border-white">
                  <i className="text-white text-xl font-light ri-arrow-down-s-line"></i>
                </div>
              </li>
            </ul>


          )}
        </div>

        {/* Desktop View */}
        {/* Desktop View */}
        {/* Desktop View */}
        {/* Desktop View */}
        <div className="hidden md:flex lg:w-[1200px]    items-center justify-between">



          <div className="flex items-center">
            <Link to="/home">
              <img src="https://wp.hostlin.com/nilachol/images/logo/logo.png" alt="Logo" className="h-[50px] min-w-[200px] w-full  my-6 " />
            </Link>
          </div>


          {/* itwmsssssss */}
          {/* itwmsssssss */}
          <div className="flex  flex-wrap items-center space-x-36" >

            <div>
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



                <li className="relative group py-9 ">
                  <span
                    className={`cursor-pointer  ${isActiveParent(["/aboutus", "/team", "/rooms", "/roomdetail", "/testimonial"])
                      ? "text-[#76BB00]"
                      : "text-black hover:text-[#76BB00]"
                      }`}
                  >
                    ABOUT
                  </span>
                  <ul className="absolute  border-black  left-[-10px] top-[96px]  bg-[#333333] w-[220px] transition-all duration-300 ease-out transform opacity-0 scale-y-0 origin-top invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible">
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
                <li className="relative group  py-9 ">
                  <span
                    className={`cursor-pointer ${isActiveParent(["/gallery-box", "/404-page"]) ? "text-[#76BB00]" : "text-black hover:text-[#76BB00]"
                      }`}
                  >
                    PAGES
                  </span>
                  <ul className="absolute  border-black  left-[-10px] top-[96px] bg-[#333333] w-[220px] transition-all duration-300 ease-out opacity-0 scale-y-0 origin-top invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible">
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
            </div>

            <div>
              <button className="px-7 py-3 bg-[#77BA00] hover:bg-black text-white rounded-[30px]"
                onClick={() => setopenmodel(true)}
              >APPOINTMENT</button>
            </div>

          </div>

        </div>


        {/* iamgehbsfhfdshbhdsbcprigifl;e */}
        <div className='absolute items-center hidden md:flex top-3 right-2 w-20 h-20 justify-start -z-40 '>

          <img className="w-12  h-12  mr-3 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9JHS89bv1VuM7HXWzPwgiumI7KGTxdZDlg&s" alt="Rounded avatar"
            onClick={() => setlogout(!logout)}
          ></img>
        </div>

        {logout && (
          <div className=" w-screen  h-[900px]  bg-transparent  -z-40  top-20 right-10  absolute"
          onClick={() => setlogout(!logout)}>
            <motion.div
             ref={logoutRef} 
              className="absolute right-6 bg-[#76BB00] border-2 border-[#76BB00] w-28 rounded-md h-20 flex text-white font-bold transition-all duration-100 ease-in-out"
              initial={{ opacity: 0 }} // Start fully hidden
              animate={{ opacity: 1 }} // Fade in
              exit={{ opacity: 0 }} // Fade out smoothly
              transition={{ duration: 0.5, ease: "easeInOut" }} // 1s fade transition
            >
              <div className="flex flex-col w-full h-full">
                {/* Profile Section */}
                <div className="group w-full h-[50%] cursor-pointer flex items-center justify-center border-b-2 border-white hover:bg-white">
                  <Link to='/profile'>
                  <span className="text-white font-semibold text-[18px] group-hover:text-[#76BB00]">
                    Profile
                  </span>
                  </Link>
                </div>

                {/* Logout Section */}
                <div
                  className="group w-full h-[50%] bg-[#76bb00] cursor-pointer flex items-center justify-center hover:bg-white"
                  onClick={() => dispatch(removeuser())}
                >
                  <span className="text-white font-bold group-hover:text-[#76BB00]">
                    Logout
                  </span>
                  <i className="text-white ml-2 font-light ri-logout-box-line group-hover:text-[#76BB00]"></i>
                </div>
              </div>
            </motion.div>
          </div>



        )}




      </nav >

      {/* Profile Icon */}


      {/* </div> */}

      {openmodel && (
        <div
          className="fixed inset-0 flex items-center md:justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setopenmodel(false)} // Close modal on background click
        >
          <motion.div
            className="bg-white relative p-6  shadow-lg w-[100%] md:h-[600px] h-[770px] mt-9 md:mt-0 space-y-16 md:space-y-6 pl-3 md:pl-4  md:w-[1000px]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            initial={{ y: "-100%", opacity: 0 }} // Start position (top, hidden)
            animate={{ y: "0%", opacity: 1 }} // Animate to visible position
            exit={{ y: "-100%", opacity: 0 }} // Exit animation (slides back up)
            transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
          >
            <button
              className="absolute top-4 right-4 text-gray-500 mr-4 md:mr-2 bg-red-700 hover:text-gray-800  "
              onClick={() => setopenmodel(false)}
            >
              <i className="text-white  font-extrabold text-3xl ri-close-line"></i>
            </button>

            <h2 className="text-2xl font-bold mb-4">Make An Appointment</h2>
            <form className="space-y-4">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-100 p-3 "
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border text-gray-700 border-gray-100 p-3 rounded-md focus:border-gray-500 outline-none"
                  required
                />
              </div>

              {/* Check-in and Check-out */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  placeholder="Check In"
                  className="w-full border text-gray-700 border-gray-100 p-3 "
                  required
                />
                <input
                  type="date"
                  placeholder="Check Out"
                  className="w-full border text-gray-700 border-gray-100 p-3 "
                  required
                />
              </div>

              {/* Discussion Dropdown */}
              <select className="w-full border text-gray-700 border-gray-100 p-3 ">
                <option>I want to discuss</option>
                <option>Project Inquiry</option>
                <option>Consultation</option>
                <option>Other</option>
              </select>

              {/* Message */}
              <textarea
                placeholder="Your Message"
                className="w-full border text-gray-700 border-gray-100 p-3  outline-none"
                rows={4}
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[200px]  bg-[#77BA00] text-white font-bold py-3 rounded-full hover:bg-black transition"
              >
                SUBMIT REQUEST
              </button>
            </form>

          </motion.div>

        </div>
      )
      }


    </>
  );
}
