// src/pages/CampusTour.jsx
const CampusTour = () => {
  const facilities = [
    'Modern Classrooms', 
    'Science Laboratories', 
    'Computer Labs', 
    'Library', 
    'Sports Ground', 
    'Playground'
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#1B2E6E] mb-4">Campus Tour</h1>
        <p className="text-gray-600 mb-8">
          Explore our modern campus facilities designed for an enriching learning experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                📸 Campus Image
              </div>
              <h3 className="font-bold text-[#1B2E6E]">{facility}</h3>
              <p className="text-gray-600 text-sm">Modern facility for student development.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusTour;