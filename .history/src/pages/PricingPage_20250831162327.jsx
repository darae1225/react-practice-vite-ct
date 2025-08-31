export function PricingPage() {
  return <>
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
                <th id="services" scope="col">Services</th>
                <th id="NDIS-or-SelfManaged" scope="col">
                  NDIS or Self-Managed
                </th>
                <th id="private-health" scope="col">Private Health</th>
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

        <!-- <section class="section-container faq">
        <section>
          <h2>Frequently Asked Questions</h2>
          <details>
            <summary>
              What is a NDIS plan?
            </summary>
            <section class="answers">
              <p>
                An NDIS plan is a personalized support plan created for participants of the National Disability Insurance Scheme (NDIS) in Australia. The plan outlines the individual’s goals, needs, and the types of support and services they are eligible to receive under the NDIS. Here are the key components of an NDIS plan:
              </p>
              <ul>
                <li>
                  Personal Goals: The plan includes the participant's goals and aspirations, such as improving daily living skills, gaining employment, or increasing community participation.
                </li>
                <li>
                  Support Categories: It details the types of support and services required to achieve these goals. This can include personal care, therapy services, assistive technology, or home modifications.
                </li>
                <li>
                  Funding Allocation: The plan specifies how much funding is allocated for different categories of support and how this funding can be used. This can be in the form of core supports, capital supports, or capacity building supports.
                </li>
                <li>
                  Service Providers: It may list approved service providers or allow participants to choose their own providers to deliver the necessary supports.
                </li>
                <li>
                  Plan Review: The plan is reviewed periodically (usually annually) to assess progress and make adjustments based on changes in needs, goals, or circumstances. This is where you gather all of your provider’s progress reports or updated functional assessment reports
                </li>
              </ul>
              <p>
                Overall, an NDIS plan is designed to ensure that individuals with disabilities receive the necessary support to live as independently and inclusively as possible.
              </p>
            </section>
          </details>
          <details>
            <summary>
              What category in my NDIS plan does Occupational Therapy fall under?
            </summary>
            <section class="answers">
              <p>
                Occupational Therapy is normally funded under Improved Daily Living. This category of funding aims to support you in acquiring essential skills to boost your independence, enhance your confidence, and better manage the daily challenges you encounter.
              </p>
            </section>
          </details>
          <details>
            <summary>What if I am NDIA managed? </summary>
            <section class="answers">
              <p>
                Currently, Choose Therapy only offers services to Self-Managed and Plan-Managed Participants.
              </p>
            </section>
          </details>
          <details>
            <summary>
              What are the different types of plan managements?
            </summary>
            <section class="answers">
              <p>
                <span class="note">Self-Managed</span>: Participants manage their NDIS funds themselves. They have full control over their budget, can choose any provider, and handle all the administrative tasks like paying invoices and keeping records.
              </p>
              <p>
                <span class="note">Plan-Managed</span>: A Plan Manager is hired to manage the NDIS funds on behalf of the participant. The Plan Manager handles the financial and administrative responsibilities, such as paying providers and keeping track of spending, while the participant still has flexibility in choosing providers.
              </p>
              <p>
                <span class="note">NDIA-Managed</span>: The National Disability Insurance Agency (NDIA) manages the funds directly. Participants can only use NDIS-registered providers, and the NDIA takes care of all payments and administration, offering the least administrative burden for the participant but with more restrictions on provider choice. Please note *<span class="note">Choose Therapy is currently unable to provide services to NDIS-Managed participants until further notice. </span>
              </p>
            </section>
          </details>
          <details>
            <summary>
              Can I have my consultation bulk billed?
            </summary>
            <section class="answers">
              <ul>
                <li>Bulk-biling consultation is currently unavailable. If you wish to discuss further, please contact our team at choosetherapy.com.au </li>
                <li>
                  Ensure you are eligible for bulk billing, which typically requires having a valid Medicare card and meeting specific criteria, such as being referred by a doctor for a Medicare-funded occupational therapy service
                </li>
                <li>
                  Obtain <span class="note">a referral</span> from your General Practitioner (GP) or a specialist.
                </li>
                <li>
                  If the service is fully bulk-billed, you won't be required to pay anything out-of-pocket. Medicare covers the full fee.
                </li> -
              </ul>
            </section>
          </details>
          <details>
            <summary>
              What is NDIS and how is it different from Medicare?
            </summary>
            <section class="answers">
              <p>
                The <span class="note">National Disability Insurance Scheme (NDIS)</span> is an Australian government initiative designed to support people with significant and permanent disabilities. It provides funding for services and supports that are tailored to an individual's needs, enabling them to live as independently as possible. 
              </p>
              <p>
                The NDIS focuses on long-term assistance, including therapies, equipment, and personal care, to help participants achieve their goals in areas like education, employment, and social participation.
              </p>
              <p>
                In contrast, <span class="note">Medicare</span> is Australia's universal health care system that covers basic medical services for all Australians, including doctor visits, hospital care, and essential treatments. Medicare is not specifically designed for disability-related needs but rather offers general health care. While both NDIS and Medicare are government-funded, NDIS is more specialised in supporting people with disabilities, whereas Medicare provides broad health coverage for the general population.
              </p>
            </section>
          </details>
          <details>
            <summary>
              How do I apply for an NDIS plan?
            </summary>
            <section class="answers">
              <p>
                If you are eligible for NDIS, you can contact your local NDIS office or local NDIS partner or call 1800 800 110 and ask for an <a href="https://www.ndis.gov.au/media/2323/download?attachment"><span class="links">NDIS Access Request Form</span></a> to be mailed or emailed to you. You can also download and complete the NDIS Access Request Form on your computer and email it to <span class="note">enquiries@ndis.gov.au</span> with supporting documentation. 
              </p>
            </section>
          </details>
          <details>
            <summary>
              Can I pay privately?
            </summary>
            <section class="answers">
              <p>
                Yes, you can pay privately for occupational therapy (OT) services. Private OT services are available to individuals who may not qualify for government-funded programs like the NDIS or Medicare or who prefer to access additional or specific services beyond what is covered.
              </p>
              <p>
                Paying privately allows for greater flexibility in choosing the therapist, the type of therapy, and the frequency of sessions, making it an option for those seeking more personalised or immediate care.
              </p>
            </section>
          </details>
        </section>
      </section>

      </main>
  </>;
}
