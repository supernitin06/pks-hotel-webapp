import React from 'react'
import FirstImage from '../component/Abouts/Firstimage'
import Breadcrumb from '../component/Abouts/Breadcrumb'
import Hotelroom from '../component/Abouts/Hotelroom'

function Rooms() {
    return (
        <>
        <div>

         <div>
        {/* Pass a string as the word prop */}
        <FirstImage word="Hotel Rooms" />
      </div>
      <Breadcrumb
          link1={{ path: "/", name: "Home" }} //Link 1
          link2={{ path: "/about", name: "About Us" }} //LINk 2
          finalItem="Hotel Rooms"
          col1="black" // Color for first link
          col2="#76BB00" // Color for second link
          col3="#32CD32" // Color for final item
        />
        <Hotelroom/>
        </div>
        </>
    )
}

export default Rooms
