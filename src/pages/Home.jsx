// src/pages/Home.jsx
const Home = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#1B2E6E] mb-4">
          Welcome to The Student Model
        </h1>
        <h2 className="text-2xl text-[#1A8A6E] mb-6">High School & College — Akora Khattak</h2>
        <p className="text-gray-600 max-w-3xl">
          A premier educational institution committed to excellence in education, character building, 
          and holistic development of students since establishment.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#CC1F1F]">
            <h3 className="font-bold text-[#1B2E6E]">Quality Education</h3>
            <p className="text-gray-600 text-sm">Committed to academic excellence and holistic development.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#F5C518]">
            <h3 className="font-bold text-[#1B2E6E]">Experienced Faculty</h3>
            <p className="text-gray-600 text-sm">Dedicated teachers with years of experience in education.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#1A8A6E]">
            <h3 className="font-bold text-[#1B2E6E]">Modern Facilities</h3>
            <p className="text-gray-600 text-sm">State-of-the-art labs, library, and sports facilities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;