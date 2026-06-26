// src/components/Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-[#F8F9FF] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1B2E6E] text-center mb-8">Contact Us</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-[#1B2E6E] mb-4">Get in Touch</h3>
              <p className="text-gray-600">📍 Akora Khattak, Nowshera, KPK</p>
              <p className="text-gray-600">📞 0345-8465810</p>
              <p className="text-gray-600">✉ info@smhsc.edu.pk</p>
            </div>
            <div>
              <h3 className="font-bold text-[#1B2E6E] mb-4">Send a Message</h3>
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded mb-2" />
              <input type="email" placeholder="Your Email" className="w-full p-2 border rounded mb-2" />
              <textarea placeholder="Your Message" className="w-full p-2 border rounded mb-2" rows="3"></textarea>
              <button className="bg-[#CC1F1F] text-white px-6 py-2 rounded">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;