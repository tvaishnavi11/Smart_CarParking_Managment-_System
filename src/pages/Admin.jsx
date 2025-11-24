import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SlotManager from "../components/ManagementSlot";
import BookingManager from "../components/BookingManager";
//import SlotManager from "../components/SlotManager";
//import EarningsPanel from "../components/EarningPannel";
//import BookingManager from "../components/BookingManager";

const API = "http://localhost:3000";

export function AdminPanel() {
  const [slots, setSlots] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // -----------------------------------------
  //  LOAD ALL DATA (SLOTS + BOOKINGS)
  // -----------------------------------------
  const loadAll = async () => {
    setLoading(true);
    setError("");

    try {
      const [slotRes, bookingRes] = await Promise.all([
        fetch(`${API}/slots`),
        fetch(`${API}/bookings`),
      ]);

      if (!slotRes.ok || !bookingRes.ok) {
        throw new Error("Backend not running OR wrong API URL");
      }

      const slotsData = await slotRes.json();
      const bookingsData = await bookingRes.json();

      setSlots(slotsData);
      setBookings(bookingsData);
    } catch (err) {
      setError(err.message);
      console.error("LOAD ERROR:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadAll();
  }, []);

  // -----------------------------------------
  //  SLOT CRUD FUNCTIONS
  // -----------------------------------------
  const addSlot = async (slotNumber) => {
    const newSlot = {
      id: Date.now(),
      slotNumber,
      status: "available",
    };

    await fetch(`${API}/slots`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSlot),
    });

    loadAll();
  };

  const updateSlot = async (id, data) => {
    await fetch(`${API}/slots/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    loadAll();
  };

  const deleteSlot = async (id) => {
    if (!confirm("Are you sure you want to delete this slot?")) return;

    await fetch(`${API}/slots/${id}`, {
      method: "DELETE",
    });

    loadAll();
  };

  // -----------------------------------------
  //  CANCEL BOOKING FUNCTION
  // -----------------------------------------
  const cancelBooking = async (booking) => {
    if (!confirm("Cancel this booking?")) return;

    // delete booking entry
    await fetch(`${API}/bookings/${booking.id}`, {
      method: "DELETE",
    });

    // free the slot
    await fetch(`${API}/slots/${booking.slotId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "available",
        name: "",
        phone: "",
        vehicle: "",
        startTime: "",
        endTime: "",
        hours: 0,
        totalPrice: 0,
      }),
    });

    loadAll();
  };

  // -----------------------------------------
  //  RENDER UI
  // -----------------------------------------
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center my-4">
        Management of Slot
      </h1>

      {loading && <p className="text-center">Loading data...</p>}
      {error && (
        <p className="text-center text-red-500 font-semibold">{error}</p>
      )}

      {/*  GRID SECTION  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 align-center">
        {/* Slot Manager */}
        <div className="md:col-span-2">
          <SlotManager
            slots={slots}
            onAdd={addSlot}
            onUpdate={updateSlot}
            onDelete={deleteSlot}
          />
        </div>

        {/* Earnings 
        <div>
          <EarningsPanel bookings={bookings} />
        </div>*/}
      </div>

      {/* Booking Management */}
      <div className="mt-6">
        <BookingManager
          bookings={bookings}
          onCancel={cancelBooking}
          onRefresh={loadAll}
        />
      </div>
    </div>
  );
}
export default AdminPanel;
