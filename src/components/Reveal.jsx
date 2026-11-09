import useInView from "../hooks/useInView.js";

// Wraps any content and fades it in when it scrolls into view.
//   variant="image" reveals with a clip instead of a fade (used for pictures).
//   delay (ms) staggers neighbouring elements.
//   as lets you choose the HTML tag, for example as="li".
export default function Reveal({
  as: Tag = "div",
  variant = "fade",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const [ref, inView] = useInView();
  const isImage = variant === "image";
  const base = isImage ? "img-reveal" : "reveal";

  return (
    <Tag
      ref={ref}
      style={{ "--d": `${delay}ms` }}
      className={`${base} ${inView ? "is-in" : ""} ${className}`}
      {...rest}
    >
      {/* For images, the inner wrapper is the part that gets clipped. */}
      {isImage ? <div className="img-clip">{children}</div> : children}
    </Tag>
  );
}
