// src/components/About.jsx
const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#F8F9FF] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1B2E6E] text-center mb-8">About Us</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 text-lg leading-relaxed">
            The Student Model High School & College, Akora Khattak is a leading educational institution 
            dedicated to providing quality education to students in Khyber Pakhtunkhwa, Pakistan.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    </section>
  );
};

export default About;