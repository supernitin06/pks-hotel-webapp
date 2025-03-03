import React from 'react'
import Breadcrumb from '../component/abouts/Breadcrumb'
import Fouzerofour from '../component/pagecomponent/Fourzerofour'

function Fourzero() {
    return (
        <>
         <div>
         <Breadcrumb
          link1={{ path: "/", name: "Home" }} //Link 1
          link2={{ path: "/about", name: "About Us" }} //LINk 2
          finalItem="404"
          col1="black" // Color for first link
          col2="#32CD32" // Color for final item
          col3="#76BB00" // Color for second link
        />
        <Fouzerofour/>
         </div>
        </>
    
)
}

export default Fourzero
