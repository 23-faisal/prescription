import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DoctorsPage from "./pages/DoctorsPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MyAppointmentPage from "./pages/MyAppointmentPage";
import AppointmentPage from "./pages/AppointmentPage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%] min-h-screen flex flex-col ">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:speciality" element={<DoctorsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/my-appointments" element={<MyAppointmentPage />} />
          <Route path="/appointment/:docId" element={<AppointmentPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
