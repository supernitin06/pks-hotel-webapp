import React from "react";
import FirstImage from "../component/Abouts/Firstimage";
import Breadcrumb from "../component/Abouts/Breadcrumb";
import Aboutsection from "../component/Abouts/Aboutsection";
import Slideimage from "../component/Abouts/Slideimage";

function Aboutus() {
  return (
    <>
      <div>
      <div>
        <FirstImage word="About Us" />
        <Breadcrumb
          link1={{ path: "/", name: "Home" }} //Link 1
          link2={{ path: "/about", name: "About Us" }} //LINk 2
          // finalItem="Team"
          col1="black" // Color for first link
          col2="#76BB00" // Color for second link
          col3="#32CD32" // Color for final item
        />
        <Aboutsection/>
        
      </div>
      <Slideimage/>
      </div>
    </>
  );
}

export default Aboutus;
