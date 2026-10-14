import { notFound } from "next/navigation";
import BlogPost from "@/views/BlogPost";
import { getPostBySlug, getAllPosts } from "@/services/posts";

// Static export: pre-build one HTML page per slug at build time.
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Each post gets its own title, description and a self-referencing canonical
// at its one preferred URL (the same URL as in sitemap.xml).
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const firstParagraph = post.paragraphs.find((p) => p.trim()) || "";
  const description =
    firstParagraph.length > 160
      ? `${firstParagraph.slice(0, 157).replace(/\s+\S*$/, "")}…`
      : firstParagraph;

  return {
    title: `${post.title} | Human Health Project`,
    ...(description && { description }),
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}
