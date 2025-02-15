// import { div } from 'motion/react-client'
// import React from 'react'

// export default function Contact() {
//   return (
   
//     <div className='flex justify-center align-middle gap-5 m-10'>
//       <div className='w-[90vh] h-[100vh] border-2 border-black rounded-sm'>
//         <img src="https://thumbs.dreamstime.com/b/editable-vector-illustration-indian-shield-crossed-talwar-swords-vector-background-indian-shield-crossed-talwar-161296640.jpg" className='w-full h-full p-20'  alt="" />
//       </div>
//       <div className='w-[90vh] h-[100vh] border-2 border-black rounded-sm mx-auto'>
//     <div className='container mx-auto p-6'>
//       <h2 className='text-3xl font-semibold text-center mb-8'>Contact Us</h2>
      
//       <form className='max-w-3xl mx-auto'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
//           {/* First Name */}
//           <div>
//             <label htmlFor="first-name" className='block text-lg font-medium text-gray-700'>
//               First Name
//             </label>
//             <input
//               type="text"
//               id="first-name"
//               name="first-name"
//               className='mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
//               required
//             />
//           </div>

//           {/* Last Name */}
//           <div>
//             <label htmlFor="last-name" className='block text-lg font-medium text-gray-700'>
//               Last Name
//             </label>
//             <input
//               type="text"
//               id="last-name"
//               name="last-name"
//               className='mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
//               required
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label htmlFor="phone" className='block text-lg font-medium text-gray-700'>
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               className='mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className='block text-lg font-medium text-gray-700'>
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className='mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
//               required
//             />
//           </div>
//         </div>

//         {/* Message */}
//         <div className='mt-6'>
//           <label htmlFor="message" className='block text-lg font-medium text-gray-700'>
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows="6"
//             className='mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
//             required
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <div className='mt-6'>
//           <button
//             type="submit"
//             className='w-full sm:w-auto py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
//     </div>

//   )
// }



import { motion } from 'framer-motion';
import React from 'react';

export default function Contact() {
  return (
    <div className='flex justify-center align-middle gap-5 m-10'>
      
      {/* Left Box with Image */}
      <motion.div
        className='w-[90vh] h-[100vh] rounded-sm'
        initial={{ opacity: 0, x: -200 }} // Initial state
        animate={{ opacity: 1, x: 0 }} // Final state (slide in from left)
        transition={{ duration: 1 }} // Smooth transition over 1 second
      >
        <img
          src="https://thumbs.dreamstime.com/b/editable-vector-illustration-indian-shield-crossed-talwar-swords-vector-background-indian-shield-crossed-talwar-161296640.jpg"
          className='w-full h-full p-20'
          alt="Indian Shield"
        />
      </motion.div>

      {/* Right Box with Contact Form */}
      <motion.div
        className='w-[90vh] h-[100vh]  rounded-sm mx-auto'
        initial={{ opacity: 0, scale: 0.5 }} // Initial state (faded and smaller)
        animate={{ opacity: 1, scale: 1 }} // Final state (fully visible and normal size)
        transition={{ duration: 1 }} // Smooth transition over 1 second
      >
        <div className='container mx-auto p-6'>
          <h2 className='text-3xl font-semibold text-center mb-8'>Contact Us</h2>
          
          <form className='max-w-3xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
    
              <div>
                <label htmlFor="first-name" className='block text-lg font-medium text-gray-700'>
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className='mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  required
                />
              </div>

         
              <div>
                <label htmlFor="last-name" className='block text-lg font-medium text-gray-700'>
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className='mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  required
                />
              </div>

         
              <div>
                <label htmlFor="phone" className='block text-lg font-medium text-gray-700'>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className='mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  required
                />
              </div>

       
              <div>
                <label htmlFor="email" className='block text-lg font-medium text-gray-700'>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className='mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  required
                />
              </div>
            </div>

     
            <div className='mt-6'>
              <label htmlFor="message" className='block text-lg font-medium text-gray-700'>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className='mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
                required
              ></textarea>
            </div>

   
            <div className='mt-6'>
              <button
                type="submit"
                className='w-full sm:w-auto py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
