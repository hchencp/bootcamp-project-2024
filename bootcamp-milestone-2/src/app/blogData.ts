export type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Exploring the Beautiful Beaches of Hawaii",
    date: "2024-06-15",
    description:
      "Join us on a journey to explore the stunning beaches of Hawaii, from the crystal-clear waters of Waikiki to the serene shores of Maui.",
    image: "/Users/hc/Desktop/bootcamp-project-2024/blogs/green_thai_tea.html", // Replace with a real image URL
    imageAlt: "A beautiful beach in Hawaii with clear blue water",
    slug: "exploring-hawaii-beaches",
  },
  {
    title: "Top 10 Hiking Trails in California",
    date: "2024-07-01",
    description:
      "Discover the best hiking trails in California, perfect for both beginners and experienced hikers.",
    image: "/Users/hc/Desktop/bootcamp-project-2024/blogs/viet_coffee.html", // Replace with a real image URL
    imageAlt: "A scenic hiking trail in California",
    slug: "top-hiking-trails-california",
  },
];

export default blogs;
