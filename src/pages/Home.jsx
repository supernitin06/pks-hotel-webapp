import React from 'react'
import Banner from '../component/Homes/Banner'
import Roomsuit from '../component/Homes/Roomsuit'
import AboutNilachol from '../component/Homes/Aboutnilachol'
import Ourservice from '../component/Homes/Ourservice'
import Photo from '../component/Homes/Photo'
import Number from '../component/Homes/Number'
import Map from '../component/Homes/Map'

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
