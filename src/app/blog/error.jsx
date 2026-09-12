"use client";

import "@/views/Blog.css";

export default function Error({ reset }) {
  return (
    <main className="blog-page">
      <div className="blog-container">
        <h1 className="blog-pageTitle">Could not load the blog</h1>
        <p className="blog-empty">
          Something went wrong fetching posts.{" "}
          <button type="button" className="blog-retry" onClick={reset}>
            Try again
          </button>
        </p>
      </div>
    </main>
  );
}
