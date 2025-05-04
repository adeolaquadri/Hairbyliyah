import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const BookingForm = () => {
  const [form, setForm] = useState({ name: '', email: '', service: '', date: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const serviceID = 'service_nmd1zq8';
    const templateID = 'template_g4n3t3w';
    const userID = 'MQE3Fib7Gq9neAcdn'; // Public key

    emailjs.send(serviceID, templateID, form, userID)
      .then(() => {
        setSent(true);
        setForm({ name: '', email: '', service: '', date: '' });
      })
      .catch(error => {
        console.error('Email sending error:', error);
      });
  };

  return (
    <section className="bg-pink-50 py-16 px-6 text-center" id="contact">
      <h2 className="text-3xl font-bold text-rose-700 mb-6">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email"
          type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2" required />
        <select name="service" value={form.service} onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600" required>
          <option value="">Select Service</option>
          <option>Hair Styling</option>
          <option>Manicure</option>
          <option>Pedicure</option>
        </select>
        <input name="date" value={form.date} onChange={handleChange}
          type="date" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600" required />
        <button type="submit"
          className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-6 rounded-lg">
          Book Now
        </button>
        {sent && <p className="text-green-600 font-semibold mt-4">Appointment sent successfully!</p>}
      </form>
    </section>
  );
};

export default BookingForm;
