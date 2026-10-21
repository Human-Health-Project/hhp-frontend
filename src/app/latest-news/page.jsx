import LatestNews from "@/views/LatestNews";

export const metadata = {
  title: "Latest News | Human Health Project",
  alternates: { canonical: "/latest-news" },
};

export default function Page() {
  return <LatestNews />;
}
