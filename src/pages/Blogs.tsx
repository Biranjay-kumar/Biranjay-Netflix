import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev, FaLaptopCode } from 'react-icons/fa';

const blogs = [
  {
    title: "Optimizing React & Next.js for Performance: Tips and Best Practices",
    platform: "Personal Blog",
    icon: <FaLaptopCode />,
    description:
      "Explore practical strategies to enhance the performance of your React and Next.js applications, including SSR and code splitting.",
  },
  {
    title: "Mastering RESTful APIs with Node.js and MongoDB",
    platform: "Personal Blog",
    icon: <FaLaptopCode />,
    description:
      "A comprehensive guide to designing and building scalable RESTful APIs using Node.js and MongoDB, covering best practices and code organization.",
  },
];


const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
            </>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
