import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ onContact }) => {
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
                        fixed w-full h-20 p-4 flex items-center z-50
                        ${isScrolled ? "bg-gray-700/40 backdrop-blur-md shadow-lg" : "bg-transparent"}
                    `}
                >

                    <p className={`text-2xl  ${isScrolled ? "text-white" : "text-black"}`}>
                        Esa Kurniawan Putra
                    </p>


                    <div className='flex-1 z-10'>
                        <ul className='flex flex-row-reverse items-center px-8'>
                            <li onClick={() => scrollToSection("projects")} className={`relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full ${isScrolled ? "text-white" : "text-black"}`}>
                                Projects
                            </li>

                            <li onClick={() => scrollToSection("Tech Stack")} className={`relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full  mr-4 ${isScrolled ? "text-white" : "text-black"}`}>
                                Tech Stack
                            </li>

                            <li onClick={() => scrollToSection("about")} className={`relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full mx-4 ${isScrolled ? "text-white" : "text-black"}`}>
                                Aboute Me
                            </li>

                            <li onClick={() => scrollToSection("home")} className={`relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full ${isScrolled ? "text-white" : "text-black"}`}>
                                Home
                            </li>
                        </ul>
                    </div>

                    <a href="https://drive.google.com/drive/folders/1FGs81dBuuZ0Oq0BWtDpe4-Gq3M04D4Xs?usp=sharing" target='_blank'>
                        <button
                            className={`hover:cursor-pointer border-2 border-yellow-400 h-10 flex items-center justify-center 
                        transform transition duration-300 ease-in-out hover:-translate-y-1 rounded-md z-20 px-2 ${isScrolled ? "text-white" : "text-black"}`}
                        >
                            My Resume
                        </button>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Navbar
