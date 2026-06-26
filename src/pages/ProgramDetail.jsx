// src/pages/ProgramDetail.jsx
import { useParams } from 'react-router-dom';

const ProgramDetail = () => {
  const { program } = useParams();
  
  const programData = {
    'matric-science': { name: 'Matric (Science)', description: 'Comprehensive science education for secondary level students.' },
    'matric-arts': { name: 'Matric (Arts)', description: 'Arts and humanities education for secondary level students.' },
    'inter-pre-medical': { name: 'Intermediate (Pre-Medical)', description: 'Pre-medical education for future doctors and healthcare professionals.' },
    'inter-pre-engineering': { name: 'Intermediate (Pre-Engineering)', description: 'Pre-engineering education for future engineers and technologists.' },
    'inter-ics': { name: 'Intermediate (ICS)', description: 'Computer Science education for IT professionals and developers.' },
    'inter-icom': { name: 'Intermediate (I.Com)', description: 'Commerce education for business and finance professionals.' },
  };

  const data = programData[program] || { name: 'Program Not Found', description: 'The requested program could not be found.' };

  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#1B2E6E] mb-4">{data.name}</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600">{data.description}</p>
          <div className="mt-6 p-4 bg-[#F5C518]/10 border-l-4 border-[#F5C518] rounded">
            <p className="text-sm text-gray-600">
              For more information about this program, please contact our admissions office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;