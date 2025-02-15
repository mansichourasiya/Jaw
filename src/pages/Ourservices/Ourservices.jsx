import React from 'react'
import logo2 from "../../assets/cloud IT copy.jpg"
import video from "../../assets/GRAPHICS.mp4"

export default function Ourservices() {

  const logo =[
    {
      image :logo2,
      videos: video,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eum!'
    },
    
    {
      image :logo2,
      videos: video,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eum!'
    },
    {
      image :logo2,
      videos: video,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eum!'
    },
    {
      image :logo2,
      videos: video,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eum!'
    },

  ]

  return (
    <div className="w-full h-full bg-red-50">
  <div className="p-6 sm:p-8 md:p-10 lg:p-12 py-10  rounded-lg w-full max-w-3xl">
    <p className="text-base sm:text-lg md:text-xl lg:text-6xl font-stretch-60% text-red-950 leading-relaxed ">
      We specialize in delivering innovative, high-impact branding solutions tailored to your needs.
    </p>
  </div>

   <div className='p-6 sm:p-8 md:p-10 lg:p-12 py-10  rounded-lg w-full text-red-950'>
    <h2>Logo Design: </h2>
    <p className=' sm:text-lg md:text-xl lg:text-1xl font-stretch-60% text-gray-600 leading-relaxed'>
        Memorable, timeless logos that define your brand.
        </p>



      
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 align-middle justify-center'>
  {
    logo.map((item, index) => (
      <div className='w-full h-auto rounded-sm shadow-xl' key={index}>
        <div className='w-full h-68'>
          <img src={item.image} alt="" className='w-full h-full object-contain' />
        </div>
        <p className='text-gray-600 text-center  sm:text-lg md:text-xl lg:text-2xl xl:text-lg p-1 line-clamp-2 font-sans'>
          {item.content}
        </p>
      </div>
    ))
  }
</div>




  

   </div>
    
   <div className='p-6 sm:p-8 md:p-10 lg:p-12 py-10  rounded-lg w-full text-red-950 '>
    <h2>Video Creations: </h2>
    <p className='text-base sm:text-lg md:text-xl lg:text-1xl font-stretch-60% text-gray-600 leading-relaxed'>
    Engaging small-format videos for events, festivals, and invitations.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 align-middle justify-center'>
  {
    logo.map((item, index) => (
      <div className='w-full h-96 rounded-sm shadow-xl' key={index}>
        <div className='w-full h-72'>
         <video src={item.videos} muted loop autoPlay className='w-full h-full'></video>
        </div>
        <p className='text-gray-600 text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-lg p-1 line-clamp-2'>
          {item.content}
        </p>
      </div>
    ))
  }
</div>

   </div>



   <div className='p-6 sm:p-8 md:p-10 lg:p-12 py-10  rounded-lg w-full text-red-950'>
    <h2>Print Materials: </h2>
    <p className='text-base sm:text-lg md:text-xl lg:text-1xl font-stretch-60% text-gray-800 leading-relaxed'>
    Menu cards, banners, posters, and more.
        </p>



   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 align-middle justify-center'>
  {
    logo.map((item, index) => (
      <div className='w-full h-auto rounded-sm shadow-xl' key={index}>
        <div className='w-full h-68'>
          <img src={item.image} alt="" className='w-full h-full object-contain' />
        </div>
        <p className='text-gray-600 text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-lg p-1 line-clamp-2'>
          {item.content}
        </p>
      </div>
    ))
  }
</div>



   </div>


   <div className='p-6 sm:p-8 md:p-10 lg:p-12 py-10  rounded-lg w-full text-red-950'>
    <h2>Event Graphics: </h2>
    <p className='text-base sm:text-lg md:text-xl lg:text-1xl font-stretch-60% text-gray-800 leading-relaxed'>
    Captivating designs for weddings, festivals, and corporate events.
        </p>



 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 align-middle justify-center'>
  {
    logo.map((item, index) => (
      <div className='w-full h-auto rounded-sm shadow-xl' key={index}>
        <div className='w-full h-68'>
          <img src={item.image} alt="" className='w-full h-full object-contain' />
        </div>
        <p className='text-gray-600 text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-lg p-1 line-clamp-2'>
          {item.content}
        </p>
      </div>
    ))
  }
</div>



   </div>


   {/* <div className='p-6 sm:p-8 md:p-10 lg:p-12 py-10  rounded-lg w-full max-w-3xl'>
    <h2>Custom Creations:</h2>
    <p className='text-base sm:text-lg md:text-xl lg:text-1xl font-stretch-60% text-gray-800 leading-relaxed'>
    Tailored solutions for all your branding needs.
    Affordable and budget-friendly, our work speaks for itself.
        </p>
   </div> */}



</div>

  )
}
