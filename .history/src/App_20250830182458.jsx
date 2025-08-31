import { Route, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./pages/homepage/HomePage";
import { ExpertisePage } from "./pages/ExpertisePage";
import { PricingPage } from "./pages/PricingPage";
import { AppointmentPage } from "./pages/AppointmentPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/expertise" element={<ExpertisePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
