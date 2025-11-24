import React from "react";
import { FaCar, FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaCar className="text-3xl text-yellow-400" />
          <h1 className="text-2xl font-bold tracking-wide">
            Smart Car Parking
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {/*<li className="hover:text-yellow-400 cursor-pointer transition">
            Home
          </li>*/}
          <NavLink to="/">Home</NavLink>

          {/*<li className="hover:text-yellow-400 cursor-pointer transition">
            Dashbord
          </li>*/}
          <NavLink to="/about">Dashbord</NavLink>

          {/*<li className="hover:text-yellow-400 cursor-pointer transition">
            Slots
          </li>*/}
          <NavLink to="/admin">ManageSlots</NavLink>
          {/* <li className="hover:text-yellow-400 cursor-pointer transition">
            Bookings
          </li>*/}
          <NavLink to="/booking">Booking Details</NavLink>
          {/* <li className="hover:text-yellow-400 cursor-pointer transition">
            Contact
          </li>*/}
          <NavLink to="/contact">Contact</NavLink>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <FaBars className="text-2xl cursor-pointer hover:text-yellow-400" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
