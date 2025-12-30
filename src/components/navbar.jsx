import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ onResumeClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const hideTimeoutRef = useRef(null);


    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const startHideTimer = () => {
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

        hideTimeoutRef.current = setTimeout(() => {
            setShowNavbar(false);
        }, 2000);
    };

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

            if (y === 0) {
                setIsScrolled(false);
                setShowNavbar(true);
                return;
            }

            setIsScrolled(true);
            setShowNavbar(true);

            startHideTimer();
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {showNavbar && (
                <motion.div
                    onMouseEnter={() => {
                        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
                        setShowNavbar(true);
                    }}
                    onMouseLeave={() => {
                        if (isScrolled) startHideTimer();
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`
                        fixed w-full h-20 py-4 px-8 flex items-center z-50
                        ${isScrolled ? "bg-gray-700/40 backdrop-blur-md shadow-lg" : "bg-transparent"}
                    `}
                >

                    <p className={` text-3xl font-semibold ${isScrolled ? "text-white" : "text-black"}`}>
                        Esa Kurniawan Putra
                    </p>

                    <div className='flex-1 z-10'>
                        <div className='flex flex-row-reverse justify-center items-center text-md font-semibold gap-x-4'>
                            <div onClick={() => scrollToSection("certificates")} className={`relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full ${isScrolled ? "text-white" : "text-black"} hover:cursor-pointer`}>
                                Certificates
                            </div>
                            <div onClick={() => scrollToSection("projects")} className={`relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full ${isScrolled ? "text-white" : "text-black"} hover:cursor-pointer`}>
                                Projects
                            </div>

                            <div onClick={() => scrollToSection("Tech Stack")} className={`relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full ${isScrolled ? "text-white" : "text-black"} hover:cursor-pointer`}>
                                Tech Stack
                            </div>

                            <div onClick={() => scrollToSection("about")} className={`relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full  ${isScrolled ? "text-white" : "text-black"} hover:cursor-pointer`}>
                                Aboute Me
                            </div>

                            <div onClick={() => scrollToSection("home")} className={`relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full ${isScrolled ? "text-white" : "text-black"}  hover:cursor-pointer`}>
                                Home
                            </div>
                        </div>
                    </div>


                    <button onClick={onResumeClick}
                        className={`hover:cursor-pointer border border-blue-600 flex items-center justify-center 
                        transform transition duration-300 ease-in-out hover:-translate-y-1 rounded-md z-20 px-4 py-2 ${isScrolled ? "text-white bg-blue-600" : "text-black"} text-sm font-semibold`}
                    >
                        My Resume
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Navbar
