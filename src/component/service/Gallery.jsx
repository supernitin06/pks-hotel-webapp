import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Link } from "lucide-react"; // Importing icons
import data from "../../assets/json/Pages.json";

export function Gallery() {
    const [category, setCategory] = useState(data);
    const [activeCategory, setActiveCategory] = useState("Show All");
    const [selectedImage, setSelectedImage] = useState(null); // ✅ Fixed: Added missing state

    const handleBtns = (e) => {
        const word = e.target.value;
        setActiveCategory(word);

        if (word === "Show All") {
            setCategory(data);
        } else {
            const filtered = data.filter((item) => item.kind.includes(word));
            const uniqueFiltered = Array.from(new Set(filtered.map((item) => item.Img)))
                .map((Img) => filtered.find((item) => item.Img === Img));
            setCategory(uniqueFiltered);
        }
    };

    return (
        <>
            <div className="text-center mt-20 mb-3">
                <div className="flex flex-wrap gap-4 md:gap-2 justify-center my-8">
                    {["Show All", "Bed Room", "Delux Room", "Luxury Room", "Bath Room", "Double Bedroom"].map((label) => (
                        <button
                            key={label}
                            value={label}
                            onClick={handleBtns}
                            className={`px-5 py-[12px] text-[15px] border-gray-200 border-[1px] rounded-3xl transition-all ${activeCategory === label
                                ? "bg-[#77BA00] text-white"
                                : "bg-white text-gray-500 hover:bg-[#77BA00] hover:text-white active:bg-[#77BA00] active:text-white"
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-center my-14">
                <div className="grid md:grid-cols-3 gap-3 p-6">
                    {category.map(({ Img, name }, index) => (
                        <motion.div
                            key={index}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="relative group overflow-hidden"
                        >
                            {/* Image */}
                            <img className="h-80 w-[380px] object-cover" src={Img} alt={name} />

                            {/* Overlay with Clip-Path Animation */}
                            <div className="absolute inset-0 flex items-center justify-center  
    [clip-path:polygon(0%_0%,100%_0%,80%_0%,20%_0%)] 
    bg-black/40 transition-all duration-1000 ease-in-out  
 group-hover:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]"
                            >
                                {/* Icons */}
                                <div className="flex gap-4  transition-all duration-700 ">
                                    <button
                                        className="bg-white p-3 rounded-full shadow-lg hover:text-[#76BB00] transition-all"
                                        onClick={() => setSelectedImage(Img)} // ✅ Fixed: Opens Image Modal
                                    >
                                        <Search size={20} className="  bg-white text-[#76BB00] font-bold hover:text-black" />
                                    </button>
                                    <button className="bg-white p-3 text-white font-bold rounded-full shadow-lg hover:text-[#76BB00] transition-all">
                                        <Link size={20} className=" bg-white text-[#76BB00] font-bold hover:text-black" />
                                    </button>
                                </div>
                            </div>

                            {/* Image Pop-up (Modal) */}
                            {selectedImage && (
                                <div className="fixed inset-0 flex items-center justify-center rounded-xl bg-black/10   z-50">
                                    <div className="relative bg-white p-2 rounded-xl  shadow-lg max-w-3xl w-[400px] ">
                                        <img
                                            src={selectedImage}
                                            className="h-[30vh] w-auto object-contain mx-auto "
                                            alt="Enlarged Preview"
                                        />
                                        <button
                                            className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition-all"
                                            onClick={() => setSelectedImage(null)} // ✅ Fixed: Close Modal
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            )}

                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}
