// A small set of hand-drawn icons in one consistent style:
// 24px grid, 1.5px stroke, round ends. The GitHub mark is the official shape.

const strokeIcons = {
  menu: (
    <>
      <path d="M3 8h18" />
      <path d="M3 16h18" />
    </>
  ),
  close: (
    <>
      <path d="M5 5l14 14" />
      <path d="M19 5L5 19" />
    </>
  ),
  external: (
    <>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v11" />
      <path d="M7.5 11L12 15.5 16.5 11" />
      <path d="M5 20h14" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8L4 20z" />
      <path d="M9.3 8.8c.3 2.4 2.9 5 5.6 5.4l1.1-1.3-2-1-.9.7c-.9-.4-1.9-1.4-2.4-2.4l.7-.9-1-2z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M8 10.5V16" />
      <circle cx="8" cy="7.8" r="0.6" fill="currentColor" />
      <path d="M12 16v-5.5" />
      <path d="M12 13c0-1.5 1-2.5 2.3-2.5S16.5 11.2 16.5 13V16" />
    </>
  ),
};

export default function Icon({ name, className = "h-5 w-5" }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {strokeIcons[name]}
    </svg>
  );
}
