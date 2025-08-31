import { Link } from "react-router";
import { SkipLink } from "../SkipLink";

export function ExpertisePage() {
  return (
    <>
      <SkipLink />
      {/* <body>
        <Link href="#maincontent" className="skip-link">
          Skip to main content
        </Link>
        <div id="wrapper">
          <header>
            <nav aria-label="navigation">
              <ul>
                <li>
                  <img
                    src="./images/choose-therapy-logo-transparent.png"
                    className="nav-logo-img"
                    style="width: 100px; height: 100px"
                    alt="choose therapy logo"
                  />
                </li>
              </ul>
              <ul className="menu">
                <li>
                  <Link href="index.html">Home</Link>
                </li>
                <li>
                  <Link href="expertise.html">OT Services</Link>
                </li>
                <li>
                  <Link href="pricing.html">Pricing</Link>
                </li>
                <li>
                  <Link
                    href="https://clientportal.zandahealth.com/clientportal/choosetherapy"
                    target="_blank"
                  >
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link href="contact.html">Contact</Link>
                </li>
                <li>
                  <Link
                    href="https://choosetherapy.com.au/blog"
                    target="_blank"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
            <section id="nav-cont" className="nav-icon-container">
              <Link href="/">
                <img
                  src="./images/choose-therapy-logo-transparent.png"
                  className="nav-logo-img"
                  style="width: 100px; height: 100px"
                  alt="choose therapy logo"
                />
              </Link>
              <section id="hamburger-menu">
                <nav>
                  <ul>
                    <li>
                      <Link href="index.html">Home</Link>
                    </li>
                    <li>
                      <Link href="expertise.html">Expertise</Link>
                    </li>
                    <li>
                      <Link href="pricing.html">Pricing</Link>
                    </li>
                    <li>
                      <Link
                        href="https://clientportal.zandahealth.com/clientportal/choosetherapy"
                        target="_blank"
                      >
                        Appointment
                      </Link>
                    </li>
                    <li>
                      <Link href="contact.html">Contact</Link>
                    </li>
                    <li>
                      <Link
                        href="https://choosetherapy.com.au/blog"
                        target="_blank"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </section>
              <Link href="/" aria-label="Open navigation menu">
                <img
                  id="hamburger-icon"
                  className="nav-icon"
                  src="./images/navigation-icon.svg"
                  alt="button to open navigation"
                  width="40"
                  height="40"
                  aria-label="Open navigation menu"
                />
              </Link>
            </section>
            <section id="logo" className="logo">
              <Link href="/">
                <img
                  src="./images/choose-therapy-logos-black.png"
                  className="logo-img"
                  style="width: 202px; height: 202px"
                  alt="choose therapy logo"
                />
              </Link>
              <p>Your life, your choice.</p>
            </section>
          </header>
          <main id="expertise">
            <section className="heading">
              <h1>Expertise</h1>
            </section>
            <section className="section-container therapist">
              <article>
                <h2 id="maincontent">
                  Meet Jerome, <br />
                  our neighborhood occupational therapist!
                </h2>
                <p>
                  Jerome brings a wealth of experience from both private
                  practices and NDIS-registered providers, with a strong track
                  record of working closely with individuals in the community.
                  After earning his Honours degree in Occupational Therapy, he
                  authored a research paper published in the *Journal of Autism
                  and Developmental Disorders* in 2021.
                </p>
                <p>
                  His expertise in the NDIS landscape is well-established,
                  encompassing direct services, Functional Capacity Assessment
                  reports (FCA), Home and Living reports (SIL and SDA), sensory
                  assessments, and recommendation letters. Jerome is adept at
                  providing face-to-face support and has a comprehensive
                  understanding of the NDIS system and its processes.
                </p>
                <p>
                  He has worked with individuals with diverse disabilities,
                  including respiratory conditions, hemiparesis, autism spectrum
                  disorder, ADHD, oppositional defiant disorder, intellectual
                  disabilities, developmental delays, schizophrenia, visual
                  impairments, bipolar disorder, anxiety, depression, aggressive
                  behaviours, and epilepsy.
                </p>
                <p>
                  Jerome also integrates Virtual Reality into his practice,
                  providing immersive experiences that have received positive
                  feedback from clients. He offers training and guidance on
                  using this technology to support and achieve therapeutic goals
                  when requested.
                </p>
              </article>
              <aside>
                <img
                  className="main-therapist"
                  src="./images/nathan-hurst-_sNjj_oBeao-unsplash1.jpg"
                  style="width: 327px; height: 478px"
                  alt="a photo of Perth City in WA"
                />
              </aside>
            </section>
          </main>
          <footer aria-label="expertise-footer">
            <section className="footer-main">
              <section className="left-footer">
                <section className="footer-logo">
                  <Link href="/">
                    <img
                      src="./images/choose-therapy-logo-transparent.png"
                      className="footer-logo-img"
                      style="width: 152px; height: 152px"
                      alt="choose therapy logo"
                    />
                  </Link>
                </section>
                <section className="social-media">
                  <Link href="https://www.facebook.com/choosetherapy.au">
                    <img
                      className="facebook-logo"
                      src="./images/facebook-sns.png"
                      style="width: 20px; height: 20px"
                      alt="facebook logo"
                    />
                  </Link>
                  <Link href="https://www.instagram.com/choosetherapy.au/">
                    <img
                      src="./images/instagram-logo.png"
                      style="width: 20px; height: 20px"
                      alt="instagram logo"
                    />
                  </Link>
                  <Link href="https://au.linkedin.com/in/jerome-choo-42639375?original_referer=https%3A%2F%2Fwww.google.com%2F">
                    <img
                      src="./images/linkedin-logo.png"
                      style="width: 20px; height: 20px"
                      alt="linkedin logo"
                    />
                  </Link>
                  <Link href="https://www.youtube.com/@Choose-Therapy">
                    <img
                      className="youtube-logo"
                      src="./images/youtube-logo.png"
                      style="width: 20px; height: 20px"
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
                  <Link className="email" href="mailto:choosetherapy@gmail.com">
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
                    <Link href="index.html">Choose Therapy</Link>
                  </li>
                  <li>
                    <Link href="expertise.html">OT Services</Link>
                  </li>
                  <li>
                    <Link href="#">T&Cs</Link>
                  </li>
                  <li>
                    <Link
                      href="https://clientportal.zandahealth.com/clientportal/choosetherapy"
                      target="_blank"
                    >
                      Appointment
                    </Link>
                  </li>
                  <li>
                    <Link href="contact.html">Support</Link>
                  </li>
                </ul>
              </nav>
              <p>&copy; 2025 Choose Therapy. All rights are reserved.</p>
              <p>
                Developed by
                <Link
                  className="copyright-statement"
                  href="https://choosetherapy.com.au"
                  target="_blank"
                >
                  LaGifters
                </Link>
                .
              </p>
            </section>
          </footer>
        </div>
        <script src="./js/navigation.js"></script>
        <script src="./js/mouse.js"></script>
      </body> */}
    </>
  );
}
