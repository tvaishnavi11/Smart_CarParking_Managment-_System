import React, { useState, useEffect } from "react";

const BookingForm = ({ slot, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");

  // ---- STATES ----
  const [startTime, setStartTime] = useState("");
  const [hours, setHours] = useState("");
  const pricePerHour = 50;

  // Fix total price (convert hours to number always)
  const totalPrice = (Number(hours) || 0) * pricePerHour;

  const [endTime, setEndTime] = useState("");

  // --------------------------------------------
  // 🚀 FIXED END TIME CALCULATION (NO UTC ISSUE)
  // --------------------------------------------
  useEffect(() => {
    if (startTime && Number(hours) > 0) {
      const start = new Date(startTime);

      const end = new Date(start.getTime() + Number(hours) * 60 * 60 * 1000);

      // Convert local date-time properly (NOT UTC)
      const formattedEnd = `${end.getFullYear()}-${String(
        end.getMonth() + 1
      ).padStart(2, "0")}-${String(end.getDate()).padStart(2, "0")}T${String(
        end.getHours()
      ).padStart(2, "0")}:${String(end.getMinutes()).padStart(2, "0")}`;

      setEndTime(formattedEnd);
    } else {
      setEndTime("");
    }
  }, [startTime, hours]);

  // --------------------------------------------
  // 🚀 FIXED SUBMIT HANDLER
  // --------------------------------------------
  const handleSubmit = () => {
    if (!name || !phone || !vehicle || !startTime || Number(hours) <= 0) {
      alert("All fields are required!");
      return;
    }

    // Show correct price always
    alert(`Total Price: ₹${totalPrice}`);

    const bookingData = {
      id: Date.now(),
      slotNumber: slot.slotNumber,
      name,
      phone,
      vehicle,
      startTime,
      endTime,
      hours: Number(hours),
      totalPrice,
      status: "booked",
    };

    onSubmit(bookingData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-96 shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Book Slot #{slot.slotNumber}
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-3 border rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 mb-3 border rounded-lg"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Vehicle Number"
          className="w-full p-3 mb-3 border rounded-lg"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        />

        {/* Start Time */}
        <label className="font-semibold">Start Time</label>
        <input
          type="datetime-local"
          className="w-full p-3 mb-3 border rounded-lg"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />

        {/* Hours Selection */}
        <label className="font-semibold">Hours to Park</label>
        <input
          type="number"
          min="1"
          className="w-full p-3 mb-3 border rounded-lg"
          placeholder="Enter number of hours"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
        />

        {/* Auto Calculated Info */}
        <div className="bg-gray-100 p-3 rounded-lg text-sm mb-4">
          <p>
            <strong>End Time:</strong>{" "}
            {endTime ? endTime.replace("T", " ") : "--"}
          </p>
          <p>
            <strong>Total Price:</strong> ₹{totalPrice}
          </p>
        </div>

        <div className="flex justify-between">
          <button
            className="bg-red-500 text-white px-5 py-2 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
