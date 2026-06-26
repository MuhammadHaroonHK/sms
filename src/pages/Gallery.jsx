// src/pages/Gallery.jsx
const Gallery = () => {
  const images = Array(8).fill(null);

  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#1B2E6E] mb-4">Photo Gallery</h1>
        <p className="text-gray-600 mb-8">
          Browse through our collection of memorable moments and campus life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((_, index) => (
            <div key={index} className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center text-gray-400 hover:scale-105 transition-transform cursor-pointer">
              📷 Photo {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;