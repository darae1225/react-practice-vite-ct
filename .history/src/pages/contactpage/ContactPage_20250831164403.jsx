import { Header } from "../header/Header";

export function ContactPage() {
  return (
    <>
      <Header />
      <main id="contact">
        <section className="heading">
          <h1>Contact Us</h1>
        </section>
        <section className="section-container section">
          <section className="des">
            <p id="maincontent">We would love to hear from you!</p>
            <p>We will get back to you within 2 business days.</p>
          </section>
          <form
            action="https://formsubmit.co/1141c4132a5bd5aa7a77681bb9551ee6"
            method="POST"
            id="theForm"
          >
            <input
              type="text"
              name="_honey"
              style={{ display: "none" }}
              aria-label="spam protection"
              aria-hidden="true"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
              aria-label="spam protection"
              aria-hidden="true"
            />

            <input
              type="hidden"
              name="_next"
              value="https://choosetherapy.com.au/success.html"
              aria-label="spam protection"
              aria-hidden="true"
            />

            <fieldset>
              <section className="details mobile-details">
                <label for="firstName" className="block-label">
                  First Name <span>&#42;</span>
                </label>
                <input type="text" name="FirstName" id="firstName" required />
                <span
                  className="tooltip"
                  id="tooltip-firstName"
                  aria-label="tooltip-firstName"
                >
                  Please enter your first name
                </span>
              </section>
              <section className="details mobile-details">
                <label for="lastName" className="block-label">
                  Last Name <span>&#42;</span>
                </label>
                <input
                  type="text"
                  name="LastName"
                  id="lastName"
                  aria-label="tooltip-lastName"
                  required
                />
                <span className="tooltip" id="tooltip-lastName">
                  Please enter your last name
                </span>
              </section>
              <section className="details mobile-details">
                <label for="email" className="block-label">
                  Email Address <span>&#42;</span>
                </label>
                <input type="email" name="email" id="email" required />
                <span
                  className="tooltip"
                  id="tooltip-email"
                  aria-label="tooltip-email"
                >
                  Please enter valid email address
                </span>
              </section>
              <section className="details mobile-details">
                <label for="phone" className="block-label">
                  Phone Number <span>&#42;</span>
                </label>
                <input type="tel" name="phone" id="phone" required />
                <span className="tooltip" aria-label="tooltip-phoneNumber">
                  Please enter valid phone number
                </span>
              </section>
              <section className="message mobile-details">
                <label for="message" className="block-label">
                  Your message
                </label>
                <input type="text" name="message" id="message" required />
                <span
                  className="tooltip"
                  id="tooltip-message"
                  aria-label="tooltip-message"
                >
                  Please describe the plan you are currently on and what you
                  would like to inquire about.
                </span>
              </section>
              <section>
                <label for="agreement" className="block-label">
                  I would like to receive emails from Choose Therapy
                </label>
                <input type="radio" name="agreement" id="agreement" required />
              </section>
              <section className="submit mobile-details">
                <input
                  type="submit"
                  value="Submit"
                  id="submit"
                  aria-label="Submit form"
                />
              </section>
            </fieldset>
          </form>
        </section>
      </main>
    </>
  );
}
