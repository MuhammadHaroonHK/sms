// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import CampusTour from './components/CampusTour';
import Gallery from './components/Gallery';
import Academics from './components/Academics';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <CampusTour />
            <Gallery />
            <Academics />
            <Contact />
          </>
        } />
        <Route path="/admissions" element={<div className="min-h-screen bg-[#F8F9FF] py-20"><div className="container mx-auto px-4"><h1 className="text-4xl font-bold text-[#1B2E6E]">Admissions Page</h1></div></div>} />
        <Route path="/academics/:program" element={<div className="min-h-screen bg-[#F8F9FF] py-20"><div className="container mx-auto px-4"><h1 className="text-4xl font-bold text-[#1B2E6E]">Program Detail</h1></div></div>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;