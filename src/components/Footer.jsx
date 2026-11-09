import { Link } from "react-router-dom";
import ExternalLink from "./ExternalLink.jsx";
import { navLinks, profile, socials } from "../data/profile.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="tone-dark bg-tone">
      <div className="rule-sheen" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 md:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-display text-4xl leading-none tracking-tight md:text-6xl">
              Girly<em className="text-peach">tech</em>
            </p>
            <p className="lede mt-6 max-w-sm">
              {profile.role} based in {profile.country}. {profile.availability}.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 lg:col-span-6">
            <div>
              <h2 className="eyebrow">Explore</h2>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="t-muted transition-colors hover:t-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow">Elsewhere</h2>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="t-muted transition-colors hover:t-accent"
                  >
                    Email
                  </a>
                </li>
                {socials.map((social) => (
                  <li key={social.label}>
                    <ExternalLink
                      href={social.href}
                      className="t-muted transition-colors hover:t-accent"
                    >
                      {social.label}
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="b-rule mt-16 flex flex-col gap-2 border-t pt-6 text-xs uppercase tracking-[0.2em] t-muted md:flex-row md:justify-between">
          <p>
            &copy; {year} {profile.brand}
          </p>
          <p>
            {profile.role}, {profile.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
