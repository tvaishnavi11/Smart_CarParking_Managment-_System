import React from "react";

const ParkingSot = ({ slot, onBook }) => {
  const { slotNumber, status } = slot;

  return (
    <div
      onClick={() => status === "Available" && onBook(slot)}
      className={`
        w-40 h-40 flex flex-col items-center justify-center rounded-xl cursor-pointer
        border shadow-lg transition-all duration-300
        ${
          status === "Available"
            ? "bg-green-600/60 border-green-300 hover:bg-green-700/70"
            : status === "Occupied"
            ? "bg-yellow-600/60 border-yellow-300"
            : "bg-red-600/70 border-red-300"
        }
      `}
    >
      <p className="text-white text-xl font-bold">{slotNumber}</p>

      <span
        className={`
          mt-2 px-3 py-1 rounded-full text-sm font-semibold text-white
        `}
      >
        {status}
      </span>
    </div>
  );
};

export default ParkingSot;
