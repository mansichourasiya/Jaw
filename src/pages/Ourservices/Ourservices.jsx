import React from 'react'
import logo from "../../assets/cloud IT copy.jpg"

export default function Ourservices() {
  return (
    <div className="w-full h-full bg-gray-100">
  <div className="p-6 sm:p-8 md:p-10 lg:p-12 py-10  rounded-lg w-full max-w-3xl">
    <p className="text-base sm:text-lg md:text-xl lg:text-5xl font-stretch-60% text-gray-800 leading-relaxed">
      We specialize in delivering innovative, high-impact branding solutions tailored to your needs.
    </p>
  </div>

   <div className='p-6 sm:p-8 md:p-10 lg:p-12 py-10  rounded-lg w-full '>
    <h2>Logo Design: </h2>
    <p className='text-base sm:text-lg md:text-xl lg:text-1xl font-stretch-60% text-gray-800 leading-relaxed'>
        Memorable, timeless logos that define your brand.
        </p>

   <div className='flex align-middle justify-center gap-5'>
      <div className='w-96 h-96 rounded-sm border-2 border-black'>
       <div className='w-full h-62'>
       <img src={logo} alt=""  className='w-full h-full'/>
       </div>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eum!</p>
      </div>
      <div className='w-96 h-96 rounded-sm border-2 border-black'></div>
      <div className='w-96 h-96 rounded-sm border-2 border-black'></div>
      <div className='w-96 h-96 rounded-sm border-2 border-black'></div>
   </div>

   </div>
    
   <div className='p-6 sm:p-8 md:p-10 lg:p-12 py-10  rounded-lg w-full'>
    <h2>Video Creations: </h2>
    <p className='text-base sm:text-lg md:text-xl lg:text-1xl font-stretch-60% text-gray-800 leading-relaxed'>
    Engaging small-format videos for events, festivals, and invitations.
        </p>

        <div className='flex align-middle justify-center gap-5'>
      <div className='w-96 h-96 rounded-sm border-2 border-black'></div>
      <div className='w-96 h-96 rounded-md border-2 border-black'></div>
      <div className='w-96 h-96 rounded-md border-2 border-black'></div>
      <div className='w-96 h-96 rounded-md border-2 border-black'></div>
   </div>

   </div>



   <div className='p-6 sm:p-8 md:p-10 lg:p-12 py-10  rounded-lg w-full'>
    <h2>Print Materials: </h2>
    <p className='text-base sm:text-lg md:text-xl lg:text-1xl font-stretch-60% text-gray-800 leading-relaxed'>
    Menu cards, banners, posters, and more.
        </p>

        <div className='flex align-middle justify-center gap-5'>
      <div className='w-96 h-96 rounded-md border-2 border-black'></div>
      <div className='w-96 h-96 rounded-md border-2 border-black'></div>
      <div className='w-96 h-96 rounded-md border-2 border-black'></div>
      <div className='w-96 h-96 rounded-md border-2 border-black'></div>
   </div>


   </div>


   <div className='p-6 sm:p-8 md:p-10 lg:p-12 py-10  rounded-lg w-full'>
    <h2>Event Graphics: </h2>
    <p className='text-base sm:text-lg md:text-xl lg:text-1xl font-stretch-60% text-gray-800 leading-relaxed'>
    Captivating designs for weddings, festivals, and corporate events.
        </p>

        <div className='flex align-middle justify-center gap-5'>
      <div className='w-96 h-96 rounded-md border-2 border-black'></div>
      <div className='w-96 h-96 rounded-md border-2 border-black'></div>
      <div className='w-96 h-96 rounded-md border-2 border-black'></div>
      <div className='w-96 h-96 rounded-md border-2 border-black'></div>
   </div>


   </div>


   <div className='p-6 sm:p-8 md:p-10 lg:p-12 py-10  rounded-lg w-full max-w-3xl'>
    <h2>Custom Creations:</h2>
    <p className='text-base sm:text-lg md:text-xl lg:text-1xl font-stretch-60% text-gray-800 leading-relaxed'>
    Tailored solutions for all your branding needs.
    Affordable and budget-friendly, our work speaks for itself.
        </p>
   </div>



</div>

  )
}
