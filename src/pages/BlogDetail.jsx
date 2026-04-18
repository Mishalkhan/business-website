import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { blogs } from "../data/blogs";

const BlogDetail = () => {

  const { id } = useParams();

  const blog = blogs.find((b) => b.id === parseInt(id));

  return (
    <Layout>

      <div className="max-w-5xl mx-auto px-6 py-20">

        <img
          src={blog.image}
          className="w-full h-[450px] object-cover rounded-lg"
        />

        <h1 className="text-4xl mt-10 font-semibold">
          {blog.title}
        </h1>

        <p className="mt-6 text-gray-600 leading-relaxed">
          {blog.content}
        </p>

      </div>

    </Layout>
  );
};

export default BlogDetail;