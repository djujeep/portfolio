import Icon from "./Icon.jsx";
import { profile } from "../data/profile.js";

// Conditional rendering: a real download link when a CV file is set in
// data/profile.js, and a disabled button with a short note until then.
export default function CvButton() {
  if (!profile.cvFile) {
    return (
      <div>
        <button type="button" disabled className="btn btn-solid">
          <Icon name="download" className="h-4 w-4" />
          Download CV
        </button>
        <p className="mt-3 text-sm t-muted">My updated CV will be available here soon.</p>
      </div>
    );
  }

  return (
    <a href={profile.cvFile} download className="btn btn-solid">
      <Icon name="download" className="h-4 w-4" />
      Download CV
    </a>
  );
}
