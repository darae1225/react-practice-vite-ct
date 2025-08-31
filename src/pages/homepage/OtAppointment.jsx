import "./OtAppointment.css";
import { Link } from "react-router";

export function OtAppointment() {
  return (
    <>
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
    </>
  );
}
