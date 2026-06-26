// src/pages/Academics.jsx
const Academics = () => {
  const programs = [
    { name: 'Matric (Science)', level: 'Secondary' },
    { name: 'Matric (Arts)', level: 'Secondary' },
    { name: 'Intermediate (Pre-Medical)', level: 'Higher Secondary' },
    { name: 'Intermediate (Pre-Engineering)', level: 'Higher Secondary' },
    { name: 'Intermediate (ICS)', level: 'Higher Secondary' },
    { name: 'Intermediate (I.Com)', level: 'Higher Secondary' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#1B2E6E] mb-4">Academic Programs</h1>
        <p className="text-gray-600 mb-8">
          We offer a wide range of academic programs affiliated with BISE KPK.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#1A8A6E]">
              <h3 className="font-bold text-[#1B2E6E]">{program.name}</h3>
              <p className="text-gray-500 text-sm">{program.level}</p>
              <button className="mt-3 text-[#CC1F1F] font-medium hover:text-[#1B2E6E] transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;