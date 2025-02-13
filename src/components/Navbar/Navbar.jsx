import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import logo from "../../assets/logo.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function hendleroute(route){
       navigate(route)  
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-green-900 via-teal-900 to-yellow-900 text-white">
      {/* Logo */}
      <img src={logo} className="w-44 h-44" alt="Logo" />
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        <motion.li 
          className="text-xl cursor-pointer hover:text-teal-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={()=>hendleroute("/")}
        >
          Home
        </motion.li>
        <motion.li 
          className="text-xl cursor-pointer hover:text-teal-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={()=>hendleroute("/about")}
        >
          About Us
        </motion.li>
      
        <motion.li 
          className="text-xl cursor-pointer hover:text-teal-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={()=>hendleroute("/ourservices")}
        >
          Our Services
        </motion.li>
        <motion.li 
          className="text-xl cursor-pointer hover:text-teal-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={()=>hendleroute("/contact")}
        >
          Contact Us
        </motion.li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu with Framer Motion for smooth opening/closing */}
      <motion.div
        className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-gray-800 bg-opacity-50 z-50`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
      >
        <motion.div
          className="flex flex-col items-center bg-white text-black w-full h-full pt-16 space-y-8"
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <motion.li
            className="text-2xl cursor-pointer hover:text-teal-900"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Home
          </motion.li>
          <motion.li
            className="text-2xl cursor-pointer hover:text-teal-900"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            About Us
          </motion.li>
          <motion.li
            className="text-2xl cursor-pointer hover:text-teal-900"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Our Work
          </motion.li>
          <motion.li
            className="text-2xl cursor-pointer hover:text-teal-900"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Our Services
          </motion.li>
          <motion.li
            className="text-2xl cursor-pointer hover:text-teal-900"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            Contact Us
          </motion.li>
        </motion.div>
      </motion.div>
    </nav>
  );
}
