import { Link } from "react-router-dom";

export default function Logo({ className = "" }) {
  return (
    <Link
      to="/"
      aria-label="Girlytech, home"
      className={`font-display text-3xl font-semibold tracking-tight text-ivory ${className}`}
    >
      Girly<em className="font-medium text-peach">tech</em>
    </Link>
  );
}
