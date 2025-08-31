import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { SkipLink } from "../SkipLink";
import "./pricingPage.css";
import { Billing } from "./Billing";

export function PricingPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="pricing">
        <section className="heading">
          <h1 id="maincontent">Pricing</h1>
        </section>
        <Billing />
      </main>
      <Footer />
    </>
  );
}
