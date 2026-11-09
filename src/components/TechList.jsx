// A row of technology names separated by thin slashes.
export default function TechList({ items, className = "" }) {
  return (
    <ul
      className={`flex flex-wrap items-center gap-y-1 text-xs font-medium uppercase tracking-[0.18em] t-muted ${className}`}
    >
      {items.map((item, i) => (
        <li key={item} className="flex items-center">
          {i > 0 && (
            <span aria-hidden="true" className="mx-3 t-accent opacity-60">
              /
            </span>
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}
