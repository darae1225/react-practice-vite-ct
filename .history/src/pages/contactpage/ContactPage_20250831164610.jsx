import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { FormSection } from "../contactpage/FormSection";

export function ContactPage() {
  return (
    <>
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
