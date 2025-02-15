




// import React, { useState } from 'react';
// import { motion } from 'framer-motion'; 
// import logo from "../../assets/logo.png";
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import { useNavigate } from 'react-router-dom';

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isOptionOpen, setIsOptionOpen] = useState(false); 

//   const navigate = useNavigate();
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   function hendleroute(route) {
//     navigate(route);
//   }

//   const handleSelectClick = () => {
//     setIsOptionOpen(!isOptionOpen);
//   };

//   return (
//     <nav className="flex items-center justify-around gap-20 text-black bg-red-300 relative">
    
//       <div className="w-36 h-36">
//         <img src={logo} className="w-full h-full" alt="Logo" />
//       </div>

      
//       <ul className="hidden md:flex space-x-8">
//         <motion.li
//           className="text-xl cursor-pointer hover:text-gray-700"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           onClick={() => hendleroute("/")}
//         >
//           Home
//         </motion.li>
//         <motion.li
//           className="text-xl cursor-pointer hover:text-gray-700"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           onClick={() => hendleroute("/about")}
//         >
//           About Us
//         </motion.li>

//         <motion.li
//           className="text-xl cursor-pointer hover:text-gray-700"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           onClick={() => hendleroute("/ourservices")}
//         >
//           Our Services
//         </motion.li>
//         <motion.li
//           className="text-xl cursor-pointer hover:text-gray-700"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           onClick={() => hendleroute("/contact")}
//         >
//           Contact Us
//         </motion.li>

        
//         <motion.select
//           className="text-4xl cursor-pointer hover:text-teal-900 ring-hide"
//           onClick={handleSelectClick} 
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3, delay: 0.5 }}
//         >
//           Blog
//           <motion.option
//             value="1"
//             onClick={(e)=>{e.preventDefault();hendleroute("/blog")}}
//             className={`text-3xl font-bold ${isOptionOpen ? 'bg-red-200' : ''} focus:outline-none focus:ring-0`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: isHovered ? 1 : 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             Blog 
//           </motion.option>

//           <motion.option
//             value="2"
//             className={`text-3xl font-bold ${isOptionOpen ? 'bg-red-200' : ''} focus:outline-none focus:ring-0`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: isHovered ? 1 : 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             Community
//           </motion.option>
//         </motion.select>
//       </ul>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden flex items-center">
//         <button onClick={toggleMenu} className="text-2xl">
//           {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu with Framer Motion for smooth opening/closing */}
//       <motion.div
//         className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-gray-800 bg-opacity-50 z-50`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isMenuOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         style={{
//           pointerEvents: isMenuOpen ? 'auto' : 'none',
//         }}
//       >
//         <motion.div
//           className="flex flex-col items-center bg-white text-black w-full h-full pt-16 space-y-8"
//           initial={{ opacity: 0, x: '-100%' }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: '-100%' }}
//           transition={{ duration: 0.3, ease: 'easeInOut' }}
//         >
//           {/* Mobile Links */}
//           <motion.li
//             className="text-2xl cursor-pointer hover:text-teal-900"
//             onClick={() => hendleroute("/")}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3, delay: 0.1 }}
//           >
//             Home
//           </motion.li>
//           <motion.li
//             className="text-2xl cursor-pointer hover:text-teal-900"
//             onClick={() => hendleroute("/about")}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3, delay: 0.2 }}
//           >
//             About Us
//           </motion.li>

//           <motion.li
//             className="text-2xl cursor-pointer hover:text-teal-900"
//             onClick={() => hendleroute("/ourservices")}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3, delay: 0.4 }}
//           >
//             Our Services
//           </motion.li>

//           <motion.li
//             className="text-2xl cursor-pointer hover:text-teal-900"
//             onClick={() => hendleroute("/contact")}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3, delay: 0.5 }}
//           >
//             Contact Us
//           </motion.li>

//           {/* Blog Select Dropdown */}
//           <motion.select
//             className="text-2xl cursor-pointer hover:text-teal-900"
           
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3, delay: 0.5 }}
//           >
//             Blog
//             <motion.option
//               value="1"
//               onClick={() => hendleroute("/blog")}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: isHovered ? 1 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               Blog 
//             </motion.option>
//             <motion.option
//               value="2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: isHovered ? 1 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               Community
//             </motion.option>
//           </motion.select>
//         </motion.div>
//       </motion.div>
//     </nav>
//   );
// }



import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import logo from "../../assets/logo.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // State to keep track of selected option

  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function hendleroute(route) {
    navigate(route);
  }

  const handleSelectChange = (event) => {
    const route = event.target.value;
    setSelectedOption(route); // Update the selected option
    hendleroute(route); // Trigger navigation to the selected route
  };

  return (
    <nav className="flex items-center justify-around gap-20 text-black bg-red-300 relative">
      <div className="w-36 h-36">
        <img src={logo} className="w-full h-full" alt="Logo" />
      </div>

      <ul className="hidden md:flex space-x-8">
        <motion.li
          className="text-xl cursor-pointer hover:text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => hendleroute("/")}
        >
          Home
        </motion.li>
        <motion.li
          className="text-xl cursor-pointer hover:text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => hendleroute("/about")}
        >
          About Us
        </motion.li>
        <motion.li
          className="text-xl cursor-pointer hover:text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => hendleroute("/ourservices")}
        >
          Our Services
        </motion.li>
        <motion.li
          className="text-xl cursor-pointer hover:text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={() => hendleroute("/contact")}
        >
          Contact Us
        </motion.li>

        <motion.select
          className="text-4xl cursor-pointer hover:text-teal-900 focus:ring-hide"
          value={selectedOption}
          onChange={handleSelectChange}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <motion.option
            value="/blog"
            className={`text-3xl font-bold ${isHovered ? 'bg-red-200' : ''} focus:outline-none focus:ring-0`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Blog
          </motion.option>
          <motion.option
            value="/community"
            className={`text-3xl font-bold ${isHovered ? 'bg-red-200' : ''} focus:outline-none focus:ring-0`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Community
          </motion.option>
        </motion.select>
      </ul>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

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
            onClick={() => hendleroute("/")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Home
          </motion.li>
          <motion.li
            className="text-2xl cursor-pointer hover:text-teal-900"
            onClick={() => hendleroute("/about")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            About Us
          </motion.li>
          <motion.li
            className="text-2xl cursor-pointer hover:text-teal-900"
            onClick={() => hendleroute("/ourservices")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Our Services
          </motion.li>
          <motion.li
            className="text-2xl cursor-pointer hover:text-teal-900"
            onClick={() => hendleroute("/contact")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            Contact Us
          </motion.li>

          <motion.select
            className="text-2xl cursor-pointer hover:text-teal-900"
            onChange={handleSelectChange}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <motion.option
              value="/blog"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              Blog
            </motion.option>
            <motion.option
              value="/community"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              Community
            </motion.option>
          </motion.select>
        </motion.div>
      </motion.div>
    </nav>
  );
}
