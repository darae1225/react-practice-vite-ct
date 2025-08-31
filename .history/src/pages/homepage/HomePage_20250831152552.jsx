import { Link } from "react-router";
import "../../index.css";
import { Header } from "../header/Header";
import "../header/Header.css";
import { Footer } from "../footer/Footer";
import { MainHeading } from "./MainHeading";
import { Benefits } from "./Benefits";

export function HomePage() {
  return (
    <>
      <Link to="#maincontent" className="skip-link">
        Skip to main content
      </Link>
      <Header />
      <main id="index">
        <MainHeading />
        <Benefits />
        <OtAppointment />
        <section className="section-container faq">
          <h1>Frequently Asked Questions</h1>
          <section className="faq-container">
            <details>
              <summary>What is a NDIS plan?</summary>
              <section>
                <p>
                  An NDIS plan is a personalized support plan created for
                  participants of the National Disability Insurance Scheme
                  (NDIS) in Australia. The plan outlines the individual’s goals,
                  needs, and the types of support and services they are eligible
                  to receive under the NDIS. Here are the key components of an
                  NDIS plan:
                </p>
                <ul>
                  <li>
                    Personal Goals: The plan includes the participant's goals
                    and aspirations, such as improving daily living skills,
                    gaining employment, or increasing community participation.
                  </li>
                  <li>
                    Support Categories: It details the types of support and
                    services required to achieve these goals. This can include
                    personal care, therapy services, assistive technology, or
                    home modifications.
                  </li>
                  <li>
                    Funding Allocation: The plan specifies how much funding is
                    allocated for different categories of support and how this
                    funding can be used. This can be in the form of core
                    supports, capital supports, or capacity building supports.
                  </li>
                  <li>
                    Service Providers: It may list approved service providers or
                    allow participants to choose their own providers to deliver
                    the necessary supports.
                  </li>
                  <li>
                    Plan Review: The plan is reviewed periodically (usually
                    annually) to assess progress and make adjustments based on
                    changes in needs, goals, or circumstances. This is where you
                    gather all of your provider’s progress reports or updated
                    functional assessment reports
                  </li>
                </ul>
                <p>
                  Overall, an NDIS plan is designed to ensure that individuals
                  with disabilities receive the necessary support to live as
                  independently and inclusively as possible.
                </p>
              </section>
            </details>
            <details>
              <summary>
                What category in my NDIS plan does Occupational Therapy fall
                under?
              </summary>
              <section className="answers">
                <p>
                  Occupational Therapy is normally funded under Improved Daily
                  Living. This category of funding aims to support you in
                  acquiring essential skills to boost your independence, enhance
                  your confidence, and better manage the daily challenges you
                  encounter.
                </p>
              </section>
            </details>
            <details>
              <summary>What if I am NDIA managed?</summary>
              <section className="answers">
                <p>
                  Currently, Choose Therapy only offers services to Self-Managed
                  and Plan-Managed Participants.
                </p>
              </section>
            </details>
            <details>
              <summary>
                What are the different types of plan managements?
              </summary>
              <section className="answers">
                <p>
                  <span className="note">Self-Managed</span>: Participants
                  manage their NDIS funds themselves. They have full control
                  over their budget, can choose any provider, and handle all the
                  administrative tasks like paying invoices and keeping records.
                </p>
                <p>
                  <span className="note">Plan-Managed</span>: A Plan Manager is
                  hired to manage the NDIS funds on behalf of the participant.
                  The Plan Manager handles the financial and administrative
                  responsibilities, such as paying providers and keeping track
                  of spending, while the participant still has flexibility in
                  choosing providers.
                </p>
                <p>
                  <span className="note">NDIA-Managed</span>: The National
                  Disability Insurance Agency (NDIA) manages the funds directly.
                  Participants can only use NDIS-registered providers, and the
                  NDIA takes care of all payments and administration, offering
                  the least administrative burden for the participant but with
                  more restrictions on provider choice. Please note *
                  <span className="note">
                    Choose Therapy is currently unable to provide services to
                    NDIS-Managed participants until further notice.
                  </span>
                </p>
              </section>
            </details>
            <details>
              <summary>Can I have my consultation bulk billed?</summary>
              <section className="answers">
                <ul>
                  <li>
                    Bulk-biling consultation is currently unavailable. If you
                    wish to discuss further, please contact our team at
                    choosetherapy.com.au
                  </li>
                  <li>
                    Ensure you are eligible for bulk billing, which typically
                    requires having a valid Medicare card and meeting specific
                    criteria, such as being referred by a doctor for a
                    Medicare-funded occupational therapy service
                  </li>
                  <li>
                    Obtain <span className="note">a referral</span> from your
                    General Practitioner (GP) or a specialist.
                  </li>
                  <li>
                    If the service is fully bulk-billed, you won't be required
                    to pay anything out-of-pocket. Medicare covers the full fee.
                  </li>
                </ul>
              </section>
            </details>
            <details>
              <summary>
                What is NDIS and how is it different from Medicare?
              </summary>
              <section className="answers">
                <p>
                  The
                  <span className="note">
                    National Disability Insurance Scheme (NDIS)
                  </span>
                  is an Australian government initiative designed to support
                  people with significant and permanent disabilities. It
                  provides funding for services and supports that are tailored
                  to an individual's needs, enabling them to live as
                  independently as possible.
                </p>
                <p>
                  The NDIS focuses on long-term assistance, including therapies,
                  equipment, and personal care, to help participants achieve
                  their goals in areas like education, employment, and social
                  participation.
                </p>
                <p>
                  In contrast, <span className="note">Medicare</span> is
                  Australia's universal health care system that covers basic
                  medical services for all Australians, including doctor visits,
                  hospital care, and essential treatments. Medicare is not
                  specifically designed for disability-related needs but rather
                  offers general health care. While both NDIS and Medicare are
                  government-funded, NDIS is more specialised in supporting
                  people with disabilities, whereas Medicare provides broad
                  health coverage for the general population.
                </p>
              </section>
            </details>
            <details>
              <summary>How do I apply for an NDIS plan?</summary>
              <section className="answers">
                <p>
                  If you are eligible for NDIS, you can contact your local NDIS
                  office or local NDIS partner or call 1800 800 110 and ask for
                  an
                  <Link to="https://www.ndis.gov.au/media/2323/download?attachment">
                    <span className="links">NDIS Access Request Form</span>
                  </Link>
                  to be mailed or emailed to you. You can also download and
                  complete the NDIS Access Request Form on your computer and
                  email it to
                  <span className="note">enquiries@ndis.gov.au</span> with
                  supporting documentation.
                </p>
              </section>
            </details>
            <details>
              <summary>Can I pay privately?</summary>
              <section className="answers">
                <p>
                  Yes, you can pay privately for occupational therapy (OT)
                  services. Private OT services are available to individuals who
                  may not qualify for government-funded programs like the NDIS
                  or Medicare or who prefer to access additional or specific
                  services beyond what is covered.
                </p>
                <p>
                  Paying privately allows for greater flexibility in choosing
                  the therapist, the type of therapy, and the frequency of
                  sessions, making it an option for those seeking more
                  personalised or immediate care.
                </p>
              </section>
            </details>
          </section>
          <section className="landingpage-buttons">
            <Link to="expertise">Contact Us</Link>
          </section>
        </section>
        {/* <section className="section-container ot-blogs">
          <h1>Resources and Blogs</h1>
          <section className="blogs-container">
            <section className="blogs-content">
              <img src="/images/bamboo.jpg" alt="Bamboo forest landscape" />
              <h2>content</h2>
            </section>
            <section className="blogs-content">
              <img src="/images/bamboo.jpg" alt="Bamboo forest landscape" />
              <h2>content</h2>
            </section>
          </section>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
