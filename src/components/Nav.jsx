import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon.jsx";
import Logo from "./Logo.jsx";
import { navLinks, profile } from "../data/profile.js";

// NavLink tells us whether it points at the current page (isActive),
// which is how the active page gets its underline.
const desktopLink = ({ isActive }) =>
  `relative py-2 text-[0.75rem] font-medium uppercase tracking-[0.22em] transition-colors ${
    isActive
      ? "text-peach after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-peach"
      : "text-ivory/80 hover:text-peach"
  }`;

const desktopCta = ({ isActive }) => `btn ${isActive ? "btn-solid" : "btn-line"} py-3`;

const mobileLink = ({ isActive }) =>
  `block border-b b-rule py-4 font-display text-4xl ${
    isActive ? "italic text-peach" : "text-ivory"
  }`;

export default function Nav() {
  const [open, setOpen] = useState(false); // is the mobile menu open?
  const [scrolled, setScrolled] = useState(false); // has the page moved down?
  const { pathname } = useLocation();

  // Give the bar a solid background once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While the menu is open: stop the page behind it scrolling, and let
  // the Escape key close it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`tone-dark fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-ink" : "border-transparent bg-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={link.cta ? desktopCta : desktopLink}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-ivory md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <Icon name={open ? "close" : "menu"} className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="tone-dark bg-tone fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto px-6 pb-10 pt-28 md:hidden"
        >
          <nav aria-label="Mobile">
            <ul>
              {navLinks.map((link, i) => (
                <li key={link.to} className="menu-in" style={{ "--d": `${i * 70}ms` }}>
                  <NavLink to={link.to} end={link.to === "/"} className={mobileLink}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="menu-in mt-12" style={{ "--d": "380ms" }}>
            <p className="eyebrow">Say hello</p>
            <a href={`mailto:${profile.email}`} className="link-line mt-3 block break-all text-lg">
              {profile.email}
            </a>
            <p className="mt-6 text-sm t-muted">
              {profile.role}, {profile.location}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
