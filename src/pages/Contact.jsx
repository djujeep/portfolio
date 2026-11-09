import Section from "../components/Section.jsx";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Icon from "../components/Icon.jsx";
import ExternalLink from "../components/ExternalLink.jsx";
import ContactForm from "../components/ContactForm.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { profile, socials } from "../data/profile.js";

// Email first, then every social link. The list is data, so adding or
// removing a link in profile.js changes this page automatically.
const contactItems = [
  {
    label: "Email",
    icon: "mail",
    href: `mailto:${profile.email}`,
    handle: profile.email,
    external: false,
  },
  ...socials.map((social) => ({ ...social, external: true })),
];

export default function Contact() {
  usePageTitle("Contact");

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        lines={[]}  
        meta={[
          { label: "Email", value: profile.email },
          { label: "Based in", value: profile.location },
          { label: "Reply time", value: "Within 24 hours" },
          { label: "Availability", value: profile.availability },
        ]}
      />

      <Section tone="cocoa" className="py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-lg leading-relaxed">
              I am currently based in {profile.location} and available for remote work worldwide. I
              typically respond within 24 hours.
            </p>
            <p className="mt-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] t-accent">
              <span className="h-1.5 w-1.5 bg-peach" aria-hidden="true" />
              Open for new roles
            </p>

            <ul className="mt-12">
              {contactItems.map((item) => {
                const content = (
                  <>
                    <span className="b-rule flex h-12 w-12 shrink-0 items-center justify-center border t-accent">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="eyebrow block">{item.label}</span>
                      <span className="mt-1 block break-words font-display text-2xl transition-colors group-hover:t-accent">
                        {item.handle}
                      </span>
                    </span>
                  </>
                );
                const rowClass = "group b-rule flex items-center gap-5 border-b py-5";

                return (
                  <li key={item.label} className="first:border-t b-rule">
                    {item.external ? (
                      <ExternalLink href={item.href} className={rowClass}>
                        {content}
                      </ExternalLink>
                    ) : (
                      <a href={item.href} className={rowClass}>
                        {content}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
            <div className="b-rule border bg-ink p-8 md:p-12">
              <h2 className="display-sm">
                Send a <em>message</em>
              </h2>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
