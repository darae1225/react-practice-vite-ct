import { Link } from "react-router";
import { SkipLink } from "../SkipLink";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ExpertiseHeading } from "../servicespage/ExpertiseHeading";
import { Therapist } from "../servicespage/Therapist";

export function ExpertisePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="expertise">
        <section>
          <h1>Expertise</h1>
        </section>
        <Therapist />
      </main>
      <Footer />
    </>
  );
}
