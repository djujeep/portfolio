
export const skillGroups = [
  {
    title: "Languages and markup",
    description: "The foundation of everything I build.",
    skills: [
      { name: "HTML5", match: "HTML5" },
      { name: "CSS3", match: "CSS3" },
      { name: "JavaScript (ES6+)", match: "JavaScript" },
    ],
  },
  {
    title: "Libraries and styling",
    description: "How I structure and style interfaces.",
    skills: [
      {
        name: "React",
        match: "React",
      },
      { name: "Tailwind CSS", match: "Tailwind CSS" },
      { name: "Bootstrap", match: "Bootstrap" },
      { name: "Next.js", learning: true },
    ],
  },
  {
    title: "Workflow and practice",
    description: "How I keep the work organised and responsive.",
    skills: [
      {
        name: "Git and GitHub",
        note: "Git-based development with clean commits, readable code and iterative, testable builds.",
      },
      {
        name: "Responsive Design",
        note: "Layouts that adapt cleanly across breakpoints, tested on real devices and screen sizes.",
      },
      { name: "API Integration" },
    ],
  },
];

// A flat list of names, used for the stack list on the Home page.
export const allSkillNames = skillGroups.flatMap((group) =>
  group.skills.map((skill) => skill.name),
);
