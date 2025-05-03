import React from "react";

const Service = ()=>{
   return(
      <section id="services" className="py-20 bg-pink-50 px-6">
  <h2 className="text-3xl font-bold text-center text-rose-700 mb-10">Our Services</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {['Hair Styling', 'Nail Care', 'Facials'].map((service) => (
      <div key={service} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-rose-600 mb-2">{service}</h3>
        <p className="text-gray-600 text-sm">
          Experience our expert {service.toLowerCase()} services with premium products and care.
        </p>
      </div>
    ))}
  </div>
</section>

   );
};

export default Service;