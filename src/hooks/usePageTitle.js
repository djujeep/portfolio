import { useEffect } from "react";

// Sets the browser tab title for the current page.
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Eluwa Peace` : "Eluwa Peace | Front-End Engineer";
  }, [title]);
}
