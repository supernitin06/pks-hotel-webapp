import { useState,useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSettings = () => {
    const [profile, setProfile] = useState({
        fullName: "Will Jonto",
        email: "willjontoax@gmail.com",
        phone: "(1) 2536 2561 2365",
        department: "Design",
        designation: "UI UX Designer",
        language: "English",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    });
    const navigate = useNavigate();
    const [data ,setdata] = useState({});
    const [formData, setFormData] = useState(profile);
    const [passwords, setPasswords] = useState({ password: "", confirmPassword: "" });

    const [edit, setEdit] = useState(true);
    const [changePassword, setChangePassword] = useState(false);
    const [notify, setNotify] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const token = useSelector((state) => state.auth.token);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProfile(formData);
        alert("Profile updated successfully!");
    };


// get profile data api


const getNameUser = async () => {
  try {
    const response = await axios.get(
      'http://192.168.1.2:8085/api/protected/user/my-profile',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response && response.data) {
      const user = response.data;
      console.log('Response data:', user);
      setdata(user);
      toast.success("Profile updated successfully!");

    }
  } catch (error) {
    console.error('Error during login:', error);
    toast.error('Login failed. Please try again.');
  }
};

useEffect(() => {
    
    return () => {
        getNameUser()
    };
}, []);
console.log("hello");

console.log(data);
console.log(data.fullName);





    return (
        <div className="flex md:p-8  bg-gray-100 md:flex-row  flex-col min-h-screen">
            {/* Profile Display */}
            <div className="md:w-1/3 w-full bg-white shadow-lg rounded-lg py-8 md:py-0 md:p-6 ">
                <div className="flex flex-col items-center">
                    <div className="w-full h-[300px] bg-center  bg-[url('https://imgs.search.brave.com/DTQejk2PmvL7veGf6k89Q_71GgoykEXxGcKB2lWXamk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvaW5kaWEtZmxh/Zy1wbmctNXdkNHNp/amZuY2l3ODh1Ny5w/bmc')]  relative">
                        <img
                            src="https://imgs.search.brave.com/y2d0qq1bUPTIyXWQ_Wai9Rae0h0umnSEZMBqUtSwH-0/rs:fit:860:0:0:0/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9raW1fam9uZ191/bi9raW1fam9uZ191/bl9QTkczNC5wbmc"
                            alt="Profile"
                            className="w-28 h-28 absolute -bottom-14 left-60 bg-slate-50   rounded-full mb-4"
                        />
                    </div>



                    <h2 className="text-xl mt-12 mr-3 font-semibold">{data.fullName}</h2>
                    <p className="text-gray-500 mr-3">{data.username}</p>
                </div>
                <div className="w-full h-[1px] bg-slate-200 mt-9   ">

                </div>


                <div className=" mt-8 text-2xl font-bold">
                    Personal Info
                </div>


                <div className="mt-6  flex flex-col w gap-y-3 ">
                    <p className=""><strong>Phone: </strong> {data.phoneNo}</p>
                    <p><strong>Department:</strong> {profile.department}</p>
                    <p><strong>Designation:</strong> {profile.designation}</p>
                    <p><strong>Languages:</strong> {profile.language}</p>
                    <p><strong>Bio:</strong> {profile.bio}</p>
                </div>
            </div>

            {/* Profile Edit Form */}
            <div className="w-2/3 relative bg-white shadow-lg rounded-lg p-6 ml-6">
                <div className="cursor-pointer border-b pb-2 mb-4 flex space-x-6 text-lg">
                    <span
                        className={`font-bold pb-1 ${edit ? "border-b-2 border-blue-500" : ""}`}
                        onClick={() => {
                            setChangePassword(false);
                            setEdit(true);
                            setNotify(false);
                        }}
                    >
                        Edit Profile
                    </span>

                    <span
                        className={`font-bold pb-1 ${changePassword ? "border-b-2 border-blue-500" : ""}`}
                        onClick={() => {
                            setChangePassword(true);
                            setEdit(false);
                            setNotify(false);
                        }}
                    >
                        Change Password
                    </span>

                    <span
                        className={`font-bold pb-1 ${notify ? "border-b-2 border-blue-500" : ""}`}
                        onClick={() => {
                            setChangePassword(false);
                            setEdit(false);
                            setNotify(true);
                        }}
                    >
                        Notification Settings
                    </span>
                </div>

                {/* Edit Profile Form */}
                {edit && (
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                            <label className="block mb-2 text-xl font-medium text-gray-900">Full Name</label>
                            <input name="fullName" type="text" placeholder="Enter Full Name" className="border w-full p-2 rounded" value={formData.fullName} onChange={handleChange} required />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-2 text-xl font-medium text-gray-900">Email</label>
                            <input name="email" type="email" placeholder="Enter Email" className="border w-full p-2 rounded" value={formData.email} onChange={handleChange} required />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block mb-2 text-xl font-medium text-gray-900">Phone Number</label>
                            <input name="phone" type="text" placeholder="Enter Phone Number" className="border w-full p-2 rounded" value={formData.phone} onChange={handleChange} />
                        </div>

                        {/* Department */}
                        <div>
                            <label className="block mb-2 text-xl font-medium text-gray-900">Department</label>
                            <input name="department" type="text" placeholder="Enter Department" className="border w-full p-2 rounded" value={formData.department} onChange={handleChange} required />
                        </div>

                        {/* Designation */}
                        <div>
                            <label className="block mb-2 text-xl font-medium text-gray-900">Designation</label>
                            <input name="designation" type="text" placeholder="Enter Designation" className="border w-full p-2 rounded" value={formData.designation} onChange={handleChange} required />
                        </div>

                        {/* Language Selection */}
                        <div>
                            <label className="block mb-2 text-xl font-medium text-gray-900">Preferred Language</label>
                            <select name="language" className="border w-full p-2 rounded" value={formData.language} onChange={handleChange}>
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                            </select>
                        </div>

                        {/* Bio / Description */}
                        <div className="col-span-2">
                            <label className="block mb-2 text-xl font-medium text-gray-900">Bio</label>
                            <textarea name="bio" placeholder="Write description..." className="border w-full p-2 rounded" value={formData.bio} onChange={handleChange}></textarea>
                        </div>

                        {/* Buttons */}
                        <div className="col-span-2 flex justify-end space-x-4">
                            <button type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => setFormData(profile)}>Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
                        </div>
                    </form>

                )}

                {/* Change Password Form */}
                {changePassword && (
                    <div className="w-full mb-8">
                        <label className="block mb-2 text-xl font-medium text-gray-900">New Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="w-full bg-gray-50 border border-gray-900 text-gray-900 text-lg rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                placeholder="•••••••••"
                                required
                                value={passwords.password}
                                onChange={handlePasswordChange}
                            />
                        </div>

                        <label className="block mb-2 mt-7 text-xl font-medium text-gray-900">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                className="w-full bg-gray-50 border border-gray-900 text-gray-900 text-lg rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                placeholder="•••••••••"
                                required
                                value={passwords.confirmPassword}
                                onChange={handlePasswordChange}
                            />
                        </div>

                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="mt-3 text-blue-500">
                            {showPassword ? "Hide Passwords" : "Show Passwords"}
                        </button>
                    </div>
                )}

                <div>

                    <button className="bg-black absolute bottom-3  text-yellow-500 w-[90px] h-[50px] "
                        onClick={() => navigate(-1)}
                    >
                        Go back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
