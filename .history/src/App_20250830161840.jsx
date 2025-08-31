import { Route, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./HomePage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
