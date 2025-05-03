import React from "react";

const Testimonial = ()=>{
   return(
      <section className="py-20 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold text-rose-700 mb-8">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-pink-100 p-6 rounded-xl shadow-md max-w-sm mx-auto">
            <p className="text-gray-700 italic">"Absolutely amazing service! I left feeling refreshed and beautiful."</p>
            <p className="mt-4 font-semibold text-rose-600">– Ada</p>
          </div>
          <div className="bg-pink-100 p-6 rounded-xl shadow-md max-w-sm mx-auto">
            <p className="text-gray-700 italic">"The ambiance and attention to detail are just perfect."</p>
            <p className="mt-4 font-semibold text-rose-600">– Grace</p>
          </div>
        </div>
      </section>
   );
};

export default Testimonial;