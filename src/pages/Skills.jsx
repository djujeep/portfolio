import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { skillGroups } from "../data/skills.js";
import { projectsUsing } from "../data/projects.js";

export default function Skills() {
  usePageTitle("Skills");

  return (
    <>
      <PageHeader
        eyebrow="Skills"
        lines={[]}
        meta={[
          { label: "Groups", value: String(skillGroups.length) },
          { label: "Focus", value: "Front-end development" },
          { label: "Approach", value: "Responsive and accessible" },
        ]}
      />

      <Section tone="cream" className="py-20 md:py-28">
        {skillGroups.map((group) => (
          <Reveal
            key={group.title}
            className="b-rule grid gap-10 border-t py-14 first:border-t-0 first:pt-0 lg:grid-cols-12"
          >
            <div className="lg:col-span-4">
              <h2 className="display-sm">{group.title}</h2>
              <p className="mt-3 t-muted">{group.description}</p>
            </div>

            <ul className="lg:col-span-7 lg:col-start-6">
              {group.skills.map((skill) => {
                // Find the projects that use this skill (empty if there is no match).
                const used = skill.match ? projectsUsing(skill.match) : [];

                return (
                  <li
  key={skill.name}
  className={`b-rule border-b py-6 first:pt-0 last:border-b-0 ${
    skill.learning ? "bg-clay-deep/10 px-6" : ""
  }`}
>
  <p className={`font-display text-3xl ${skill.learning ? "italic" : ""}`}>{skill.name}</p>
  {skill.learning && (
    <p className="mt-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] t-accent">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="learning-dot absolute inline-flex h-full w-full rounded-full bg-clay-deep" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-clay-deep" />
      </span>
      Learniing In progress
    </p>
  )}
                    {skill.note && <p className="mt-2 max-w-xl t-muted">{skill.note}</p>}
                    {used.length > 0 && (
                      <p className="mt-3 text-sm t-muted">
                        Used in{" "}
                        {used.map((project, i) => (
                          <span key={project.slug}>
                            {i > 0 && ", "}
                            <Link to={`/projects/${project.slug}`} className="link-line t-accent">
                              {project.title}
                            </Link>
                          </span>
                        ))}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </Section>

      <Section tone="dark" className="py-24 md:py-32">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="display-md max-w-xl">
            See these skills <em>in use.</em>
          </h2>
          <Link to="/projects" className="btn btn-solid self-start md:self-auto">
            View projects
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
