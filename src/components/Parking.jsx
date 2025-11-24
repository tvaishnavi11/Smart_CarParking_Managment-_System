import React, { useEffect, useState } from "react";
//import ParkingSlot from "./ParkingSlot";
//import BookingForm from "./BookingForm";
import axios from "axios";
import ParkingSot from "./Parkingsot";
import BookingForm from "./BookingForm";

const API = "http://localhost:3000";

const Parking = () => {
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Load slots
  useEffect(() => {
    axios.get(`${API}/slots`).then((res) => setSlots(res.data));
  }, []);

  // SAFE Booking Click Handler
  const handleSlotClick = async (slot) => {
    // Fetch latest slot status before allowing booking
    const res = await axios.get(`${API}/slots/${slot.id}`);
    const freshSlot = res.data;

    if (freshSlot.status !== "available") {
      alert(
        `Slot ${freshSlot.slotNumber} is ${freshSlot.status.toUpperCase()}`
      );
      return;
    }

    // Now it's safe → open booking form
    setSelectedSlot(freshSlot);
  };

  const handleBookingSubmit = async (bookingData) => {
    // Add booking data
    await axios.post(`${API}/bookings`, bookingData);

    // Set slot to BOOKED
    await axios.patch(`${API}/slots/${bookingData.slotId}`, {
      status: "booked",
    });

    // Refresh UI
    axios.get(`${API}/slots`).then((res) => setSlots(res.data));

    setSelectedSlot(null);
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10 p-5">
      {slots.map((slot) => (
        <ParkingSot key={slot.id} slot={slot} onBook={handleSlotClick} />
      ))}

      {selectedSlot && (
        <BookingForm
          slot={selectedSlot}
          onClose={() => setSelectedSlot(null)}
          onSubmit={handleBookingSubmit}
        />
      )}
    </div>
  );
};

export default Parking;
