import React from 'react'
import FirstImage from '../component/abouts/Firstimage'
import Breadcrumb from '../component/abouts/Breadcrumb'
import Teamscard from '../component/abouts/Teamscard'

function Team() {
  return (

    <>
      <div className="w-full ">
        <FirstImage word="Our Experts" />
      </div>
      <Breadcrumb
          link1={{ path: "/", name: "Home" }} //Link 1
          link2={{ path: "/about", name: "About Us" }} //LINk 2
          finalItem="Team"
          col1="black" // Color for first link
          col2="#76BB00" // Color for second link
          col3="#32CD32" // Color for final item
        />
        <Teamscard/>

    </>
  )
}

export default Team
