import React, {useState} from 'react';

const mediaItems = [
  { type: 'image', src: '/images/16464519-5C6D-41F5-9157-3BC41366E5EF.jpeg', alt: 'Hair Styling' },
  { type: 'image', src: '/images/24CA3816-6DFC-401A-A141-74D070157B67.jpeg', alt: 'Hair Styling' },
  { type: 'image', src: '/images/47C9B0AE-6762-4AA8-9818-6A1450041871.jpeg', alt: 'Hair Stylng' },
  { type: 'image', src: '/images/5E68D04B-B24F-4F24-B911-CB169AEE3AAD.jpeg', alt: 'Hair Stylng'},
  { type: 'image', src: '/images/A58C716B-EB72-4F33-8439-9C6D99BD698D.jpeg', alt: 'Hair Stylng'},
  { type: 'image', src: '/images/B3D9C015-786E-4C6C-BD88-C94B10F7F9A4.jpeg', alt: 'Hair Stylng'},
  { type: 'video', src: '/images/IMG.6093.MOV'},
  { type: 'video', src: '/images/IMG.6094.MOV'},
  { type: 'video', src: '/images/IMG.6095.MOV'},
];

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section className="bg-pink-50 py-12 px-6" id="gallery">
      <h2 className="text-3xl font-bold text-center text-rose-700 mb-8">Gallery</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mediaItems.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md cursor-pointer">
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt || ''}
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                onClick={() => setSelectedMedia(item)}
              />
            ) : (
              <video
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                preload="metadata"
                onClick={() => setSelectedMedia(item)}
              >
                <source src={item.src} type="video/mov" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-xl max-w-screen-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
          >
            <button
              className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-red-600"
              onClick={() => setSelectedMedia(null)}
            >
              &times;
            </button>
            {selectedMedia.type === 'image' ? (
              <img src={selectedMedia.src} alt={selectedMedia.alt || ''} className="w-full rounded-lg" />
            ) : (
              <video
                controls
                className="w-full rounded-lg"
              >
                <source src={selectedMedia.src} type="video/mov" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
