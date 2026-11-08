import { Suspense } from "react";
import AdminStoryDetail from "@/views/admin/AdminStoryDetail";

export const metadata = {
  title: "Story | Admin | Human Health Project",
  robots: { index: false, follow: false },
};

// A static export can't prerender a page per story, so the story id travels
// in the query string (/admin/stories/view?id=12). useSearchParams() needs
// a Suspense boundary for the static build.
export default function Page() {
  return (
    <Suspense fallback={null}>
      <AdminStoryDetail />
    </Suspense>
  );
}
