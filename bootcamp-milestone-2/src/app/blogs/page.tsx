import React from "react";
import connectDB from "@/database/db";
import BlogPreview from "@/components/blogPreview";
import Blog from "@/database/blogSchema";
import Link from "next/link";
import Comment from "@/components/Comment";

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

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
      {blogs.map((blog) => (
        <div key={blog._id} className="blog-container">
          <Link href={`/blogs/${blog.slug}`}>
            <BlogPreview
              title={blog.name} // Use `name` instead of `title` to match the data
              description={blog.description}
              image={blog.image}
              date={new Date(blog.date).toLocaleDateString()}
            />
          </Link>
          <h3>Comments</h3>
          {blog.comments && blog.comments.length > 0 ? (
            blog.comments.map((comment: IComment, index: number) => (
              <Comment key={index} comment={comment} />
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Blogs;
