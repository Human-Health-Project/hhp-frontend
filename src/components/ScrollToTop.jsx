import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1) Normal page scroll
    window.scrollTo(0, 0);

    // 2) If you have a scroll container, reset it too
    const app = document.querySelector(".app");
    if (app) app.scrollTop = 0;

    const main = document.querySelector("main");
    if (main) main.scrollTop = 0;
  }, [pathname]);

  return null;
}
