import Blog from "@/views/Blog";
import { getAllPosts, extractCategories } from "@/services/posts";

export const metadata = {
  title: "Blog | Human Health Project",
  description:
    "Articles and patient education from the Human Health Project team.",
};

export default async function Page() {
  const posts = await getAllPosts();
  const categories = extractCategories(posts);
  return <Blog posts={posts} categories={categories} />;
}
