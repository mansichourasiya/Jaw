import React from 'react';
import { motion } from 'framer-motion';

const Community = () => {

  return (
    <div className="  py-10 text-red-950 bg-red-50">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Community
      </motion.h1>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 container">
        <h2 className="text-2xl font-semibold mb-4 text-red-950">Join Our Community</h2>
        <p className="text-gray-600 mb-4">
          Be part of an exciting community of developers, designers, and tech enthusiasts. Share knowledge, resources, and grow your skills with us!
        </p>
        <p className="text-gray-600 mb-4">
          We host monthly meetups, webinars, and provide an exclusive Slack group to foster learning and collaboration.
        </p>
        <button className="bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition-colors duration-300">
          Join Now
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg container">
        <h2 className="text-2xl font-semibold mb-4 text-red-950">Community Resources</h2>
        <ul className="space-y-4">
          <li className="text-gray-600">Access to exclusive tutorials and blog posts.</li>
          <li className="text-gray-600">Regular virtual events and hackathons.</li>
          <li className="text-gray-600">One-on-one mentorship with industry experts.</li>
          <li className="text-gray-600">Community-run projects and collaborations.</li>
        </ul>
      </div>
    </div>
  );
};

export default Community;
