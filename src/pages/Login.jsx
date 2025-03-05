import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { adduser } from '../store/authslice';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setshowpassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const info = { username , password };

    try {
      const response = await axios.post('http://192.168.1.2:8085/api/public/auth/login', info);

      if (response && response.data) {
        const user = response.data;
        // console.log('Response data:', user);
        // console.log(user);
        // console.log('Token:', user.access_token);
        dispatch(adduser(user.access_token));


        toast.success("Login Successful!");

        setTimeout(() => {
          navigate('home');
        }, 1000);

        setusername('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Login failed. Please try again.', {

      });
    }
  };

  return (
    <div className="flex justify-center items-center bg-[url(https://www.bestoffersguide.net/wp-content/uploads/2023/03/silhouette-palm-tree-with-umbrella-scaled.jpg)] bg-no-repeat bg-cover w-full h-screen absolute">
      <form
        className="flex flex-col items-center justify-center w-[500px] px-12 h-auto bg-white/80 rounded-lg p-10 shadow-2xl backdrop-blur-sm "
        onSubmit={handleSubmit}
      >
        <div className="mb-8">
          <h2 className="text-5xl font-bold text-gray-900">Login</h2>
        </div>
        <div className="w-full mb-6">
          <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-gray-100 border border-gray-900 text-gray-900 text-lg rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john.doe@company.com"
            required
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div className="w-full mb-8">
          <label htmlFor="password" className="block mb-2 text-xl font-medium text-gray-900">
            Password
          </label>
          <div className="relative">
            <input
              type={showpassword ? "text" : "password"}
              id="password"
              className="w-full bg-gray-100 border border-gray-900 text-gray-900 text-lg rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="•••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 ${showpassword ? "ri-eye-line" : "ri-eye-off-line"
                }`}
              onClick={() => setshowpassword(!showpassword)}
            ></i>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium mb-6 mt-4  rounded-lg text-xl px-5 py-3 transition-colors"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
