import { Link } from "react-router";
import { SkipLink } from "../SkipLink";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ExpertiseHeading } from "../servicespage/ExpertiseHeading";

export function ExpertisePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <div id="wrapper">
        <main id="expertise">
          <ExpertiseHeading />

          <section className="section-container therapist">
            <article>
              <h2 id="maincontent">
                Meet Jerome, <br />
                our neighborhood occupational therapist!
              </h2>
              <p>
                Jerome brings a wealth of experience from both private practices
                and NDIS-registered providers, with a strong track record of
                working closely with individuals in the community. After earning
                his Honours degree in Occupational Therapy, he authored a
                research paper published in the *Journal of Autism and
                Developmental Disorders* in 2021.
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
                feedback from clients. He offers training and guidance on using
                this technology to support and achieve therapeutic goals when
                requested.
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
        <Footer />
      </div>
    </>
  );
}
