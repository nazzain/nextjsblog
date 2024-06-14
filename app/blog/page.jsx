
"use client"
import React, { useState, useEffect } from "react";
import FirstBlog from "@/components/FirstBlog";
import OtherBlogs from "@/components/OtherBlogs";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const firstBlog = blogs && blogs[0];
  const otherBlogs = blogs?.length > 0 && blogs.slice(1);

  return (
    <div>
      {blogs?.length > 0 ? (
        <div className="container">
          <h2 className="text-center my-10">
            <span className="text-primaryColor">Trending</span> Blog
          </h2>
          <FirstBlog firstBlog={firstBlog} />
          <OtherBlogs otherBlogs={otherBlogs} />
        </div>
      ) : (
        <h3>No Blogs...</h3>
      )}
    </div>
  );
};

export default Blog;