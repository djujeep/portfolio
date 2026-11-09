# Girlytech Portfolio

Eluwa Peace's portfolio, rebuilt with React, React Router and Tailwind CSS v4. Frontend only, no backend.

## Run it

```bash
npm install
npm run dev        # opens a local preview, usually http://localhost:5173
npm run build      # makes the production site in /dist
npm run preview    # previews the production build
```

Node 18 or newer is needed.

## Things to fill in (all in `src/data/profile.js`)

| What | Where | Current state |
|---|---|---|
| WhatsApp link | `profile.whatsapp` | Placeholder. Replace with your own `https://wa.me/...` link |
| LinkedIn | `profile.linkedin` | Empty, so LinkedIn is hidden everywhere. Paste the address back when ready |
| CV | `profile.cvFile` | Empty, so the button shows "available soon". Put the PDF in `public/cv/` and set `"cv/your-file.pdf"` |
| Repo links | `repo` in `src/data/projects.js` | Empty. Add a GitHub repo address per project and a "View source" button appears |
| Social preview image | `index.html` (`og:image`) | Change to the full web address after you deploy |

## Folder map

```
src/
  main.jsx            starts React and the router
  App.jsx             the list of routes (which address shows which page)
  index.css           colours, fonts, buttons, animations
  layouts/SiteLayout  navigation + page + footer, shared by every page
  pages/              Home, About, Projects, ProjectDetail, Skills, Contact, NotFound
  components/         Nav, Footer, Reveal, Icon, ProjectFeature, ProjectRow, ContactForm ...
  hooks/              useInView (scroll reveals), usePageTitle
  data/               profile.js, projects.js, skills.js  <- your content lives here
  assets/images/      optimised project screenshots and portrait
```

## Editing content

Pages never contain project or skill text directly. They loop over the arrays in `src/data`.
To add a project: copy an object in `projects.js`, change the fields, add an image to
`src/assets/images/` and import it at the top of the file.

## React ideas you can explain in an interview

- **Components and props**: `ProjectFeature` receives a `project` object and a `number`.
- **State**: `useState` in `Nav` (menu open, page scrolled) and in `ContactForm` (values, touched, submitted).
- **Effects and cleanup**: `useEffect` in `Nav` adds and removes scroll and keyboard listeners.
- **Custom hooks**: `useInView` wraps `IntersectionObserver` and `useRef`; `usePageTitle` sets the tab title.
- **Lists and keys**: every `.map()` gives its items a stable `key`.
- **Conditional rendering**: `CvButton`, the mobile menu, form errors, the optional repo and LinkedIn links.
- **Routing**: nested routes with `<Outlet />`, `NavLink` active styles, `useParams` for `/projects/:slug`, a `*` route for 404.
- **Derived state**: `ContactForm` computes `errors` from `values` on each render instead of storing it.
- **Data-driven UI**: pages are built from `data/` files, and the Skills page finds "Used in" projects with a filter.

## Notes

- The contact form validates name, email and message, then opens the visitor's email app with the message
  filled in (a `mailto:` link). It does not send anything by itself. To receive messages directly, add a
  service such as Formspree or EmailJS later.
- The site uses `HashRouter`, so page addresses look like `/#/projects`. This keeps refresh and shared links
  working on GitHub Pages. On Netlify or Vercel you can switch to `BrowserRouter` in `src/main.jsx`.
- Motion is CSS only and switches off for visitors who prefer reduced motion.
- Fonts (Cormorant Garamond and DM Sans) load from Google Fonts.
