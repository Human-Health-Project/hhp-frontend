import { notFound } from "next/navigation";
import BlogPost from "@/views/BlogPost";
import { getPostBySlug, getAllPosts } from "@/services/posts";

// Static export: pre-build one HTML page per slug at build time.
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}
