import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/poppins";
import "@fontsource/poppins/300.css"; 
import "@fontsource/poppins/600.css"; 
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
import Rooms from "./pages/Rooms";
import Roomsdetail from "./pages/Roomsdetail";
import Testimonial from "./pages/Testimonial";
import Fourzero from "./pages/Fourzero";
import LoadingScreen from "./pages/LoadingScreen"; // Import Loading Screen

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "aboutus", element: <About /> },
      { path: "team", element: <Team /> },
      { path: "rooms", element: <Rooms /> },
      { path: "roomdetail", element: <Roomsdetail /> },
      { path: "testimonial", element: <Testimonial /> },
      { path: "services", element: <Services /> },
      { path: "news", element: <Home/> },
      { path: "contact", element: <Contact /> },
      { path: "pages", element: <Pages /> },
      { path: "gallery-box", element: <Pages /> },
      { path: "404-page", element: <Fourzero /> },
    ],
  },
]);




function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Subscribe to route changes
    const unsubscribe = router.subscribe(() => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000); // Show loading for 1 second
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <>
      {loading && <LoadingScreen />} {/* Show loading screen when loading */}
      {!loading && <RouterProvider router={router} />}
    </>
  );
}

export default App;
