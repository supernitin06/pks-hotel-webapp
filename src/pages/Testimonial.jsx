import React from 'react'
import FirstImage from '../component/abouts/Firstimage'
import Breadcrumb from '../component/abouts/Breadcrumb'
import Testimon from '../component/abouts/Testimon'

function Testimonial() {
    return (
        <>
         
        <div>

         <div >
        {/* Pass a string as the word prop */}
        <FirstImage word=" testimonials" />
      </div>
      <Breadcrumb
          link1={{ path: "/", name: "Home" }} //Link 1
          link2={{ path: "/aboutus", name: "About" }} //LINk 2
          finalItem="testimonials"
          col1="black" // Color for first link
          col3="#76BB00" // Color for second link
          col2="#32CD32" // Color for final item
        />
               <Testimon/>
        </div>
        </>
    )
}

export default Testimonial
