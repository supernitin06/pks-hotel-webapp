import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/homes/Header";
import Navbar from "../component/homes/Navbar";
import Footer from "../component/homes/Footer";

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
