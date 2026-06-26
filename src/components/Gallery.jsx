// src/components/Gallery.jsx
const Gallery = () => {
  return (
    <section id="gallery" className="min-h-screen bg-[#F8F9FF] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1B2E6E] text-center mb-8">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array(6).fill(null).map((_, index) => (
            <div key={index} className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
              📷 Photo {index + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;