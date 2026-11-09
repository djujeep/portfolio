import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import Reveal from "../components/Reveal.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { profile } from "../data/profile.js";
import portrait from "../assets/images/portrait.webp";

// TODO: type your real experience here, for example "2 years" or "3+ years".
// While this is empty, the sentence simply leaves it out.
const YEARS_OF_EXPERIENCE = "";

// The three ideas I work by. Rendered as a list below, not hard-coded in JSX.
const principles = [
  {
    title: "Front-end development",
    text: "Responsive, accessible interfaces built with HTML5, CSS3, JavaScript and React.",
  },
  {
    title: "Responsive design",
    text: "Layouts that adapt cleanly across breakpoints, tested across real devices and screen sizes.",
  },
  {
    title: "A version-controlled workflow",
    text: "Git-based development with a focus on clean commits, readable code and iterative, testable builds.",
  },
];

export default function About() {
  usePageTitle("About");

  return (
    <>
      <Section tone="dark" className="pb-24 pt-32 md:pb-36 md:pt-44">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 border border-peach/60 md:translate-x-4 md:translate-y-4"
              aria-hidden="true"
            />
            <Reveal variant="image" className="relative bg-mocha">
              <img
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                width="1200"
                height="1418"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-[50%_12%]"
              />
            </Reveal>
          </div>

          <Reveal delay={150} className="space-y-7 lg:col-span-6 lg:col-start-7">
            <p className="font-display text-3xl leading-snug md:text-4xl">
              I&rsquo;m {profile.name}, a front-end engineer
              {YEARS_OF_EXPERIENCE && ` with ${YEARS_OF_EXPERIENCE} of experience`}, building
              websites that make brands look credible and work on every device.
            </p>
            <p className="lede">
              A website is often the first impression a customer has of a business. I design and
              build responsive, fast and accessible websites that present a brand clearly, earn
              trust and give visitors a reason to stay, so the brand looks as professional online
              as it is in person.
            </p>
            <p className="lede">
              I&rsquo;m based in {profile.location}, open to full-time roles and freelance
              projects, and available for remote work worldwide. Send me a message and I will
              usually reply within 24 hours.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="cream" className="py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">Approach</p>
          <h2 className="display-lg mt-5">
            How I <em>work</em>
          </h2>
        </Reveal>

        {/* One framed panel. Each row is divided by a hairline and tints on hover. */}
        <Reveal className="b-rule mt-14 border bg-ivory/60 shadow-[0_30px_60px_-40px_rgba(42,31,28,0.5)]">
          <ul className="divide-y divide-[rgb(140_90_74/0.3)]">
            {principles.map((item, i) => (
              <li
                key={item.title}
                className="group grid items-start gap-5 p-7 transition-colors hover:bg-peach/15 md:grid-cols-12 md:gap-8 md:p-10"
              >
                <span
                  className="flex h-14 w-14 items-center justify-center bg-ink font-display text-2xl text-peach md:col-span-2 md:h-16 md:w-16 lg:col-span-1"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-sm md:col-span-5 lg:col-span-4 lg:col-start-3">
                  {item.title}
                </h3>
                <p className="t-muted md:col-span-5 lg:col-span-5 lg:col-start-8">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section tone="cocoa" className="py-24 md:py-32">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="display-md max-w-xl">
            See what I have <em>built.</em>
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="btn btn-solid">
              View projects
            </Link>
            <Link to="/contact" className="btn btn-line">
              Get in touch
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}