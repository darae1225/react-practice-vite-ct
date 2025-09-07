import { SkipLink } from "../SkipLink";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Therapist } from "../servicespage/Therapist";

export function ExpertisePage() {
  return (
    <>
      <SkipLink mainContentId="expertise" />
      <Header />
      <main id="expertise">
        <section className="heading">
          <h1 id="maincontent">Expertise</h1>
        </section>
        <Therapist />
      </main>
      <Footer />
    </>
  );
}
