import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/Homes/Header";
import Navbar from "../component/Homes/Navbar";
import Footer from "../component/Homes/Footer";

function Layout({ }) {
 

 
  return (
    <>
      <div className="flex flex-col w-full">
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
