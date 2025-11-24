import React from "react";
import { motion } from "framer-motion";
import Dashboard from "./Dashbord";
import ParkingGrid from "./ParkinhGrid";

export const Header = ({ availableCount }) => {
  return (
    <>
      <header className="bg-blue-600 text-white p-5 flex justify-between items-center shadow-md">
        {/*<h1 className="text-2xl font-bold">Smart Parking System</h1>*/}

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-bold text-white"
        >
          Smart Parking System
        </motion.h1>

        <div className="flex gap-4">
          <div className="bg-blue-500 px-4 py-2 rounded-lg shadow">
            🚗 Available Slots: {availableCount}
          </div>
          <div className="bg-blue-500 px-4 py-2 rounded-lg shadow">
            ⏱️ Rate: ₹50/hour
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
