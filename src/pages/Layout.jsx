import React from 'react'
import {  Outlet } from 'react-router-dom'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
function Layout() {
    return (
        <>
       <div className='flex flex-col w-full'>

       <Header/>
       <Navbar/>
       <Outlet/>
       <Footer/>
       </div>
        
        </>
    )
}

export default Layout
