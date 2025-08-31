import { Link } from "react-router";
import "./Footer.css";

export function Footer() {
  return (
    <>
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
