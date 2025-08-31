import { Link } from "react-router";
export function SkipLink() {
  return (
    <>
      <Link to="#maincontent" className="skip-link">
        Skip to main content
      </Link>
    </>
  );
}
