import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeuser } from "../../store/authslice";


 
const Userprotected = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    // Listen for logout in other tabs
    const handleStorageChange = (event) => {
      if (event.key === "persist:auth") {
        const authData = JSON.parse(event.newValue);
        const storedToken = JSON.parse(authData)?.token; // Extract token
        if (!storedToken) {
          dispatch(removeuser()); // Logout user if token is missing
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [dispatch]);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

export default Userprotected;
