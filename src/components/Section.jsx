// A full-width band with a colour tone ("dark", "cocoa" or "cream") and a
// centred container. The tone sets the CSS variables that the text, borders
// and buttons inside it read from.
export default function Section({ tone = "dark", className = "", children, ...rest }) {
  return (
    <section className={`tone-${tone} bg-tone ${className}`} {...rest}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">{children}</div>
    </section>
  );
}
