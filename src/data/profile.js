// Everything personal lives here. Change a value once and every page updates.

export const profile = {
  name: "Eluwa Peace",
  brand: "Girlytech",
  role: "Front-End Engineer",
  country: "Nigeria",
  location: "Nigeria (GMT+1)",
  availability: "Open to remote roles worldwide",
  intro:
    "I build responsive, accessible interfaces, turning designs into fast, reliable front-ends with clean, maintainable code.",

  email: "eluwapeace45@gmail.com",
  github: "https://github.com/djujeep",
  instagram: "https://www.instagram.com/_girlytech?igsh=YWN3MnpyOWhycTFp",

  // TODO: replace with your own link, for example https://wa.me/234XXXXXXXXXX
  whatsapp: "https://wa.link/8ps4at",
  linkedin: "",
  cvFile: "",
};
export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact", cta: true },
];

export const socials = [
  {
    label: "GitHub",
    icon: "github",
    href: profile.github,
    handle: "github.com/djujeep",
  },
  {
    label: "Instagram",
    icon: "instagram",
    href: profile.instagram,
    handle: "@_girlytech",
  },
  {
    label: "WhatsApp",
    icon: "whatsapp",
    href: profile.whatsapp,
    handle: "Message me directly",
  },
  ...(profile.linkedin
    ? [
        {
          label: "LinkedIn",
          icon: "linkedin",
          href: profile.linkedin,
          handle: "Let's connect",
        },
      ]
    : []),
];
