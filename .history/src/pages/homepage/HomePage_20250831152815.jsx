import { Link } from "react-router";
import "../../index.css";
import { Header } from "../header/Header";
import "../header/Header.css";
import { Footer } from "../footer/Footer";
import { MainHeading } from "./MainHeading";
import { Benefits } from "./Benefits";
import { OtAppointment } from "./OtAppointment";
import { OtFaq } from "./OtFaq";

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
        <OtFaq />
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
