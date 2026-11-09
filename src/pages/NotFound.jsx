import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import usePageTitle from "../hooks/usePageTitle.js";

export default function NotFound() {
  usePageTitle("Page not found");

  return (
    <Section tone="dark" className="pb-32 pt-40 md:pb-48 md:pt-56">
      <p className="eyebrow">404</p>
      <h1 className="display-lg mt-6">
        Page <em>not found</em>
      </h1>
      <p className="lede mt-6 max-w-md">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link to="/" className="btn btn-solid">
          Back to home
        </Link>
        <Link to="/projects" className="btn btn-line">
          View projects
        </Link>
      </div>
    </Section>
  );
}
