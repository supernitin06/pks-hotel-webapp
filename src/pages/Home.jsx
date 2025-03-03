import React from 'react'
import Banner from '../component/homes/Banner'
import Roomsuit from '../component/homes/Roomsuit'
import AboutNilachol from '../component/homes/Aboutnilachol'
import Ourservice from '../component/homes/Ourservice'
import Number from '../component/homes/Number'
import Map from '../component/homes/Map'
import Photo from '../component/homes/Photo'

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
