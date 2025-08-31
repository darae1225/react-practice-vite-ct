export function PricingPage() {
  return (
    <>
      <main id="pricing">
        <section class="heading">
          <h1 id="maincontent">Pricing</h1>
        </section>
        <section class="section-container pricing">
          <section class="billing">
            <section>
              <h2 class="plans">NDIS or Self-Managed</h2>
              <p class="rate">$193.99</p>
              <p class="session">per hour</p>
            </section>
            <section>
              <ul class="pricing-info">
                <li>OT Intervention 1 - 2 hrs</li>
                <li>Assessment 1.5 - 2 hrs</li>
                <li>Reports 12 - 18 hrs</li>
                <li>AT Trials 10 - 20 hrs</li>
              </ul>
            </section>
          </section>
          <section class="billing">
            <section>
              <h2 class="plans">Bulk-Billing (Medicare)</h2>
              <p class="rate">Currently Not Available</p>
            </section>
            <section>
              <ul class="pricing-info">
                <li>Care Plan from GP</li>
              </ul>
            </section>
          </section>
          <section class="billing">
            <section>
              <h2 class="plans">Private Health</h2>
              <p class="rate">$220</p>
              <p class="session">per session</p>
            </section>
            <section>
              <ul class="pricing-info">
                <li>Extended session can range from 1 - 3 hours flat rate</li>
                <li>Formal Assessments and Progress Reports</li>
                <li>Highly Personalised Plans</li>
              </ul>
            </section>
          </section>
        </section>

        <section class="section-container table">
          <table aria-describedby="services-that-we-offer">
            <caption id="services-that-we-offer">
              Services that we offer
            </caption>
            <thead>
              <tr>
                <th id="services" scope="col">
                  Services
                </th>
                <th id="NDIS-or-SelfManaged" scope="col">
                  NDIS or Self-Managed
                </th>
                <th id="private-health" scope="col">
                  Private Health
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td headers="services">Consultation fee</td>
                <td headers="NDIS-or-SelfManaged">$193.99 per hour</td>
                <td headers="private-health">$220 per session</td>
              </tr>
              <tr>
                <td headers="services">Services</td>
                <td headers="NDIS-or-SelfManaged">
                  <ul>
                    <li>OT Intervention 1-2hrs</li>
                    <li>Assessment 1.5-2 hrs</li>
                    <li>Reports 12-18hrs</li>
                    <li>AT Trials 10-20hrs</li>
                  </ul>
                </td>
                <td headers="private-health">
                  <ul>
                    <li>
                      Extended session can range from 1 - 3 hours flat rate
                    </li>
                    <li>Formal Assessments and Progress Reports</li>
                    <li>Highly Personalised Plans</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
