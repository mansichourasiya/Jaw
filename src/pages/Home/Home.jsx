import React, { useEffect,useState } from 'react';
import { motion } from 'framer-motion';  
// import homeimg from "../../assets/home-img.jpg";
import homeimg from "../../assets/banner_img.jpeg";

import video from "../../assets/GRAPHICS.mp4";
import bg_img from "../../assets/bg_img2.jpg"
import { useRef } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollerout,setIsScrollerout] = useState(false);
  
  const ref = useRef()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } 
      else if (window.scrollY < 400) { 
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
      else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

   
   
  }, []);
  return (
    <div
    ref={ref}
    className="w-full h-screen relative"
    >

      <motion.div 
        className="relative w-full h-[90vh]"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
      >
    
        <img src={homeimg} alt="Banner" className="w-full h-full object-cover absolute top-0 left-0 z-0" />
        
        <div className="relative w-full h-full z-10 flex flex-col justify-center items-start   text-white px-6 md:px-12 py-20 md:py-32">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 sm:mb-8 md:mb-10 text-black"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            ref={ref}
          >
            "Making Wow the New Normal"
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed mt-4 sm:mt-6 md:mt-10 max-w-3xl text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            At Jaw Drop Branding Company, we craft bold, innovative designs that captivate and connect. Our work transforms brands into unforgettable experiences, ensuring your story stands out in every moment. Let's redefine excellence, spark conversations, and WOW your everyday standard.
          </motion.p>
          <motion.button 
            className='px-6 py-3 text-black bg-emerald-300 rounded-md mt-8 sm:mt-10 md:mt-12 hover:bg-emerald-400 *:'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Explore more
          </motion.button>
        </div>
      </motion.div>

<div 
// style={
//   isScrolled ? { backgroundImage:`url(${bg_img})`, backgroundSize: 'cover',backgroundRepeat:"no-repeat", backgroundPosition: 'center', transition:"4s"} : {}
// }
className="h-auto flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
    
   
    <motion.div 
      className="flex flex-col md:flex-row items-center gap-10 justify-between m-5 w-full"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 gap-5 h-96 rounded-sm">
        <img 
          src="https://plus.unsplash.com/premium_photo-1681399960857-f3bf93e87a03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpY3MlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" 
          className="w-full h-full object-cover rounded-sm" 
          alt="Image"
        />
      </div>
      <motion.div 
        className="text-base sm:text-lg md:text-xl md:w-1/2 lg:text-2xl xl:text-3xl font-light leading-relaxed"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio modi est ratione! Sunt dicta totam, explicabo temporibus harum et deleniti!
      </motion.div>
    </motion.div>

    {/* Second Section */}
    <motion.div 
      className="flex flex-col md:flex-row items-center gap-5 justify-between m-5 w-full"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-base sm:text-lg md:text-xl md:w-1/2 lg:text-2xl xl:text-3xl font-light leading-relaxed "
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero dignissimos expedita asperiores obcaecati officia voluptas doloribus sequi, a quidem.
      </motion.div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 h-96 ">
        <img 
          src="https://images.unsplash.com/photo-1668242372382-9e6282c63578?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyYXBoaWNzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" 
          className="w-full h-full object-cover " 
          alt="Image"
        />
      </div>
    </motion.div>

    {/* Third Section */}
    <motion.div 
      className="flex flex-col md:flex-row items-center gap-5 justify-between m-5 w-full"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 gap-5 h-96 ">
        <img 
          src="https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.webp?a=1&b=1&s=612x612&w=0&k=20&c=i8vHSeffMXOknM1iu8QDnSEDuNg0nOoLjJvP-KjdRoE=" 
          className="w-full h-full object-cover " 
          alt="Image"
        />
      </div>
      <motion.div 
        className="text-base sm:text-lg md:text-xl lg:text-2xl md:w-1/2 xl:text-3xl font-light leading-relaxed "
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur necessitatibus, repudiandae deserunt neque numquam tempora eaque sunt earum sapiente corporis?
      </motion.div>
    </motion.div>

    {/* Fourth Section */}
    <motion.div 
      className="flex flex-col md:flex-row items-center gap-5 justify-between m-5 w-full"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-base sm:text-lg md:text-xl lg:text-2xl md:w-1/2 xl:text-3xl font-light leading-relaxed "
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at nisi distinctio obcaecati quia a dolore eius fugiat soluta voluptates!
      </motion.div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 h-96 ">
        <img 
          src="https://plus.unsplash.com/premium_photo-1661817214148-2d4cf768a7c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JhcGhpY3MlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" 
          className="w-full h-full object-cover " 
          alt="Image"
        />
      </div>
    </motion.div>


    <motion.div 
        className="md:h-full h-96 w-full rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <video 
          src={video} 
          autoPlay 
          muted
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </motion.div>

  </div> 

  <motion.div className="w-full p-6 sm:p-8 md:p-10 lg:p-12">
  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed text-white">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum dolorem itaque laboriosam doloribus, quis nulla sint nostrum officia ullam expedita, laudantium, similique fugiat odit deserunt id quae. Et autem voluptate nostrum mollitia? Quisquam quae facere, ipsum odit quibusdam neque.
  </h3>
</motion.div>

    </div>
  );
}