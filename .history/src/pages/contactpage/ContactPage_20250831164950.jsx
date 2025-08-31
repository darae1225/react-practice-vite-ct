import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { FormSection } from "../contactpage/FormSection";
import { SkipLink } from "../SkipLink";

export function ContactPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="contact">
        <section className="heading">
          <h1>Contact Us</h1>
        </section>
        <FormSection />
      </main>
      <Footer />
    </>
  );
}
