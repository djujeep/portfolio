import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import TechList from "./TechList.jsx";
import ProjectImage from "./ProjectImage.jsx";

// One line in the ruled project index. The whole row is a link.
export default function ProjectRow({ project, number }) {
  const { slug, title, kind, summary, tech } = project;
  const num = String(number).padStart(2, "0");

  return (
    <Reveal as="li" className="b-rule border-b first:border-t">
      <Link
        to={`/projects/${slug}`}
        className="group grid items-center gap-5 py-8 md:grid-cols-12 md:gap-8"
      >
        <span className="font-display text-3xl t-accent md:col-span-1">{num}</span>

        <div className="md:col-span-4">
          <h3 className="display-sm transition-colors group-hover:t-accent">{title}</h3>
          <p className="eyebrow mt-3">{kind}</p>
        </div>

        <div className="md:col-span-4">
          <p className="t-muted">{summary}</p>
          <TechList items={tech} className="mt-4" />
        </div>

        <ProjectImage
          project={project}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover object-left-top md:col-span-3"
        />
      </Link>
    </Reveal>
  );
}
