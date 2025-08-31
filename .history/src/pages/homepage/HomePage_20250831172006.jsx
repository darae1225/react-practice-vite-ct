// import { Link } from "react-router";
import "../../index.css";
import { Header } from "../header/Header";
import "../header/Header.css";
import { Footer } from "../footer/Footer";
import { MainHeading } from "./MainHeading";
import { Benefits } from "./Benefits";
import { OtAppointment } from "./OtAppointment";
import { OtFaq } from "./OtFaq";
// import { OtBlogs } from "./OtBlogs";
import { SkipLink } from "../SkipLink";

export function HomePage() {
  return (
    <>
      <SkipLink maincontent="index" />
      <Header />
      <main id="index">
        <MainHeading />
        <Benefits />
        <OtAppointment />
        <OtFaq />
        {/* <OtBlogs /> */}
      </main>
      <Footer />
    </>
  );
}
