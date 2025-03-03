import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaSkype } from "react-icons/fa";
import 'remixicon/fonts/remixicon.css';

export default function Header() {
  return (
    <nav style={{ backgroundColor: '#222222' }} className="bg-gray-900 text-white py-2 flex md:flex-wrap">
      <div
        style={{
          fontFamily: 'sans-serif',
          fontSize: '16px'
        }}
        className="container mx-auto flex flex-col md:flex-row justify-center md:justify-around flex-wrap items-center font-sans text-center md:text-left"
      >
        {/* Contact Information */}
        <ul className="flex flex-col ml-20 md:ml-0 md:flex-row flex-wrap  justify-center md:mr-[200px]  items-center space-y-2  md:space-y-0 md:space-x-4 mb-2 md:mb-0 mr-11">
          <li className="flex items-center mr-6 md:mr-0 text-[17px] mt-2 md:mt-0 ">
          <a href="www.gmail.com login" >

            <i className="text-[20px] ri-phone-line mr-3"></i>
            <span>Phone +123-456-7890</span>
          </a>
          </li>
          <li className="flex items-center mr-6  mt-2 text-[17px]  md:mt-0">
          <a href="www.gmail.com login" >

            <i className="text-[20px] ri-mail-line mr-3"></i>
            <span>Yourcompany@gmail.com</span>
          </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex flex-nowrap justify-center items-center space-x-1 my-2 ml-10   md:my-0 ">
          <a href="https://www.facebook.com/" style={{ background: "#77ba00" }} className="text-white p-2 text-xl">
            <FaFacebookF />
          </a>
          <a href="https://x.com/twitter" style={{ background: "#77ba00" }} className="text-white p-2 text-xl">
            <FaTwitter />
          </a>
          <a href="https://www.google.com/" style={{ background: "#77ba00" }} className="text-white p-2 text-xl">
            <FaGooglePlusG />
          </a>
          <a href="https://www.linkedin.com/" style={{ background: "#77ba00" }} className="text-white p-2 text-xl">
            <FaLinkedinIn />
          </a>
          <a href="https://www.skype.com/en/" style={{ background: "#77ba00" }} className="text-white p-2 text-xl">
            <FaSkype />
          </a>
        </div>
      </div>
    </nav>
  );
}
