import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../assets/json/Photo.json";


export function Photocard() {
    const [category, setCategory] = useState(data);
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    const handleBtns = (e) => {
        const word = e.target.value;
        setActiveCategory(word);

        if (word === "All") {
            setCategory(data);
        } else {
            const filtered = data.filter((item) => item.kind.includes(word));

            // Remove duplicates using Set
            const uniqueFiltered = Array.from(new Set(filtered.map(item => item.linkImg)))
                .map(linkImg => filtered.find(item => item.linkImg === linkImg));

            setCategory(uniqueFiltered);
        }
    };

    return (
        <>
            <div className="text-center mb-4">
                <div className="flex flex-wrap gap-4 md:gap-2 justify-center my-8">
                    {["All", "Bed", "Deluxe", "Luxury", "Bathroom", "Double"].map((label) => (
                        <button
                            key={label}
                            value={label}
                            onClick={handleBtns}
                            className={`px-5 py-[12px] border-gray-200 border-[1px] rounded-3xl transition-all ${
                                activeCategory === label
                                    ? "bg-[#77BA00] text-white"
                                    : "bg-white text-gray-500 hover:bg-[#77BA00] hover:text-white active:bg-[#77BA00] active:text-white"
                                }`}
                        >
                            {label} Room
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
                {category.map(({ linkImg, name }, index) => (
                    <motion.div
                        key={index}
                        className="relative overflow-hidden group"
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {/* Image */}
                        <img
                            className="h-[45vh] w-[100vw] py-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-100"
                            src={linkImg}
                            alt={name}
                        />

                        {/* Black Overlay Sliding from Bottom to Top */}
                        <div className="absolute inset-x-0 bottom-[20vh] h-0 bg-black opacity-0 transition-[height,opacity] duration-[0ms] ease-in group-hover:h-full group-hover:opacity-70 group-hover:duration-[2000ms] group-hover:ease-out"></div>

                        {/* Black Overlay Sliding from Top to Bottom */}
                        <div className="absolute inset-x-0 top-[25vh] h-0 bg-black opacity-0 transition-[height,opacity] duration-[0ms] ease-in group-hover:h-full group-hover:opacity-70 group-hover:duration-[2000ms] group-hover:ease-out"></div>

                        {/* Expand Button (Appears from Left) */}
<motion.button
    className="absolute left-[-50px] bottom-0 bg-[#77BA00] px-[2vh]  py-[1vh]    text-white  shadow-md opacity-0 
               group-hover:left-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
    onClick={() => setSelectedImage(linkImg)}
>
<i class=" text-[2vh]   ri-collapse-diagonal-fill"></i>
</motion.button>

                    </motion.div>
                ))}
            </div>

            {/* Popup Modal for Enlarged Image */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative p-4 bg-white rounded-lg shadow-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 bg-red-100 text-white p-2 rounded-full shadow-lg hover:bg-red-600"
                                onClick={() => setSelectedImage(null)}
                            >
                                ❌
                            </button>

                            {/* Enlarged Image */}
                            <img
                                src={selectedImage}
                                alt="Enlarged"
                                className="w-auto h-auto object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
