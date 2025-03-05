import React from 'react'
import FirstImage from '../component/abouts/Firstimage'
import Breadcrumb from '../component/abouts/Breadcrumb'
import Hotelroom from '../component/abouts/Hotelroom'

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
          link2={{ path: "", name: "About " }} //LINk 2
          finalItem="Hotel Rooms"
          col1="black" // Color for first link
          col3="#76BB00" // Color for second link
          col2="#32CD32" // Color for final item
        />
        <Hotelroom/>
        </div>
        </>
    )
}

export default Rooms
