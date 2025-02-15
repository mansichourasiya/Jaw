import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { div } from 'motion/react-client';

function About() {
  return (
    <div className='bg-red-50'> 
    <Carousel>
      <Carousel.Item active>
        <img
          className="d-block w-full"
          src="https://www.osgusa.com/wp-content/uploads/shutterstock_380124070-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="bg-opacity-50 bg-black text-white p-4 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-semibold">First slide label</h3>
          <p className="text-sm sm:text-base">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-full"
          src="https://wallpapers.com/images/hd/graphic-design-with-different-visual-textures-67jn8p3osmcvp8lv.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="bg-opacity-50 bg-black text-white p-4 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-semibold">Second slide label</h3>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-full"
          src="https://wallpapercave.com/wp/wp8376745.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="bg-opacity-50 bg-black text-white p-4 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-semibold">Third slide label</h3>
          <p className="text-sm sm:text-base">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



    <div className="px-4 sm:px-6 md:px-8 lg:px-10 w-3/4 mt-10 m-auto py-10 ">
  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-red-950 font-serif">
    We are a passionate team of creative minds specializing in bold, innovative graphic solutions
    that elevate brands to new heights. From crafting stunning visuals to building unforgettable
    identities, we bring a perfect blend of creativity and precision to every project. Whether it’s
    designing logos, banners, or eye-catching campaigns, we ensure every detail reflects our
    dedication to excellence.
  </p>
</div>

<div className='mx-4 sm:mx-8 md:mx-16 lg:mx-40 p-6 sm:p-8 md:p-10 py-10 rounded-lg w-full'>
  <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 text-red-950'>
    Why Choose Us
  </h2>

  <p className='text-xl sm:text-2xl md:text-3xl font-semibold mt-6 font-stretch-100% text-red-950'>
    Creative Excellence: 
  </p>

  <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-sans text-gray-600 leading-relaxed mt-3'>
    We blend innovation and precision to deliver designs that captivate.
  </p>


  <p className='text-xl sm:text-2xl md:text-3xl font-semibold mt-6 font-stretch-100% text-red-950'>
  Customer-Centric Approach: 
  </p>

  <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-sans text-gray-600 leading-relaxed mt-3'>
  Your vision drives our creativity; every project is uniquely
  tailored.
  </p>


  <p className='text-xl sm:text-2xl md:text-3xl font-semibold mt-6 font-stretch-100% text-red-950'>
  Young, Energetic Team:
  </p>

  <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-sans text-gray-600 leading-relaxed mt-3'>
  Passionate professionals dedicated to pushing boundaries.
  </p>


  <p className='text-xl sm:text-2xl md:text-3xl font-semibold mt-6 font-stretch-100% text-red-950'>
  Timely Delivery:
  </p>

  <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-sans text-gray-600 leading-relaxed mt-3'>
  Your time is valuable, and we ensure every project is delivered on
  time.
  </p>


  <p className='text-xl sm:text-2xl md:text-3xl font-semibold mt-6 font-stretch-100% text-red-950'>
  Cutting-Edge Technology: 
  </p>

  <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-sans text-gray-600 leading-relaxed mt-3'>
  We stay ahead with the latest tools to offer unmatched
  quality.
  </p>


</div>


 </div>
  );
}

export default About;
