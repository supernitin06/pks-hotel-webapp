import React from 'react'
import FirstImage from '../component/abouts/Firstimage'
import Breadcrumb from '../component/abouts/Breadcrumb'
import Contactus from '../component/contact/Contactus'

function Contact() {
    return (
        <>
        <div>

             <FirstImage word="Contact Us" />
        <Breadcrumb
          link1={{ path: "/", name: "Home" }} //Link 1
          link2={{ path: "/about", name: "About Us" }} //LINk 2
          // finalItem="Team"
          col1="black" // Color for first link
          col2="#76BB00" // Color for second link
          col3="#32CD32" // Color for final item
        />
        <Contactus/>
        </div>
        </>
    )
}

export default Contact
