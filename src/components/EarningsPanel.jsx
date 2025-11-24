import React, { useMemo, useState } from "react";

function EarningsPanel({ bookings = [] }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Filter bookings by date range
  const filtered = bookings.filter((b) => {
    if (!from && !to) return true;

    const start = new Date(b.startTime);
    const fromDate = from ? new Date(from) : null;
    const toDate = to ? new Date(to) : null;

    if (fromDate && start < fromDate) return false;
    if (toDate && start > toDate) return false;

    return true;
  });

  // Total earnings and total bookings
  const totals = useMemo(
    () => ({
      total: filtered.reduce((sum, b) => sum + (b.totalPrice || 0), 0),
      count: filtered.length,
    }),
    [filtered]
  );

  return (
    <div className="bg-white p-5 mt-6 rounded-xl shadow-lg border border-gray-200">
      <h3 className="font-bold text-xl mb-5 text-blue-700">Earnings Summary</h3>

      {/* Date Filter Inputs */}
      <div className="flex gap-4 items-center mb-4">
        <div>
          <label className="text-sm font-semibold">From</label>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="p-2 border rounded-lg ml-2"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">To</label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="p-2 border rounded-lg ml-2"
          />
        </div>
      </div>

      {/* Earnings Box */}
      <div className="bg-blue-100 p-5 rounded-lg flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Total Earnings</p>
          <h2 className="text-3xl font-bold text-blue-700">₹{totals.total}</h2>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-600">Total Bookings</p>
          <h3 className="text-2xl font-semibold">{totals.count}</h3>
        </div>
      </div>

      {/* Show range info */}
      {(from || to) && (
        <p className="text-sm text-gray-500 mt-3">
          Showing results from{" "}
          <span className="font-semibold">{from || "start"}</span> to{" "}
          <span className="font-semibold">{to || "end"}</span>.
        </p>
      )}
    </div>
  );
}

export default EarningsPanel;
