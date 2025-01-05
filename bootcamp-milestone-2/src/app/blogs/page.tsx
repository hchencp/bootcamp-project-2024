import React from "react";
import connectDB from "@/database/db";
import BlogPreview from "@/components/blogPreview";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

const Blogs = async () => {
  const blogs = await getBlogs();

  if (!blogs) {
    return <p>Failed to load blogs.</p>;
  }

  if (blogs.length === 0) {
    return <p>No blogs found.</p>;
  }

  return (
    <div>
      {blogs.map((blog, index) => (
        <BlogPreview
          key={index}
          title={blog.name}
          description={blog.description}
          image={blog.image}
          date={new Date(blog.date).toLocaleDateString()}
        />
      ))}
    </div>
  );
};

export default Blogs;
