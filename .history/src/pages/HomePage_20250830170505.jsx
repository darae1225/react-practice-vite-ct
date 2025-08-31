import { Link } from "react-router";
import "../index.css";

export function HomePage() {
  return (
    <>
      <Link to="#maincontent" className="skip-link">
        Skip to main content
      </Link>
      <header aria-label="homepage-header">
        <nav aria-label="navigation">
          <ul>
            <li>
              <img
                src="/images/choose-therapy-logo-transparent.png"
                className="nav-logo-img"
                alt="choose therapy logo"
              />
            </li>
          </ul>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/expertise">OT Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link
                to="https://clientportal.zandahealth.com/clientportal/choosetherapy"
                target="_blank"
              >
                Appointment
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="https://choosetherapy.com.au/blog" target="_blank">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <section id="nav-cont" className="nav-icon-container">
          <Link to="/">
            <img
              src="/images/choose-therapy-logo-transparent.png"
              className="nav-logo-img"
              alt="choose therapy logo"
            />
          </Link>
          <section id="hamburger-menu">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/expertise">OT Services</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link
                    to="https://clientportal.zandahealth.com/clientportal/choosetherapy"
                    target="_blank"
                  >
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
                <li>
                  <Link to="https://choosetherapy.com.au/blog" target="_blank">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
          <Link to="/" aria-label="Open navigation menu">
            <img
              id="hamburger-icon"
              className="nav-icon"
              src="/images/navigation-icon.svg"
              alt="button to open navigation"
              width="40"
              height="40"
              aria-label="Open navigation menu"
            />
          </Link>
        </section>
        <section id="logo" className="logo">
          <Link to="/">
            <img
              src="/images/choose-therapy-logos-black.png"
              className="logo-img"
              alt="choose therapy logo"
            />
          </Link>
          <p>Your life, your choice.</p>
        </section>
      </header>
      <main id="index">
        <section>
          <h1 className="main-heading">
            Unlock your full potential with quality occupational therapy
            services tailored to enhance your physical, mental, and emotional
            well-being
          </h1>
        </section>
        <section className="section-container ot-benefits">
          <h1 id="maincontent">Your choice for Occupational Therapy</h1>
          <section className="benefits-container">
            <section className="benefits-content">
              <img
                className="main-roads-web"
                src="/images/choose-therapy-main.jpg"
                alt="two narrow dirt roads branch off in different directions"
              />
            </section>
            <section className="benefits-content">
              <img
                className="main-roads-mobile"
                src="/images/choose-therapy-main-mobile.jpg"
                alt="two narrow dirt roads branch off in different directions"
              />
            </section>
            <section className="benefits-content">
              <h2>Occupational Therapy in Perth Area</h2>
              <p>
                Discover personalised care with leading NDIS occupational
                therapists in Perth—focused on helping you live more
                independently and confidently
              </p>
            </section>
            <section className="benefits-content">
              <h2>Therapy Sessions at Your Home</h2>
              <p>
                Our OTs visit you in the comfort of your home anywhere in Perth,
                delivering hands-on, goal-based therapy
              </p>
            </section>
            <section className="benefits-content">
              <h2>Individualised Therapy Sessions</h2>
              <p>
                We tailor every session to your unique needs, creating a therapy
                experience that fits your NDIS goals and lifestyle
              </p>
            </section>
            <section className="benefits-content">
              <h2>NDIS Care Plan with OT</h2>
              <p>
                Partner with a registered NDIS occupational therapist in Perth
                to create and deliver a plan that works for you
              </p>
            </section>
            <section className="benefits-content">
              <h2>Virtual Reality(VR) Occupational Therapy</h2>
              <p>
                Reimagine rehab through our cutting-edge VR occupational
                therapy—interactive, motivating, and effective for all ages
              </p>
            </section>
            <section className="landingpage-buttons">
              <Link to="/expertise">Learn more about our services</Link>
            </section>
          </section>
        </section>
        <section className="section-container ot-services">
          <h1>Our services</h1>
          <section className="ot-services-container">
            <section className="ot-services-content">
              <h2>Occupational Therapy for Children</h2>
              <p>
                Support your child’s growth and independence with paediatric
                occupational therapy in Perth. We help with motor skills,
                sensory integration, and daily routines, in home or school
                settings
              </p>
            </section>
            <section className="ot-services-content">
              <h2>Occupational Therapy for Adults</h2>
              <p>
                Enhance independence and quality of life with tailored
                occupational therapy for adults in Perth. We work with physical,
                neurological, and psychosocial needs—at home or via NDIS
              </p>
            </section>
            <section className="ot-services-content">
              <h2>NDIS Functional Capacity Assessment</h2>
              <p>
                Get a comprehensive NDIS Functional Capacity Assessment from
                qualified occupational therapists in Perth. Essential for access
                requests, plan reviews, or therapy recommendations
              </p>
            </section>
            <section className="ot-services-content">
              <h2>Assistive Technology</h2>
              <p>
                Our OTs assess, prescribe, and support the use of NDIS-funded
                assistive technology—from mobility aids to adaptive
                tools—improving safety and function at home
              </p>
            </section>
            <section className="ot-services-content">
              <h2>Bathroom, Home, and Shower Modifications</h2>
              <p>
                We design and recommend practical home modifications, including
                bathroom and shower adaptations, to help you stay safe and
                independent in your own space—NDIS-supported and expert-approved
              </p>
            </section>
          </section>
          <section className="landingpage-buttons first-button">
            <Link to="/pricing">Learn about our pricing</Link>
          </section>
          <section className="landingpage-buttons second-button">
            <Link to="/contact">Inquire now</Link>
          </section>
        </section>
        <section className="section-container ot-appointment">
          <h1>Book an appointment</h1>
          <section>
            <section className="landingpage-buttons">
              <Link
                to="https://clientportal.zandahealth.com/clientportal/choosetherapy"
                target="_blank"
              >
                Book an Appointment
              </Link>
            </section>
          </section>
        </section>
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
        <section className="section-container ot-blogs">
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
        </section>
      </main>
      <footer aria-label="homepage-footer">
        <section className="footer-main">
          <section className="left-footer">
            <section className="footer-logo">
              <Link to="/">
                <img
                  src="/images/choose-therapy-logo-transparent.png"
                  className="footer-logo-img"
                  alt="choose therapy logo"
                />
              </Link>
            </section>
            <section className="social-media">
              <Link to="https://www.facebook.com/choosetherapy.au">
                <img
                  className="facebook-logo"
                  src="/images/facebook-sns.png"
                  style={{ width: "20px", height: "20px" }}
                  alt="facebook logo"
                />
              </Link>
              <Link to="https://www.instagram.com/choosetherapy.au/">
                <img src="/images/instagram-logo.png" alt="instagram logo" />
              </Link>
              <Link to="https://au.linkedin.com/in/jerome-choo-42639375?original_referer=https%3A%2F%2Fwww.google.com%2F">
                <img
                  src="/images/linkedin-logo.png"
                  style={{ width: "20px", height: "20px" }}
                  alt="linkedin logo"
                />
              </Link>
              <Link to="https://www.youtube.com/@Choose-Therapy">
                <img
                  className="youtube-logo"
                  src="/images/youtube-logo.png"
                  style={{ width: "20px", height: "20px" }}
                  alt="youtube logo"
                />
              </Link>
            </section>
          </section>
          <section className="address">
            <div className="vcard">
              <span className="fn n">
                <span className="given-name"></span>
                <span className="additional-name"></span>
                <span className="family-name"></span>
              </span>
              <div className="tel">0430 522 850</div>
              <Link className="email" to="mailto:choosetherapy@gmail.com">
                choosetherapy@gmail.com
              </Link>
              <div className="adr">
                <span className="locality">
                  Armadale, Joondalup, Nedlands, Perth, Rockingham
                </span>
                <span className="region">WA</span>
                <span className="country-name">Australia</span>
              </div>
              <div className="org">Occupational Therapy Service</div>
            </div>
          </section>
        </section>
        <section className="copyright">
          <nav>
            <ul>
              <li>
                <Link to="/">Choose Therapy</Link>
              </li>
              <li>
                <Link to="/expertise">OT Services</Link>
              </li>
              <li>
                <Link to="#">T&Cs</Link>
              </li>
              <li>
                <Link
                  to="https://clientportal.zandahealth.com/clientportal/choosetherapy"
                  target="_blank"
                >
                  Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact">Support</Link>
              </li>
            </ul>
          </nav>
          <p>&copy; 2025 Choose Therapy. All rights are reserved.</p>
          <p>
            Developed by
            <Link
              className="copyright-statement"
              to="https://choosetherapy.com.au"
              target="_blank"
            >
              LaGifters
            </Link>
            .
          </p>
        </section>
      </footer>
    </>
  );
}
