import { Link } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export function SlotManager({ slots = [], onAdd, onUpdate, onDelete }) {
  const [newSlot, setNewSlot] = useState("");

  const getColorClass = (status) => {
    if (status === "Available") return "bg-green-100 border-green-400";
    if (status === "Occupied") return "bg-yellow-100 border-yellow-400";
    if (status === "Booked") return "bg-red-100 border-red-400";
    return "bg-gray-200";
  };

  const handleAddSlot = () => {
    if (!newSlot.trim()) return alert("Enter a valid slot number!");
    onAdd(newSlot.trim());
    setNewSlot("");
  };

  const toggleStatus = (slot) => {
    if (slot.status === "Booked") {
      alert("Booked slot cannot be toggled!");
      return;
    }
    const next = slot.status === "Available" ? "Occupied" : "Available";
    onUpdate(slot.id, { status: next });
  };

  const handleBook = (slot) => {
    if (slot.status !== "Available") {
      alert("Only Available slots can be booked!");
      return;
    }
    onUpdate(slot.id, { status: "Booked" });
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-3 text-lg">Slot Management</h3>

      {/* Add New Slot */}
      <div className="flex gap-2 mb-4">
        <input
          value={newSlot}
          onChange={(e) => setNewSlot(e.target.value)}
          placeholder="Slot ID (e.g., E1)"
          className="p-2 border rounded flex-1"
        />
        <button
          onClick={handleAddSlot}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Slot List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {slots.map((s) => (
          <div
            key={s.id}
            className={`p-3 border rounded-xl flex items-center justify-between shadow ${getColorClass(
              s.status
            )}`}
          >
            <div>
              <div className="font-semibold text-lg">{s.slotNumber}</div>
              <div className="text-xs font-bold text-gray-700">{s.status}</div>
            </div>

            <div className="flex gap-2">
              {/* Toggle Available ↔ Occupied */}
              <button
                onClick={() => toggleStatus(s)}
                className="px-2 py-1 bg-blue-500 text-white rounded text-sm"
              >
                Toggle
              </button>

              {/* Mark as Booked */}

              <button
                onClick={() => handleBook(s)}
                className="px-3 py-1 bg-purple-600 text-white rounded text-sm"
              >
                Book
              </button>

              {/* Delete Slot */}
              <button
                onClick={() => onDelete(s.id)}
                className="px-2 py-1 bg-red-600 text-white rounded text-sm"
              >
                Del
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlotManager;
