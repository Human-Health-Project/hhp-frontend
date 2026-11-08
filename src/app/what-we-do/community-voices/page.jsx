import CommunityVoices from "@/views/CommunityVoices";
import { getPublishedStories } from "@/services/publishedStories";

export const metadata = {
  title: "Community Voices | Human Health Project",
  description:
    "Anonymous stories from our community about screenings, symptom recognition and healthy lifestyle changes — shared to help others feel informed and supported.",
  alternates: { canonical: "/what-we-do/community-voices" },
};

export default async function Page() {
  const stories = await getPublishedStories();
  return <CommunityVoices initialStories={stories} />;
}
