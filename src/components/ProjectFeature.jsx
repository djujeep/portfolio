import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import TechList from "./TechList.jsx";
import ProjectImage from "./ProjectImage.jsx";

// A large, editorial presentation of one project. project.layout decides the
// composition: "wide" stacks a full-width image over the text, "left" and
// "right" place the image beside it on the left or right.
export default function ProjectFeature({ project, number }) {
  const { slug, title, kind, summary, tech, layout, status } = project;
const inProgress = Boolean(status); 
  const to = `/projects/${slug}`;
  const num = String(number).padStart(2, "0");

  const image = (
  <Reveal variant="image" className="bg-mocha">
    <ProjectImage project={project} loading="lazy" className="h-auto w-full" />
  </Reveal>
);

const picture = inProgress ? (
  <div className="block cursor-default">{image}</div>
) : (
  <Link to={to} className="block" aria-label={`${title}, view project`}>
    {image}
  </Link>
);

  const text = (
    <Reveal delay={150}>
      <p className="eyebrow">
        {num} <span aria-hidden="true">/</span> {kind}
      </p>
      <h3 className="display-md mt-4">{inProgress ? title : <Link to={to}>{title}</Link>}</h3>
      <p className="lede mt-5 max-w-md">{summary}</p>
      <TechList items={tech} className="mt-6" />
      {inProgress ? (
  <p className="mt-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] t-accent">
    <span className="h-1.5 w-1.5 rounded-full bg-peach" aria-hidden="true" />
    In progress
  </p>
) : (
  <Link
    to={to}
    className="link-line t-accent mt-8 inline-block text-xs font-medium uppercase tracking-[0.22em]"
  >
    View project
  </Link>
)}
    </Reveal>
  );

  if (layout === "wide") {
    return (
      <article>
        {picture}
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">
              {num} <span aria-hidden="true">/</span> {kind}
            </p>
            <h3 className="display-md mt-4">
              <Link to={to}>{title}</Link>
            </h3>
          </div>
          <Reveal delay={150} className="md:col-span-5 md:col-start-8">
            <p className="lede max-w-md">{summary}</p>
            <TechList items={tech} className="mt-6" />
            <Link
              to={to}
              className="link-line t-accent mt-8 inline-block text-xs font-medium uppercase tracking-[0.22em]"
            >
              View project
            </Link>
          </Reveal>
        </div>
      </article>
    );
  }

  const imageFirst = layout === "left";
  return (
    <article className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
      <div className={`md:col-span-7 ${imageFirst ? "" : "md:order-2"}`}>{picture}</div>
      <div className={`md:col-span-5 ${imageFirst ? "" : "md:order-1"}`}>{text}</div>
    </article>
  );
}
