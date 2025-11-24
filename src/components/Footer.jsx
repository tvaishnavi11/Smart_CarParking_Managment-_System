import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-12 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide">
            Smart Parking System
          </h2>
          <p className="mt-2 text-sm opacity-80 leading-relaxed">
            A modern solution for real-time parking slot monitoring, fast
            booking, and easy management.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook className="cursor-pointer hover:text-blue-300 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-300 transition" />
            <FaLinkedin className="cursor-pointer hover:text-blue-300 transition" />
            <FaGithub className="cursor-pointer hover:text-gray-300 transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/admin" className="hover:text-gray-300">
                Admin Dashboard
              </a>
            </li>
            <li>
              <a href="/bookings" className="hover:text-gray-300">
                Booking List
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <p className="text-sm opacity-80">📍 Pune, Maharashtra, India</p>
          <p className="text-sm opacity-80">📞 +91 98765 43210</p>
          <p className="text-sm opacity-80">📧 support@smartparking.com</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-sm opacity-70 border-t border-white/20 pt-5">
        © {new Date().getFullYear()} Smart Parking System — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
