import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Blog = {
  key: Number;
  title: string;
  description: string; // for preview
  image: string; // url for string in public
  date: Date;
  slug: string;
};

// mongoose schema
const blogSchema = new Schema<Blog>({
  key: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, required: false, default: () => new Date() },
  slug: { type: String, required: true, unique: true },
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
