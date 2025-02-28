import React from 'react'
import FirstImage from '../component/Abouts/Firstimage'
import Breadcrumb from '../component/Abouts/Breadcrumb'
import Detailroom from '../component/Abouts/Detailroom'

function Roomsdetail() {
    return (
        <>
        
           <div>
           <div>
        {/* Pass a string as the word prop */}
        <FirstImage word=" Room details" />
      </div>
      <Breadcrumb
          link1={{ path: "/", name: "Home" }} //Link 1
          link2={{ path: "/services", name: "Service" }} //LINk 2
          finalItem="room details"
          col1="black" // Color for first link
          col3="#76BB00" // Color for second link
          col2="#32CD32" // Color for final item
        />
        <Detailroom/>
      </div>
        </>
    )
}

export default Roomsdetail
