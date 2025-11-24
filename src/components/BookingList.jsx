import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import EarningsPanel from "./EarningsPanel";

const API = "http://localhost:3000";

export default function BookedList() {
  const [bookings, setBookings] = useState([]);

  const loadBookings = async () => {
    try {
      const res = await fetch(`${API}/bookings`);
      const data = await res.json();
      setBookings(data);
    } catch (error) {
      console.error("Error loading bookings:", error);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full min-w-max">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-2">Slot</th>
              <th className="p-2">Name</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Vehicle</th>
              <th className="p-2">Start Time</th>
              <th className="p-2">End Time</th>
              <th className="p-2">Hours</th>
              <th className="p-2">Total Price</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="text-center border-b">
                <td className="p-2">{b.slotNumber}</td>
                <td className="p-2">{b.name}</td>
                <td className="p-2">{b.phone}</td>
                <td className="p-2">{b.vehicle}</td>

                {/* Format Date-Time */}
                <td className="p-2">
                  {new Date(b.startTime).toLocaleString()}
                </td>
                <td className="p-2">{new Date(b.endTime).toLocaleString()}</td>

                <td className="p-2">{b.hours}</td>
                <td className="p-2">₹{b.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Earnings Summary */}
      <div>
        <EarningsPanel bookings={bookings} />
      </div>
    </div>
  );
}
