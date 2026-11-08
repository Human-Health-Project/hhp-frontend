import ShareStory from "@/views/ShareStory";

export const metadata = {
  title: "Share Your Story | Community Voices | Human Health Project",
  description:
    "Share your health journey anonymously to help someone else feel less alone. Every story is reviewed before it appears on Community Voices.",
  alternates: { canonical: "/what-we-do/community-voices/share" },
};

export default function Page() {
  return <ShareStory />;
}
