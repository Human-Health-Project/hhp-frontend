"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { publishedStoriesFrom } from "@/services/stories";

/**
 * The published stories on Community Voices.
 *
 * `initialStories` were fetched when the site was built, so they are in the
 * HTML for search engines and for visitors without JavaScript. After the page
 * loads, the list is refreshed from the API so that a story approved since
 * the last deploy shows up straight away. If that request fails or returns
 * nothing, the built list stays.
 */
export default function CommunityStories({ initialStories }) {
  const [stories, setStories] = useState(initialStories);

  useEffect(() => {
    let cancelled = false;

    api
      .getPublishedStories()
      .then((payload) => {
        const latest = publishedStoriesFrom(payload);
        if (!cancelled && latest) setStories(latest);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return stories.map((story) => (
    <details className="cv-story" key={story.id} id={story.id}>
      <summary className="cv-story-summary">
        {story.tags.length > 0 && (
          <span className="cv-story-tags">{story.tags.join(" · ")}</span>
        )}

        <h3 className="cv-story-title">{story.title}</h3>

        {story.quote && <p className="cv-story-quote">“{story.quote}”</p>}

        <span className="cv-story-toggle">
          <span className="cv-toggle-closed">Read the full story</span>
          <span className="cv-toggle-open">Hide the full story</span>
        </span>
      </summary>

      <div className="cv-story-body">
        {[
          { label: "The Setup", paragraphs: story.setup },
          { label: "The Turning Point", paragraphs: story.turningPoint },
          { label: "The Wisdom", paragraphs: story.wisdom },
        ].map((part) => (
          <div className="cv-story-part" key={part.label}>
            <p className="cv-part-label">{part.label}</p>
            {part.paragraphs.map((paragraph, i) => (
              <p className="cv-part-text" key={i}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </details>
  ));
}
