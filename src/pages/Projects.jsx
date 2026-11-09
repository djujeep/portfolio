import Section from "../components/Section.jsx";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import ProjectFeature from "../components/ProjectFeature.jsx";
import ProjectRow from "../components/ProjectRow.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { projects, featuredProjects, otherProjects } from "../data/projects.js";

export default function Projects() {
  usePageTitle("Projects");

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        lines={[]}
        meta={[
          { label: "Projects", value: String(projects.length) },
          { label: "Live versions", value: "Every project" },
          { label: "Focus", value: "Front-end development" },
        ]}
      />

      <Section tone="dark" className="pb-28 md:pb-40">
        <div className="space-y-28 md:space-y-40">
          {featuredProjects.map((project, i) => (
            <ProjectFeature key={project.slug} project={project} number={i + 1} />
          ))}
        </div>
      </Section>

      <Section tone="cream" className="py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">More builds</p>
          <h2 className="display-md mt-5">
            Practice and replica projects
          </h2>
        </Reveal>
        <ul className="mt-14">
          {otherProjects.map((project, i) => (
            <ProjectRow
              key={project.slug}
              project={project}
              number={featuredProjects.length + i + 1}
            />
          ))}
        </ul>
      </Section>
    </>
  );
}
