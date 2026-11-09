// A link that opens in a new tab, safely, and tells screen readers about it.
export default function ExternalLink({ href, className = "", children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
