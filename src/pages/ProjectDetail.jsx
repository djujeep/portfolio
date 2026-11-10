import { Link, useParams } from "react-router-dom";
import Section from "../components/Section.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import ExternalLink from "../components/ExternalLink.jsx";
import TechList from "../components/TechList.jsx";
import ProjectImage from "../components/ProjectImage.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import NotFound from "./NotFound.jsx";
import { projects, getProject } from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  usePageTitle(project?.title);

  if (!project) return <NotFound />;

  const { title, kind, summary, overview, purpose, contribution, tech, live, repo, status } = project;
  const index = projects.findIndex((p) => p.slug === slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Section tone="dark" className="pb-14 pt-32 md:pt-44">
        <nav aria-label="Breadcrumb" className="enter-in text-xs uppercase tracking-[0.22em] t-muted">
          <Link to="/projects" className="transition-colors hover:t-accent">
            Projects
          </Link>
          <span aria-hidden="true" className="mx-3 t-accent">
            /
          </span>
          <span aria-current="page">{title}</span>
        </nav>

        <p className="eyebrow enter-in mt-10" style={{ "--d": "100ms" }}>
          {kind}
        </p>
        <h1 className="display-lg enter-in mt-4" style={{ "--d": "180ms" }}>
          {title}
        </h1>
        <p className="lede enter-in mt-6 max-w-2xl" style={{ "--d": "260ms" }}>
          {summary}
        </p>

      {status && (
        <p className="enter-in mt-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] t-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-peach" aria-hidden="true" />
          {status}
        </p>
      )}
        <div className="enter-in mt-10 flex flex-wrap gap-4" style={{ "--d": "340ms" }}>
                    {live && (
            <ExternalLink href={live} className="btn btn-solid">
              View live site
              <Icon name="external" className="h-4 w-4" />
            </ExternalLink>
          )}
          {repo && (
            <ExternalLink href={repo} className="btn btn-line">
              <Icon name="github" className="h-4 w-4" />
              Github Repo
            </ExternalLink>
          )}
        </div>
      </Section>

      <Section tone="dark" className="pb-24 md:pb-32">
        <div className="mx-auto" style={project.width ? { maxWidth: project.width } : undefined}>
          <Reveal variant="image" className="bg-mocha">
            <ProjectImage project={project} className="h-auto w-full" />
          </Reveal>
        </div>
      </Section>

      <Section tone="cocoa" className="py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="space-y-12 lg:col-span-7">
            <div>
              <h2 className="eyebrow">Overview</h2>
              <p className="mt-5 text-lg leading-relaxed">{overview}</p>
            </div>
            <div>
              <h2 className="eyebrow">Purpose</h2>
              <p className="mt-5 text-lg leading-relaxed">{purpose}</p>
            </div>
          </Reveal>

          <Reveal delay={150} className="space-y-12 lg:col-span-4 lg:col-start-9">
            <div>
              <h2 className="eyebrow">My contribution</h2>
              <p className="mt-5 leading-relaxed t-muted">{contribution}</p>
            </div>
            <div>
              <h2 className="eyebrow">Built with</h2>
              <TechList items={tech} className="mt-5" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="cream" className="py-20 md:py-28">
        <nav aria-label="More projects" className="grid gap-12 md:grid-cols-2">
          <Link to={`/projects/${previous.slug}`} className="group block">
            <p className="eyebrow">Previous project</p>
            <p className="display-sm mt-3 transition-colors group-hover:t-accent">
              {previous.title}
            </p>
          </Link>
          <Link to={`/projects/${next.slug}`} className="group block md:text-right">
            <p className="eyebrow">Next project</p>
            <p className="display-sm mt-3 transition-colors group-hover:t-accent">{next.title}</p>
          </Link>
        </nav>
      </Section>
    </>
  );
}
