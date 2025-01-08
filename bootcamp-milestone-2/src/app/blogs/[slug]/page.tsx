import React from "react";
import Image from "next/image";
import Comment from "@/components/Comment";

type Props = {
  params: { slug: string };
};

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
      }/api/Blogs/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params }: Props) {
  const slug = (await Promise.resolve(params)).slug;
  const blog = await getBlog(slug);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div>
      <h1>{blog.name}</h1> {/* Update this to use blog.name */}
      <p>{blog.description}</p>
      <p>Published on: {new Date(blog.date).toLocaleDateString()}</p>
      <img src={blog.image} alt={blog.name} />
      <div className="comments-section">
        <h3>Comments</h3>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}
