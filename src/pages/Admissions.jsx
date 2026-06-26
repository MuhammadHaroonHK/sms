// src/pages/Admissions.jsx
const Admissions = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#1B2E6E] mb-4">Admissions</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#1B2E6E] mb-4">Join Our Institution</h2>
          <p className="text-gray-600 mb-6">
            Admissions are open for the academic year 2026-2027. We welcome students who are 
            committed to academic excellence and personal growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h3 className="font-bold text-[#1B2E6E] mb-2">Eligibility Criteria</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Minimum 60% marks in previous class</li>
                <li>• Age between 14-18 years</li>
                <li>• Character certificate from previous institution</li>
              </ul>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-bold text-[#1B2E6E] mb-2">Required Documents</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• B-Form / CNIC copy</li>
                <li>• Previous academic records</li>
                <li>• Passport size photographs</li>
              </ul>
            </div>
          </div>
          <button className="mt-6 bg-[#CC1F1F] text-white px-6 py-3 rounded-md hover:bg-[#1B2E6E] transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;