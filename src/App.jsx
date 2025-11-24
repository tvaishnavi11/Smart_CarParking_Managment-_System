import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminPanel from "./pages/Admin";
import BookedList from "./components/BookingList";
import Contact from "./pages/Contact";
//import Parking from "./components/Parking";
//import SlotManager from "./components/ManagementSlot";
//import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<Home />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/booking" element={<BookedList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
