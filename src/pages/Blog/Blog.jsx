import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  // Updated blog posts with more design-focused topics
  const blogPosts = [
    {
      id: 1,
      title: "Mastering Adobe Illustrator: A Beginner's Guide",
      description: "Learn how to use Adobe Illustrator to create stunning vector graphics and illustrations. A must-read for any graphic designer!",
      link: "/blog/illustrator-guide",
      image: "https://images.unsplash.com/photo-1739323006029-2d8452a47df6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Exploring the Latest Trends in Web Design",
      description: "Stay updated with the latest web design trends, including minimalism, mobile-first design, and bold typography.",
      link: "/blog/web-design-trends",
      image: "https://images.unsplash.com/photo-1738071545459-e19435ae37e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Creating Stunning Branding for Clients",
      description: "Learn the essentials of branding and how to create a unique identity for your clients that stands out in today's market.",
      link: "/blog/branding-for-clients",
      image: "https://plus.unsplash.com/premium_photo-1673716788511-f5a5fd609553?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Top 5 Graphic Design Tools Every Designer Needs",
      description: "From Figma to Photoshop, discover the tools that every graphic designer should have in their arsenal to streamline their workflow.",
      link: "/blog/graphic-design-tools",
      image: "https://images.unsplash.com/photo-1739389716979-d62f1d6fe559?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="container mx-auto py-10">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-teal-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Design Blog
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Blog Post Image */}
            <div className="relative mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Blog Post Content */}
            <h2 className="text-2xl font-semibold mb-4 text-teal-900">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            
            {/* Read More Button */}
            <button
              onClick={() => navigate(post.link)}
              className="text-teal-600 hover:underline font-semibold"
            >
              Read More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
