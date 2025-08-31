import { Link } from "react-router";

export function SkipLink({ main }) {
  return (
    <>
      <Link to={main} className="skip-link">
        Skip to main content
      </Link>
    </>
  );
}
