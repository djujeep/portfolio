import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

// The frame around every page: navigation on top, footer at the bottom,
// and the current page (<Outlet />) in the middle.
export default function SiteLayout() {
  const { pathname } = useLocation();

  // Every new page starts at the top.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  const skipToContent = (e) => {
    e.preventDefault();
    document.getElementById("main")?.focus();
  };

  return (
    <>
      <a
        href="#main"
        onClick={skipToContent}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-peach focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      {/* key={pathname} makes React replace this element on every page change,
          which replays the page-enter animation. */}
      <main id="main" tabIndex={-1} key={pathname} className="page-enter outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
