import React from "react";
import BlogPreview from "@/components/blogPreview";

const blogs = [
  {
    name: "Green Thai Tea",
    description:
      "Discover the art of crafting the perfect Green Thai Tea blend.",
    image: "/greenthaitea.webp", // Ensure this image is in your public directory
    posted: "January 4, 2025",
  },
  {
    name: "Viet coffee",
    description: "How to make viet coffee",
    image: "/vietcoffee.jpg", // Ensure this image is in your public directory
    posted: "January 4, 2025",
  },
];

const Blogs = () => {
  return (
    <div>
      {blogs.map((blog, index) => (
        <BlogPreview
          title={blog.name}
          description={blog.description}
          image={blog.image}
          date={blog.posted}
        />
      ))}
    </div>
  );
};

export default Blogs;
