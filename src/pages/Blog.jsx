import React from "react";
import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

const Blog = () => {
  return (
    <Layout>

      <img
        src="/blog/mainimg.jpg"
        className="w-full h-[650px] object-cover"
      />

      <h1 className="text-5xl pt-20 text-[#A98066] px-10">
        Featured Stories
      </h1>

      <div className="container px-5 py-24 mx-auto">

        <div className="flex flex-wrap -m-4">

          {blogs.map((blog) => (
            <div key={blog.id} className="p-4 md:w-1/3">
              <BlogCard blog={blog} />
            </div>
          ))}

        </div>

      </div>

      {/* Last Div */}
    <div className="bg-[#DDD3CC] w-full md:w-7/12 mx-auto mb-16 p-6 md:p-10 flex flex-col md:flex-row items-center">
    <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img src='/blog/lastimg.jpg' className="w-full h-auto object-cover" alt='Interior Design' />
    </div>
    <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0 text-center md:text-left">
        <p className="text-2xl md:text-4xl font-normal">Interior design made simple</p>
        <button className="bg-black border-2 border-black text-white py-2 px-6 md:px-10 mt-4 md:mt-8 rounded-full font-extralight text-sm md:text-base">
            Take Our Style Quiz
        </button>
    </div>
    </div>
    </Layout>
  );
};

export default Blog;

