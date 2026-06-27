// src/components/Gallery.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { 
  X, 
  ZoomIn, 
  Calendar, 
  Users, 
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Award
} from 'lucide-react';

// ─── Gallery Images Data ──────────────────────────────────────────
const galleryImages = [
  {
    id: 1,
    title: 'Annual Sports Day',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop',
    description: 'Students participating in various sports activities'
  },
  {
    id: 2,
    title: 'Science Exhibition',
    category: 'Academics',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&auto=format&fit=crop',
    description: 'Innovative science projects by our talented students'
  },
  {
    id: 3,
    title: 'Graduation Ceremony',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop',
    description: 'Celebrating academic achievements of our graduates'
  },
  {
    id: 4,
    title: 'Library Session',
    category: 'Academics',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop',
    description: 'Students engaged in reading and research'
  },
  {
    id: 5,
    title: 'Cultural Day',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop',
    description: 'Celebrating diversity through cultural performances'
  },
  {
    id: 6,
    title: 'Computer Lab',
    category: 'Facilities',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop',
    description: 'Modern computer lab with latest technology'
  },
  {
    id: 7,
    title: 'Sports Ground',
    category: 'Facilities',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop',
    description: 'Well-maintained sports facilities for students'
  },
  {
    id: 8,
    title: 'Art Exhibition',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop',
    description: 'Creative artwork by our talented students'
  },
  {
    id: 9,
    title: 'Classroom Learning',
    category: 'Academics',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop',
    description: 'Interactive learning environment in classrooms'
  },
];

// ─── Category Filter Data ─────────────────────────────────────────
const categories = ['All', 'Events', 'Academics', 'Facilities'];

// ─── Gallery Component ────────────────────────────────────────────
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const scrollContainerRef = useRef(null);

  // Filter images based on category
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Scroll functions for category navigation
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#1B2E6E]/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#F5C518]/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* ─── Section Header ────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="text-center mb-12"
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-[#CC1F1F] font-semibold text-sm uppercase tracking-wider"
          >
            Memories
          </motion.span>
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2E6E] mt-2"
          >
            Photo Gallery
          </motion.h2>
          <motion.div 
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1 }
            }}
            className="w-24 h-1 bg-gradient-to-r from-[#F5C518] via-[#CC1F1F] to-[#1A8A6E] mx-auto rounded-full mt-4"
          ></motion.div>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg leading-relaxed"
          >
            Explore memorable moments captured at The Student Model High School & College
          </motion.p>
        </motion.div>

        {/* ─── Category Filter ────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="relative mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={scrollLeft}
              className="hidden md:flex p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#1B2E6E] hover:text-white group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:text-white" />
            </button>
            
            <div 
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto px-1 py-2 scrollbar-hide scroll-smooth flex-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-[#1B2E6E] text-white shadow-lg shadow-[#1B2E6E]/20'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-[#1B2E6E] hover:text-[#1B2E6E]'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="hidden md:flex p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#1B2E6E] hover:text-white group"
            >
              <ChevronRight className="w-5 h-5 group-hover:text-white" />
            </button>
          </div>
        </motion.div>

        {/* ─── Gallery Grid ──────────────────────────────────────── */}
        {filteredImages.length > 0 ? (
          <motion.div
            key={selectedCategory}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1B2E6E] text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
                    {image.category}
                  </div>
                  
                  {/* Image Info - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white font-bold text-sm md:text-base">{image.title}</h4>
                    <p className="text-white/80 text-xs mt-1">{image.description}</p>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600">No images found</h3>
            <p className="text-gray-400 mt-2">Try selecting a different category</p>
          </motion.div>
        )}

        {/* ─── Lightbox Modal ────────────────────────────────────── */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
              style={{ 
                paddingTop: 'calc(env(safe-area-inset-top, 0px) + 80px)',
                paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 20px)'
              }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] md:max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button - Top Right */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 md:top-4 md:right-4 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-2 md:p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                {/* Image Container */}
                <div className="relative bg-[#1B2E6E] flex items-center justify-center" style={{ minHeight: '300px', maxHeight: '70vh' }}>
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full max-h-[70vh] object-contain"
                  />
                </div>

                {/* Image Info */}
                <div className="p-4 md:p-6 bg-white">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                    <span className="text-xs font-bold text-[#CC1F1F] bg-[#CC1F1F]/10 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full">
                      {selectedImage.category}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-400">#{String(selectedImage.id).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-[#1B2E6E]">{selectedImage.title}</h3>
                  <p className="text-gray-500 text-sm md:text-base mt-1 md:mt-2">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;