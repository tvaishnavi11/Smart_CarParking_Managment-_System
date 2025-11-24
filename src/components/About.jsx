import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto mb-10">
        <img
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a"
          alt="Smart Parking"
          className="w-full h-72 object-cover rounded-xl shadow-lg"
        />
      </div>
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        IntelliPark Smart Car Parking System
      </h1>

      {/* Intro Section */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-700 text-lg leading-relaxed">
          IntelliPark Smart Car Parking System is a modern web application
          designed to make parking easier, faster, and more organized. This
          system helps users book slots, check availability, view their booking
          history, and avoid long waiting times.
        </p>
      </div>

      {/* Mission + Vision */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Our Mission</h2>
          <p className="text-gray-700">
            To provide a smart and automated parking solution that saves time,
            reduces human effort, and offers a smooth user experience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Our Vision</h2>
          <p className="text-gray-700">
            To build a future where parking becomes easy, convenient, and
            completely technology-driven.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <h2 className="text-3xl font-bold text-center text-blue-700 mt-16 mb-6">
        Key Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            Real-Time Slots
          </h3>
          <p className="text-gray-600 mt-2">
            See available, booked, and occupied slots instantly.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800">Easy Booking</h3>
          <p className="text-gray-600 mt-2">
            Book your parking slot within seconds.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800">Secure System</h3>
          <p className="text-gray-600 mt-2">
            Your details and booking data are completely safe.
          </p>
        </div>
      </div>

      {/* Bottom Highlight */}
      <div className="max-w-3xl mx-auto bg-blue-700 text-white p-6 rounded-xl shadow-md mt-16">
        <h2 className="text-2xl font-bold text-center mb-3">Our Commitment</h2>
        <p className="text-center text-gray-100">
          We aim to make parking stress-free and smart for everyone. Your
          convenience and safety are our top priorities.
        </p>
      </div>
    </div>
  );
};

export default About;
