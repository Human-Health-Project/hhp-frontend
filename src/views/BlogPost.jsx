import "./BlogPost.css";
import Link from "next/link";

export default function BlogPost({ post }) {
  return (
    <main className="post-page">
      <article className="post-container">
        <Link href="/blog" className="post-backLink">
          ← Back to Blog
        </Link>

        {post.featuredImage && (
          <img className="post-hero" src={post.featuredImage} alt="" />
        )}

        <h1 className="post-title">{post.title}</h1>
        <p className="post-meta">
          {post.publishedAt} · {post.author}
        </p>

        <div className="post-content">
          {post.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
