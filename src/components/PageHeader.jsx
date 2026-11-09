import Section from "./Section.jsx";
import { profile } from "../data/profile.js";

// The opening block of every inner page: a masthead line, a large heading
// whose lines slide up one after another, an optional intro, and a row of
// key facts.
//
//   eyebrow  small label, for example "About"
//   lines    the heading, one object per line: { text, accent }.
//            accent: true makes that line italic and metallic.
//   intro    optional sentence under the heading
//   meta     optional list of { label, value } facts shown in a ruled row
export default function PageHeader({ eyebrow, lines, intro, meta = [] }) {
  const year = new Date().getFullYear();
  const afterHeading = 150 + lines.length * 150; // when the later items appear

  return (
    <Section tone="dark" className="pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="b-rule enter-in flex items-center justify-between gap-6 border-b pb-5">
        <p className="eyebrow">{eyebrow}</p>
        <p className="text-right text-[0.7rem] uppercase tracking-[0.25em] t-muted">
          {profile.name} <span aria-hidden="true">/</span> Portfolio {year}
        </p>
      </div>

      <h1 className="display-page mt-12 md:mt-16">
        {lines.map((line, i) => (
          <span key={line.text} className="mask">
            <span
              className={`rise ${line.accent ? "text-sheen italic" : ""}`}
              style={{ "--d": `${150 + i * 150}ms` }}
            >
              {line.text}
            </span>
          </span>
        ))}
      </h1>

      {intro && (
        <p className="lede enter-in mt-8 max-w-xl" style={{ "--d": `${afterHeading}ms` }}>
          {intro}
        </p>
      )}

      {meta.length > 0 && (
        <dl
          className="b-rule enter-in mt-14 grid gap-x-8 gap-y-6 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
          style={{ "--d": `${afterHeading + 150}ms` }}
        >
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="eyebrow">{item.label}</dt>
              <dd className="mt-2 break-words">{item.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </Section>
  );
}
