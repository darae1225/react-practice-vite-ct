import "../../index.css";
import { Header } from "../header/Header";
import "../header/Header.css";
import { Footer } from "../footer/Footer";
import { MainHeading } from "./MainHeading";
import { Benefits } from "./Benefits";
import { OtAppointment } from "./OtAppointment";
import { OtFaq } from "./OtFaq";
import { SkipLink } from "../SkipLink";
import "../../index.css";

export function HomePage() {
  return (
    <>
      <SkipLink mainContentId="index" />
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
