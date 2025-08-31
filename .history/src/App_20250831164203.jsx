import { Route, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./pages/homepage/HomePage";
import { ExpertisePage } from "./pages/servicespage/ExpertisePage";
import { PricingPage } from "./pages/pricingpage/PricingPage";
import { AppointmentPage } from "./pages/AppointmentPage";
import { ContactPage } from "./pages/contactpage/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/expertise" element={<ExpertisePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
