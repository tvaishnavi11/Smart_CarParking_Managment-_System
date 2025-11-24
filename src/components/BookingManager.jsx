import React, { useState } from "react";

export function BookingManager({ bookings = [], onCancel, onRefresh }) {
  const [q, setQ] = useState("");
  const filtered = bookings.filter((b) =>
    [b.name, b.vehicle, b.phone, b.slotNumber]
      .join(" ")
      .toLowerCase()
      .includes(q.toLowerCase())
  );
  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h3 className="font-bold mb-3">Booking Management</h3>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search by name/vehicle/slot"
        className="w-full p-2 border mb-3"
      />
      <div className="max-h-64 overflow-auto">
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-500">No bookings</p>
        ) : (
          filtered.map((b) => (
            <div
              key={b.id}
              className="flex items-center justify-between border-b py-2"
            >
              <div>
                <div className="font-semibold">
                  {b.name} — {b.slotNumber}
                </div>
                <div className="text-xs">
                  {b.vehicle} • {b.phone}
                </div>
                <div className="text-xs text-gray-500">
                  {b.startTime} → {b.endTime}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold text-green-700">
                  ₹{b.totalPrice}
                </div>
                <button
                  onClick={() => onCancel(b)}
                  className="text-red-600 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-3 flex justify-end">
        <button onClick={onRefresh} className="px-3 py-1 bg-gray-200 rounded">
          Refresh
        </button>
      </div>
    </div>
  );
}
export default BookingManager;
