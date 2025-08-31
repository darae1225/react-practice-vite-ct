import { Link } from "react-router";
import { SkipLink } from "../SkipLink";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ExpertiseHeading } from "../servicespage/ExpertiseHeading";
import { Therapist } from "../servicespage/Therapist";
import { Spacer } from "../share/Spacer";

export function ExpertisePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="expertise">
        <ExpertiseHeading />
        <Therapist />
      </main>
      <Footer />
    </>
  );
}
