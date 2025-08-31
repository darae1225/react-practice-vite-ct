import { Link } from "react-router";

export function SkipLink({ maincontent }) {
  return (
    <>
      <Link to={`#${maincontent}`} className="skip-link">
        Skip to main content
      </Link>
    </>
  );
}
