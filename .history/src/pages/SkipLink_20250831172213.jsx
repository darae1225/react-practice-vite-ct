export function SkipLink({ mainContent }) {
  return (
    <>
      <a href={`#${mainContent}`} className="skip-link">
        Skip to main content
      </a>
    </>
  );
}
