import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Load saved data from localStorage on initial render
  useEffect(() => {
    const savedData = localStorage.getItem("contactForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to localStorage
    localStorage.setItem("contactForm", JSON.stringify(formData));
    alert("Your message has been sent!");
    // Reset form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white/20 backdrop-blur-xl p-10 shadow-2xl rounded-3xl grid md:grid-cols-2 gap-12 border border-white/30">
        {/* Contact Info */}
        <div className="text-white">
          <h2 className="text-4xl font-extrabold mb-4">Contact Us</h2>
          <p className="text-blue-100 mb-6 leading-relaxed text-lg">
            Have questions about our Smart Parking Management System? Our team
            is here to help you 24/7.
          </p>

          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Phone size={25} className="text-white" />
              </div>
              <p className="text-blue-50 font-medium">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Mail size={25} className="text-white" />
              </div>
              <p className="text-blue-50 font-medium">
                <a href="mailto:support@smartparking.com">
                  support@smartparking.com
                </a>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <MapPin size={25} className="text-white" />
              </div>
              <p className="text-blue-50 font-medium">
                Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-white font-semibold text-lg">Name</label>
            <div className="flex items-center bg-white/90 p-3 rounded-xl mt-2">
              <User className="text-blue-800 mr-3" />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full bg-transparent outline-none text-gray-700"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-white font-semibold text-lg">Email</label>
            <div className="flex items-center bg-white/90 p-3 rounded-xl mt-2">
              <Mail className="text-blue-800 mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-gray-700"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-white font-semibold text-lg">Message</label>
            <div className="flex items-center bg-white/90 p-3 rounded-xl mt-2">
              <MessageSquare className="text-blue-800 mr-3" />
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="w-full bg-transparent outline-none text-gray-700"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-blue-700 py-3 rounded-xl text-lg font-bold shadow-xl hover:bg-blue-100 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
