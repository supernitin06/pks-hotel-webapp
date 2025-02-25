import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/300.css"; // Light
import "@fontsource/poppins/600.css"; // Semi-bold
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Services from "./pages/Services";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import Team from "./pages/Team";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with animation duration
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "HOME",
          element: <Home/>,
        },
        {
          path: "",
          element: <Home/>,
        },
        {
          path: "ABOUT-US",
          element: <About/>,
        },
        {
          path: "ABOUT",
          element: <About/>,
        },
        {
          path: "SERVICES",
          element: <Services/>,
        },
        {
          path: "NEWS",
          element: <News/>
        },
        {
          path: "PAGES",
          element: <Pages/>
        },
        {
          path: "CONTACT",
          element: <Contact/>
        },
        {
          path: "team",
          element: <Team/>
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
