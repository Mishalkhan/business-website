import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`}>
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition duration-300">

        <img
          src={blog.image}
          alt={blog.title}
          className="lg:h-48 md:h-36 w-full object-contain"
        />

        <div className="p-6">
          <h2 className="text-sm text-gray-400">FEATURED</h2>

          <p className="text-2xl">
            {blog.title}
          </p>
        </div>

      </div>
    </Link>
  );
};

export default BlogCard;