import React from "react";

const Dashboard = ({ total, available, booked }) => {
  return (
    <div className="mt-10 bg-white p-6 rounded-xl shadow-xl w-[90%] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-3 gap-6 text-center">
        <div className="p-4 bg-blue-500 text-white rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">{total}</h3>
          <p>Total Slots</p>
        </div>

        <div className="p-4 bg-green-500 text-white rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">{available}</h3>
          <p>Available</p>
        </div>

        <div className="p-4 bg-red-500 text-white rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">{booked}</h3>
          <p>Booked</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
