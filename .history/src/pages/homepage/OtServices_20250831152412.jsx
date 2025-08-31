import "./OtServices.css";
import { Link } from "react-router";

export function OtSertives() {
  return (
    <>
      <section className="section-container ot-services">
        <h1>Our services</h1>
        <section className="ot-services-container">
          <section className="ot-services-content">
            <h2>Occupational Therapy for Children</h2>
            <p>
              Support your child’s growth and independence with paediatric
              occupational therapy in Perth. We help with motor skills, sensory
              integration, and daily routines, in home or school settings
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
    </>
  );
}
