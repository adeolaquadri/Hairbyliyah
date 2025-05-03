import React from "react";

const Welcome = () => {
  return (
    <>
      <section className="bg-pink-100 min-h-screen flex items-center justify-center text-center px-4" id="home">
  <div>
    <h1 className="text-4xl md:text-6xl font-bold text-rose-700">Welcome to Liyah's Beauty</h1>
    <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
      Where elegance meets excellence. Treat yourself to the beauty and care you deserve.
    </p>
    <button
     className="mt-6 bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg">
      <a href="#contact">Book Appointment</a>
    </button>
  </div>
</section>

    </>
  );
};

export default Welcome;
