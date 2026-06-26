// src/pages/Contact.jsx
const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#1B2E6E] mb-4">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#1B2E6E] mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#1B2E6E]">Address</h3>
                <p className="text-gray-600">Akora Khattak, Nowshera, KPK, Pakistan</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1B2E6E]">Phone</h3>
                <p className="text-gray-600">0345-8465810</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1B2E6E]">Email</h3>
                <p className="text-gray-600">info@smhsc.edu.pk</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#1B2E6E] mb-4">Send a Message</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#1B2E6E]"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#1B2E6E]"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#1B2E6E]"
              ></textarea>
              <button 
                type="submit"
                className="bg-[#CC1F1F] text-white px-6 py-2 rounded-md hover:bg-[#1B2E6E] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;