import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import Reveal from "../components/Reveal.jsx";
import ProjectFeature from "../components/ProjectFeature.jsx";
import CvButton from "../components/CvButton.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { profile } from "../data/profile.js";
import { projects, featuredProjects } from "../data/projects.js";
import { allSkillNames } from "../data/skills.js";
import portrait from "../assets/images/portrait.webp";

export default function Home() {
  usePageTitle();

  return (
    <>
      <section className="tone-dark relative overflow-hidden bg-linear-to-b from-ink to-cocoa pb-20 pt-32 md:pb-32 md:pt-44">
        <div className="mx-auto grid max-w-7xl items-end gap-16 px-6 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow enter-in">
              {profile.role}, {profile.country}
            </p>

            <h1 className="display-xl mt-8">
              <span className="mask">
                <span className="rise" style={{ "--d": "150ms" }}>
                  Eluwa
                </span>
              </span>
              <span className="mask">
                <span className="rise text-sheen italic" style={{ "--d": "300ms" }}>
                  Peace
                </span>
              </span>
            </h1>

            <p className="lede enter-in mt-10 max-w-xl" style={{ "--d": "600ms" }}>
              {profile.intro}
            </p>

            <div className="enter-in mt-10 flex flex-wrap gap-4" style={{ "--d": "750ms" }}>
              <Link to="/projects" className="btn btn-solid">
                View projects
              </Link>
              <Link to="/contact" className="btn btn-line">
                Get in touch
              </Link>
            </div>

            <p
              className="enter-in mt-10 flex items-center gap-3 text-sm t-muted"
              style={{ "--d": "900ms" }}
            >
              <span className="h-1.5 w-1.5 bg-peach" aria-hidden="true" />
              {profile.availability}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 border border-peach/60 md:translate-x-4 md:translate-y-4"
              aria-hidden="true"
            />
            <Reveal variant="image" delay={200} className="relative bg-mocha">
              <img
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                width="1200"
                height="1418"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </Reveal>
          </div>
        </div>
      </section>


      <Section tone="cocoa" className="py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow">About Me</p>
            <p className="display-md mt-6">
              I build responsive, fast and accessible websites
            </p>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4 lg:pt-12">
            <p className="lede">Based in {profile.location} and open to remote roles worldwide.</p>
            <Link
              to="/about"
              className="link-line t-accent mt-8 inline-block text-xs font-medium uppercase tracking-[0.22em]"
            >
              More about me
            </Link>
          </Reveal>
        </div>

        <ul className="b-rule mt-20 grid gap-x-12 border-t sm:grid-cols-2 lg:grid-cols-3">
          {allSkillNames.map((name) => (
            <li key={name} className="b-rule border-b py-5 font-display text-2xl">
              {name}
            </li>
          ))}
        </ul>
      </Section>

      {/* Selected work */}
      <Section tone="dark" className="py-24 md:py-36">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">Selected work</p>
            <h2 className="display-lg mt-5">
              Projects I have <em>built</em>
            </h2>
          </Reveal>
          <Link
            to="/projects"
            className="link-line t-accent text-xs font-medium uppercase tracking-[0.22em]"
          >
            All {projects.length} projects
          </Link>
        </div>

        <div className="space-y-28 md:space-y-40">
          {featuredProjects.map((project, i) => (
            <ProjectFeature key={project.slug} project={project} number={i + 1} />
          ))}
        </div>
      </Section>

      <Section tone="cream" className="py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="eyebrow">Curriculum vitae</p>
          
            <p className="lede mt-4 max-w-lg">
              A summary of my skills and projects, ready to download and share.
            </p>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5 md:justify-self-end">
            <div className="flex flex-wrap items-start gap-4">
  <CvButton />
  <Link to="/contact" className="btn btn-line">
    Contact me
  </Link>
</div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
