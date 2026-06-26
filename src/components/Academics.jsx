// src/components/Academics.jsx
const Academics = () => {
  const programs = [
    'Matric (Science)', 'Matric (Arts)', 
    'Intermediate (Pre-Medical)', 'Intermediate (Pre-Engineering)',
    'Intermediate (ICS)', 'Intermediate (I.Com)'
  ];

  return (
    <section id="academics" className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1B2E6E] text-center mb-8">Academic Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <div key={index} className="bg-[#F8F9FF] p-6 rounded-lg shadow-md border-l-4 border-[#1A8A6E]">
              <h3 className="font-bold text-[#1B2E6E]">{program}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;