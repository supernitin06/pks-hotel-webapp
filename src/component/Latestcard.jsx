import React from "react";
import { FaUser, FaHeart, FaComment } from "react-icons/fa"; // Importing icons

const featuredPosts = [
  {
    id: 1,
    image: "https://wp.hostlin.com/nilachol/images/blog/2.jpg",
    title: "Finibus bonorum malorum.",
    author: "Admin",
    likes: 350,
    comments: 30,
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore dolor magna aliqua.",
  },
  {
    id: 2,
    image: "https://wp.hostlin.com/nilachol/images/blog/3.jpg",
    title: "Finibus bonorum malorum.",
    author: "Admin",
    likes: 350,
    comments: 30,
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore dolor magna aliqua.",
  },
];

const sidebarPosts = [
  {
    id: 1,
    image: "https://wp.hostlin.com/nilachol/images/blog/bs-1.jpg",
    title: "Etiam Vel Neqe",
    description: "Lorem ipsum dolor sit amet consectetur elit sed do.",
  },
  {
    id: 2,
    image: "https://wp.hostlin.com/nilachol/images/blog/bs-2.jpg",
    title: "Ligula Vitae Eges",
    description: "Lorem ipsum dolor sit amet consectetur elit sed do.",
  },
  {
    id: 3,
    image: "https://wp.hostlin.com/nilachol/images/blog/bs-3.jpg",
    title: "Odio Convallis",
    description: "Lorem ipsum dolor sit amet consectetur elit sed do.",
  },
];

function Latestcard() {  // Corrected function declaration
  return (
    <div className="max-w-7xl   px-10 py-6  grid grid-cols-1 md:grid-cols-3 gap-10  ">
      {/* Featured Posts */}
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6   ">
        {featuredPosts.map((post) => (
          <div key={post.id} className="bg-white  overflow-hidden  border-gray-100 border-[2px]   ">
            <img src={post.image} alt={post.title} className="w-full h-64  object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[20px] pb-4">{post.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mt-2 border-b  space-x-3 pb-4">
                <span className="flex items-center gap-1">
                  <FaUser className="text-gray-400" /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaHeart className="text-gray-300" /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <FaComment className="text-gray-500 " /> {post.comments}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-3 pb-4 ">{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Posts */}
      <div className="space-y-10">
        {sidebarPosts.map((post) => (
          <div key={post.id} className="flex items-center space-x-4 border-b pb-6 justify-around   ">
            <img src={post.image} alt={post.title} className="w-28   h-28  object-cover " />
            <div>
              <h4 className="font-semibold">{post.title}</h4>
              <p className="text-gray-500 text-sm">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Latestcard; // Corrected export
