import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import "./pricingPage.css";

export function PricingPage() {
  return (
    <>
      <Header />

      <main id="pricing">
        <section className="heading">
          <h1 id="maincontent">Pricing</h1>
        </section>
        <section className="section-container pricing">
          <section className="billing">
            <section>
              <h2 className="plans">NDIS or Self-Managed</h2>
              <p className="rate">$193.99</p>
              <p className="session">per hour</p>
            </section>
            <section>
              <ul className="pricing-info">
                <li>OT Intervention 1 - 2 hrs</li>
                <li>Assessment 1.5 - 2 hrs</li>
                <li>Reports 12 - 18 hrs</li>
                <li>AT Trials 10 - 20 hrs</li>
              </ul>
            </section>
          </section>
          <section className="billing">
            <section>
              <h2 className="plans">Bulk-Billing (Medicare)</h2>
              <p className="rate">Currently Not Available</p>
            </section>
            <section>
              <ul className="pricing-info">
                <li>Care Plan from GP</li>
              </ul>
            </section>
          </section>
          <section className="billing">
            <section>
              <h2 className="plans">Private Health</h2>
              <p className="rate">$220</p>
              <p className="session">per session</p>
            </section>
            <section>
              <ul className="pricing-info">
                <li>Extended session can range from 1 - 3 hours flat rate</li>
                <li>Formal Assessments and Progress Reports</li>
                <li>Highly Personalised Plans</li>
              </ul>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
