import Link from "next/link";
import "@/views/BlogPost.css";

export default function NotFound() {
  return (
    <main className="post-page">
      <div className="post-container">
        <h1 className="post-title">Post not found</h1>
        <p className="post-meta">
          That post does not exist or may have been moved.
        </p>
        <Link href="/blog" className="post-backLink">
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}
