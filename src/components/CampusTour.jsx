// src/components/CampusTour.jsx
const CampusTour = () => {
  return (
    <section id="campus-tour" className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1B2E6E] text-center mb-8">Campus Tour</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Classrooms', 'Labs', 'Library'].map((item, index) => (
            <div key={index} className="bg-[#F8F9FF] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1B2E6E]">{item}</h3>
              <p className="text-gray-600 mt-2">Modern facilities for students.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusTour;