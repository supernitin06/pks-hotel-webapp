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
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import Team from "./pages/Team";
import Rooms from "./pages/Rooms";
import Roomsdetail from "./pages/Roomsdetail";
import Testimonial from "./pages/Testimonial";
import Fourzero from "./pages/Fourzero";
import LoadingScreen from "./pages/LoadingScreen"; // Import Loading Screen
import Login from "./pages/Login";
import { Provider } from 'react-redux';
import  Store,{persistor} from "./store/authstore";
import Userprotected from "./component/protected/Userprotected";
import { PersistGate } from "redux-persist/integration/react";
import Profile from "./pages/Profile";


const router = createBrowserRouter([
  { path: "/", element: <Login /> }, // Login Route (Public)

  { 
    path: "/", 
    element: <Userprotected><Layout/></Userprotected>, 
    children: [
      { path: "home", element: <Home />  },
      { path: "aboutus", element: <About /> },
      { path: "team", element: <Team /> },
      { path: "rooms", element: <Rooms /> },
      { path: "roomdetail", element: <Roomsdetail /> },
      { path: "testimonial", element: <Testimonial /> },
      { path: "services", element: <Services /> },
      { path: "news", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "pages", element: <Pages /> },
      { path: "gallery-box", element: <Pages /> },
      { path: "404-page", element: <Fourzero /> },
    ],

  },
  { path: "profile", element: <Profile/> }

]);

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Subscribe to route changes
    const unsubscribe = router.subscribe(() => {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000); // Show loading for 1 second
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <>
      {loading && <LoadingScreen />} {/* Show loading screen when loading */}
      <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        {!loading && <RouterProvider router={router} />}
      </PersistGate>
      </Provider>

    </>
  );
}

export default App;
