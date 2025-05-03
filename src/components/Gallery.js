import React from 'react';

const images = [
  '/images/16464519-5C6D-41F5-9157-3BC41366E5EF.jpeg',
  '/images/24CA3816-6DFC-401A-A141-74D070157B67.jpeg',
  '/images/style3.jpg',
  '/images/style4.jpg',
  '/images/style5.jpg',
  '/images/style6.jpg',
];

const Gallery = () => {
  return (
    <section className="py-20 px-6 bg-white" id="gallery">
      <h2 className="text-3xl font-bold text-center text-rose-700 mb-10">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-md">
            <img src={src} alt={`Style ${idx + 1}`} className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
