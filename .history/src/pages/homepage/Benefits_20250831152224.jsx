import "./Benefits.css";

export function Benefits() {
  return (
    <>
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
              therapists in Perth—focused on helping you live more independently
              and confidently
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
              Partner with a registered NDIS occupational therapist in Perth to
              create and deliver a plan that works for you
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
    </>
  );
}
