import Link from "next/link";
import "./CommunityVoicesBanner.css";

const SHARE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd7_PGefOLIFWZTUQt8Jm-zRwyI3uidrEVFMZGLxMdG0V504A/viewform";

export default function CommunityVoicesBanner({ className = "" }) {
  return (
    <div className={`community-voices-banner ${className}`.trim()}>
      <img
        src="/media/community-voices/comm-voices.png"
        alt="Community Voices: real and anonymous stories about screenings, symptom recognition, and health lifestyle changes"
      />
      <Link
        href="/what-we-do/community-voices"
        className="community-voices-banner__link community-voices-banner__link--read"
        aria-label="Read a Community Voices story"
      />
      <a
        href={SHARE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="community-voices-banner__link community-voices-banner__link--share"
        aria-label="Share your story with Human Health Project (opens in a new tab)"
      />
    </div>
  );
}
