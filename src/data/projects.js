// One object per project. Pages never hard-code project text: they loop over
// this array. To add a project, copy an object, change the fields and import
// a new image.
//
// Fields
//   slug         used in the address, /projects/:slug
//   featured     true = shown large on Home and at the top of Projects
//   layout       how a featured project is arranged: "wide", "left" or "right"
//   tech         tag names. Keep them identical to the names in skills.js
//   repo         optional GitHub repository link. Leave "" until you add one.

import glassGrind from "../assets/images/glass-grind.webp";
import girlyshop from "../assets/images/girlyshop.webp";
import gustogroove from "../assets/images/gustogroove.webp";
import todoList from "../assets/images/todo-list.webp";
import waitlist from "../assets/images/waitlist.webp";
import futoPortal from "../assets/images/futo-portal.webp";
import quizApp from "../assets/images/quiz-app.webp";
import orderCart from "../assets/images/order-cart.webp";

export const projects = [
  {
    slug: "glass-grind-cafe",
    title: "The Glass Grind Café",
    kind: "Café landing page",
    summary:
      "A premium single-page landing site for a coffee shop, with a luxury dark look and frosted glass panels.",
    overview:
      "The Glass Grind Café is a responsive single-page landing site with a luxury dark look and frosted glass panels. It was built to show how fast and smooth a website can feel without a heavy framework, using HTML5, vanilla JavaScript and a local Tailwind CSS v4 build.",
    purpose:
      "To show that a polished, modern interface does not need a framework behind it.",
    contribution:
      "Built independently, from the layout and styling to the JavaScript.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    live: "https://djujeep.github.io/coffee-shop/",
    repo: "",
    image: glassGrind,
    width: 1280,
    height: 623,
    featured: true,
    layout: "wide",
  },
  {
    slug: "girlyshop",
    title: "GirlyShop",
    kind: "E-commerce storefront",
    summary:
      "A responsive online shop built to practise JavaScript, with every product rendered from data.",
    overview:
      "GirlyShop is a responsive e-commerce website with its shopping logic written in vanilla JavaScript. Products are rendered dynamically from a JavaScript data source and grouped by category, with a search field, a hero slider and cart controls in the header. The interface is styled with Tailwind CSS and adapts to mobile, tablet and desktop screens.",
    purpose:
      "A practice project for JavaScript: building a shop interface from data. It has no backend and everything runs in the browser.",
    contribution:
      "Built independently, from the layout and styling to the JavaScript.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    live: "https://djujeep.github.io/shopping-cart",
    repo: "",
    image: girlyshop,
    width: 1600,
    height: 908,
    featured: true,
    layout: "left",
  },
  {
    slug: "gustogroove",
    title: "GustoGroove",
    kind: "News and media platform",
    summary:
      "A replica of the Pulse Ng media platform, built around bold headlines and multi-column article grids.",
    overview:
      "GustoGroove is a replica of the Pulse Ng media platform, designed to organise and display news and multimedia content. The layout balances bold headlines with multi-column article grids for easy reading. It uses HTML5 and custom CSS for the visual layout, with vanilla JavaScript handling the responsive navigation and interactive elements.",
    purpose:
      "A replica project focused on structure: clear headline hierarchy, article grids and responsive navigation.",
    contribution:
      "Built entirely by me, working from the Pulse Ng site as the reference.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://djujeep.github.io/Gustogroove/",
    repo: "",
    image: gustogroove,
    width: 1252,
    height: 644,
    featured: true,
    layout: "right",
  },
  {
    slug: "order-cart",
    title: "Order Cart",
    kind: "React shopping cart",
    summary:
      "A single-product ordering flow built to practise React, from order details to a confirmation message.",
    overview:
      "A one-product shopping cart built with React. The product, Classic Sneakers at ₦35,000, is already listed. A two-step progress indicator (Details, then Confirmation) guides the customer: they enter their full name, delivery address and the quantity they want, then choose a delivery method. An order summary shows the details, and clicking Place Order brings up a confirmation message. A loading bar at the top of the page shows a confirmation tick once the order is confirmed.",
    purpose:
      "A practice project for React: building a complete ordering flow with form inputs, a delivery choice, an order summary and a confirmation step.",
    contribution: "Built independently while learning React.",
    tech: ["React", "Tailwindcss"],
    live: "https://djujeep.github.io/taskflow/",
    repo: "",
    image: orderCart,
    width: 654,
    height: 608,
    featured: false,
  },
  {
    slug: "to-do-list",
    title: "To-Do List",
    kind: "Task app",
    summary:
      "A task list with progress counts and a daily motivation quote, built to practise JavaScript.",
    overview:
      "An interactive to-do list app in vanilla JavaScript. Users add tasks, mark them complete and delete them, and the list updates instantly through DOM manipulation and event handling. A progress panel shows completed and pending counts, and a Daily Motivation panel shows a quote with a New Quote button.",
    purpose:
      "A JavaScript practice project in DOM manipulation and event handling. It has no backend.",
    contribution:
      "Built independently, from the layout and styling to the JavaScript.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    live: "https://djujeep.github.io/project3/",
    repo: "",
    image: todoList,
    width: 1338,
    height: 599,
    featured: false,
  },
  {
    slug: "waitlist",
    title: "Waitlist",
    kind: "Pre-launch sign-up page",
    summary:
      "A waitlist sign-up page with email validation, built to practise form handling in JavaScript.",
    overview:
      "A pre-launch waitlist page that collects email sign-ups ahead of a project launch. The form checks the email format with a regular expression and shows inline error messages. Tailwind CSS provides a responsive layout across mobile and desktop.",
    purpose:
      "A JavaScript practice project focused on forms and validation. It is a front-end exercise with no backend, so nothing is sent to a server.",
    contribution:
      "Built independently, from the layout and styling to the JavaScript.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    live: "https://djujeep.github.io/waitlist/",
    repo: "",
    image: waitlist,
    width: 1345,
    height: 641,
    featured: false,
  },
  {
    slug: "university-portal-clone",
    title: "University Portal Clone",
    kind: "Homepage clone",
    summary:
      "A front-end clone of the Federal University of Technology Owerri homepage.",
    overview:
      "A front-end layout clone of the official Federal University of Technology Owerri (FUTO) homepage. The page is dense with information, with a two-row header, large dropdown menus and layered widgets. The project focuses on recreating that layout closely and keeping it responsive across desktop and mobile, using HTML5, CSS3 (Flexbox and Grid) and Bootstrap 5.",
    purpose:
      "To practise layout cloning, grid management and responsive breakpoints on a complex, real-world page.",
    contribution:
      "Built independently, working from the FUTO homepage as the reference.",
    tech: ["HTML5", "CSS3", "Bootstrap"],
    live: "https://djujeep.github.io/futo-clonning/",
    repo: "",
    image: futoPortal,
    width: 1317,
    height: 598,
    featured: false,
  },
  {
    slug: "quiz-app",
    title: "Quiz App",
    kind: "Interactive quiz, Temperament Check",
    summary:
      "An interactive temperament quiz that processes answers and shows a result on the page.",
    overview:
      "An interactive quiz application that presents dynamic questions, processes user responses and generates results in real time using JavaScript and DOM manipulation. The Temperament Check opens on a welcome screen with Start and End options.",
    purpose:
      "A JavaScript project in capturing user input and computing a result on the page.",
    contribution:
      "Built independently, from the layout and styling to the JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://djujeep.github.io/first-js-project/",
    repo: "",
    image: quizApp,
    width: 659,
    height: 350,
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export const getProject = (slug) => projects.find((p) => p.slug === slug);

// Which projects use a given technology? Powers the "Used in" lines on Skills.
export const projectsUsing = (tech) => projects.filter((p) => p.tech.includes(tech));
