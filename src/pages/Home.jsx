import React, { useEffect, useState } from "react";
//import ParkingGrid from "../components/ParkingGrid";
import BookingForm from "../components/BookingForm";
import Header from "../components/Header";
import Dashboard from "../components/Dashbord";

import Footer from "../components/Footer";
import ParkingGrid from "../components/ParkinhGrid";

const Home = () => {
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Load all slots
  const loadSlots = async () => {
    const res = await fetch("http://localhost:3000/slots");
    const data = await res.json();
    setSlots(data);
  };

  useEffect(() => {
    loadSlots();
  }, []);

  // --------------------------
  // Open Booking Form
  // --------------------------
  const handleOpenForm = (slot) => {
    if (slot.status === "occupied") {
      alert("This slot is already booked!");
      return;
    }
    setSelectedSlot(slot);
  };

  // --------------------------
  // Close Form
  // --------------------------
  const handleCloseForm = () => {
    setSelectedSlot(null);
  };

  // --------------------------
  // Submit Booking Form
  // --------------------------
  const handleFormSubmit = async (formData) => {
    const start = new Date(formData.startTime);
    const end = new Date(formData.endTime);

    // price logic
    const hours = Math.ceil((end - start) / (1000 * 60 * 60));
    const totalPrice = hours * 50;

    // Slot update object
    const updatedSlot = {
      ...selectedSlot,
      status: "occupied",
      ...formData,
      hours,
      totalPrice,
    };

    // Update Slot in db.json
    await fetch(`http://localhost:3000/slots/${selectedSlot.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedSlot),
    });

    // -------- Save booking in 'bookings' table --------
    const bookingEntry = {
      slotId: selectedSlot.id,
      slotNumber: selectedSlot.slotNumber,
      ...formData,
      hours,
      totalPrice,
    };

    await fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingEntry),
    });

    alert(
      `Slot ${selectedSlot.slotNumber} booked successfully!\nTotal Amount: ₹${totalPrice}`
    );

    setSelectedSlot(null);
    loadSlots(); // refresh slots
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Smart Parking System
      </h1>

      <Header />

      <ParkingGrid slots={slots} onBook={handleOpenForm} />

      {selectedSlot && (
        <BookingForm
          slot={selectedSlot}
          onClose={handleCloseForm}
          onSubmit={handleFormSubmit}
        />
      )}

      <Dashboard
        total={slots.length}
        available={slots.filter((s) => s.status === "available").length}
        booked={slots.filter((s) => s.status === "booked").length}
      />
    </div>
  );
};

export default Home;
