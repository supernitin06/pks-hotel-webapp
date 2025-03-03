
import React from 'react'
import Breadcrumb from "../component/abouts/Breadcrumb";
import FirstImage from '../component/abouts/Firstimage';
import { Gallery } from '../component/pagecomponent/Gallery';
function Pages() {
    return (
        <>
            <div>
                <div>
                <FirstImage word="Gallery Boxed" />
        <Breadcrumb
          link1={{ path: "/", name: "Home" }} //Link 1
          link2={{ name: "Pages" }} //LINk 2
          finalItem="Gallery Boxed"
          col1="black" // Color for first link
          col2="#32CD32" // Color for final item
          col3="#76BB00" // Color for second link
        />
     <Gallery/>
        
                </div>
            </div>
        </>
    )
}

export default Pages
