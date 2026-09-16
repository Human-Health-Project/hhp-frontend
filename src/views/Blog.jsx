"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import "./Blog.css";

const POSTS_PER_BATCH = 12;

export default function Blog({ posts, categories }) {
  const [query, setQuery] = useState(""); // search box text
  const [category, setCategory] = useState("all"); // category dropdown
  const [sort, setSort] = useState("newest"); // sort dropdown
  const [visible, setVisible] = useState(POSTS_PER_BATCH); // # of cards rendered

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();

    const filtered = posts.filter((post) => {
      const matchesCategory =
        category === "all" || post.categories.includes(category);

      const matchesQuery =
        term === "" ||
        post.title.toLowerCase().includes(term) ||
        post.author.toLowerCase().includes(term);

      return matchesCategory && matchesQuery;
    });
    return [...filtered].sort((a, b) =>
      sort === "newest" ? b.timestamp - a.timestamp : a.timestamp - b.timestamp,
    );
  }, [posts, query, category, sort]);

  function changeQuery(event) {
    setQuery(event.target.value);
    setVisible(POSTS_PER_BATCH);
  }

  function changeCategory(event) {
    setCategory(event.target.value);
    setVisible(POSTS_PER_BATCH);
  }

  function changeSort(event) {
    setSort(event.target.value);
    setVisible(POSTS_PER_BATCH);
  }

  return (
    <main className="blog-page">
      <section className="blog-section">
        <div className="blog-container">
          <h1 className="blog-pageTitle">BLOGS</h1>
          <div className="blog-controls">
            <input
              type="search"
              className="blog-search"
              placeholder="Search by title or author"
              value={query}
              onChange={changeQuery}
              aria-label="Search posts by title or author"
            />
            <select
              className="blog-select"
              value={category}
              onChange={changeCategory}
              aria-label="Filter by category"
            >
              <option value="all">All categories</option>
              {categories.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>

            <select
              className="blog-select"
              value={sort}
              onChange={changeSort}
              aria-label="Sort posts"
            >
              <option value="newest">Sort: Newest</option>
              <option value="oldest">Sort: Oldest</option>
            </select>
          </div>

          {results.length === 0 ? (
            <p className="blog-empty">No posts match your search.</p>
          ) : (
            <>
              <div className="blog-grid">
                {results.slice(0, visible).map((post) => (
                  <article key={post.id} className="blog-card">
                    {post.featuredImage && (
                      <img
                        className="blog-cardImage"
                        src={post.featuredImage}
                        alt=""
                      />
                    )}
                    <div className="blog-cardBody">
                      {post.categories[0] && (
                        <p className="blog-cardCategory">
                          {post.categories[0]}
                        </p>
                      )}
                      <h2 className="blog-cardTitle">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="blog-cardMeta">
                        {post.publishedAt} <span>|</span> By {post.author}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="blog-cardMore"
                      >
                        READ MORE
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              {visible < results.length && (
                <div className="blog-loadMore">
                  <button
                    type="button"
                    className="blog-loadMoreBtn"
                    onClick={() => setVisible((v) => v + POSTS_PER_BATCH)}
                  >
                    Load more
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
