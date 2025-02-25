import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Roomsuit from '../component/Roomsuit'
import AboutNilachol from '../component/Aboutnilachol'
import Ourservice from '../component/Ourservice'
import Photo from '../component/Photo'
import Number from '../component/Number'
import Map from '../component/Map'

function Home() {
    return (
        <>
        <div>
      <Banner/>
      <Roomsuit/>
      <AboutNilachol/>
      <Ourservice/>
      <Photo/>
      <Number/>
      <Map/>
        </div>
        </>
    )
}

export default Home
