import React from "react";
import ParkingSot from "./ParkingSot";
//import ParkingSot from "./Parkingsot";

const ParkingGrid = ({ slots, onBook }) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-[#071a3c] p-10 rounded-2xl shadow-xl w-[90%]">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Parking Slots
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
          {slots.map((slot) => (
            <ParkingSot key={slot.id} slot={slot} onBook={onBook} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParkingGrid;
