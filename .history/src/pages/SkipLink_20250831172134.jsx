export function SkipLink({ maincontent }) {
  return (
    <>
      <a href={`#${maincontent}`} className="skip-link">
        Skip to main content
      </a>
    </>
  );
}
