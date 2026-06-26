// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CampusTour from './pages/CampusTour';
import Gallery from './pages/Gallery';
import Academics from './pages/Academics';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';
import ProgramDetail from './pages/ProgramDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/campus-tour" element={<CampusTour />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/academics/:program" element={<ProgramDetail />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;