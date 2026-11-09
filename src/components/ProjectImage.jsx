// Shows a project's screenshot. If a project has no image yet, it shows a
// simple placeholder panel instead, so the layout still looks finished.
export default function ProjectImage({ project, className = "", ...rest }) {
  const { image, title, width, height } = project;

  if (image) {
    return (
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        width={width}
        height={height}
        className={className}
        {...rest}
      />
    );
  }

  // Keep the same shape as a real screenshot unless the parent already sets one.
  const shape = className.includes("aspect-") ? "" : "aspect-[16/9]";

  return (
    <div
      role="img"
      aria-label={`${title}, screenshot coming soon`}
      className={`flex w-full flex-col items-center justify-center bg-mocha p-6 text-center ${shape} ${className}`}
    >
      <span className="font-display text-2xl text-ivory md:text-3xl">{title}</span>
      <span className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-peach">
        Screenshot coming soon
      </span>
    </div>
  );
}
