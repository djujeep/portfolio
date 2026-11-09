import { useEffect, useRef, useState } from "react";

// Tells you when an element has scrolled into view, once.
// Usage: const [ref, inView] = useInView();  then <div ref={ref} />
export default function useInView({ threshold = 0.15, rootMargin = "0px 0px -8% 0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Very old browsers: just show the content.
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // reveal once, then stop watching
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(node);

    // Cleanup runs when the component unmounts.
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
