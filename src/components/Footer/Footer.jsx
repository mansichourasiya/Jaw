import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-800 text-white py-10'>
      <div className='container mx-auto px-6'>
        
        {/* Footer Top Section with Address and Navbar Links */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          
          {/* Address Section */}
          <div>
            <h2 className='text-xl font-semibold mb-4'>Our Address</h2>
            <p>123 Main Street,</p>
            <p>City, State, 12345</p>
            <p>Country</p>
          </div>

          {/* Navbar Links Section */}
          <div>
            <h2 className='text-xl font-semibold mb-4'>Quick Links</h2>
            <ul>
              <li><a href="#" className='hover:text-indigo-400'>Home</a></li>
              <li><a href="#about" className='hover:text-indigo-400'>About Us</a></li>
              <li><a href="#services" className='hover:text-indigo-400'>Services</a></li>
              <li><a href="#contact" className='hover:text-indigo-400'>Contact</a></li>
            </ul>
          </div>

          {/* Location Section */}
          <div>
            <h2 className='text-xl font-semibold mb-4'>Find Us</h2>
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=Space+Needle,Seattle+WA&key=YOUR_GOOGLE_MAPS_API_KEY"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>

          {/* Social Media Links Section */}
          <div>
            <h2 className='text-xl font-semibold mb-4'>Follow Us</h2>
            <div className='flex space-x-4'>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-indigo-400'>
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-indigo-400'>
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-indigo-400'>
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:text-indigo-400'>
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>

        </div>
        
        {/* Footer Bottom Section with Copyright */}
        <div className='mt-10 text-center'>
          <p className='text-sm'>© 2025 Your Company. All Rights Reserved.</p>
        </div>

      </div>
    </div>
  )
}
