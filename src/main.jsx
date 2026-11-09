import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// HashRouter keeps page addresses like /#/projects. That means refreshing a page
// or opening a shared link works on GitHub Pages without extra server setup.
// If you later host on Netlify or Vercel, you can swap it for BrowserRouter.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
