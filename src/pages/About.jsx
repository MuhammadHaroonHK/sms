// src/pages/About.jsx
const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#1B2E6E] mb-4">About Us</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            The Student Model High School & College, Akora Khattak is a leading educational institution 
            dedicated to providing quality education to students in Khyber Pakhtunkhwa, Pakistan.
          </p>
          <h2 className="text-2xl font-bold text-[#1B2E6E] mt-6 mb-3">Our Mission</h2>
          <p className="text-gray-600">
            To nurture young minds with knowledge, skills, and values that enable them to become 
            responsible citizens and future leaders of Pakistan.
          </p>
          <h2 className="text-2xl font-bold text-[#1B2E6E] mt-6 mb-3">Our Vision</h2>
          <p className="text-gray-600">
            To be a center of excellence in education, producing graduates who are academically 
            proficient, morally upright, and socially responsible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;