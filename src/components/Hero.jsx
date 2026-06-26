// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Trophy, Sparkles } from 'lucide-react';
import heroImage from '../assets/hero_school.PNG';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B2E6E] via-[#1B2E6E]/95 to-[#0D1B4B] z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#F5C518]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#CC1F1F]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1A8A6E]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1
                }
              }
            }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-flex items-center gap-2 bg-[#F5C518]/20 text-[#F5C518] px-4 py-2 rounded-full border border-[#F5C518]/30 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Established 1985</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="text-white">The Student Model</span>
              <br />
              <span className="text-[#F5C518]">High School & College</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-white/90 text-base md:text-lg lg:text-xl max-w-lg leading-relaxed"
            >
              A premier educational institution in Akora Khattak, Nowshera, 
              dedicated to shaping future leaders through quality education 
              and character development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/admissions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#CC1F1F] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-[#CC1F1F]/30 transition-shadow group"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <a href="#about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white/30 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </motion.button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3
                  }
                }
              }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
            >
              {[
                { number: '500+', label: 'Students', color: '#1B2E6E' },
                { number: '30+', label: 'Faculty', color: '#CC1F1F' },
                { number: '95%', label: 'Passing Rate', color: '#F5C518' },
                { number: '15+', label: 'Programs', color: '#1A8A6E' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="text-center"
                >
                  <div 
                    className="text-2xl md:text-3xl font-bold text-white"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-xs md:text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F5C518] via-[#CC1F1F] to-[#1A8A6E] rounded-2xl blur-xl opacity-20"></div>
              
              {/* Image Container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 shadow-2xl">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#1B2E6E] to-[#0D1B4B]">
                  {/* Replace with your actual image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#F5C518]/20 flex items-center justify-center mb-4 ring-4 ring-[#F5C518]/30">
                      <GraduationCap className="w-16 h-16 md:w-20 md:h-20 text-[#F5C518]" />
                    </div>
                    <h3 className="text-white text-xl md:text-2xl font-bold">SMS Akora Khattak</h3>
                    <p className="text-white/70 text-sm md:text-base mt-2">Excellence in Education Since 1985</p>
                    <div className="flex items-center gap-2 mt-4 text-[#F5C518]">
                      <span className="w-12 h-0.5 bg-[#F5C518]"></span>
                      <span className="text-xs font-medium">Nowshera, KPK</span>
                      <span className="w-12 h-0.5 bg-[#F5C518]"></span>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4 bg-[#F5C518] text-[#1B2E6E] px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  >
                    ★ Top Rated
                  </motion.div>
                  
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-[#1B2E6E] px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1"
                  >
                    <Trophy className="w-3 h-3 text-[#F5C518]" />
                    95% Success Rate
                  </motion.div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white shadow-xl rounded-lg px-4 py-2 hidden md:flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#1A8A6E] animate-pulse"></div>
                <span className="text-sm font-medium text-[#1B2E6E]">Open Admissions</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white shadow-xl rounded-lg px-4 py-2 hidden md:flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#CC1F1F]" />
                <span className="text-sm font-medium text-[#1B2E6E]">2026 Session</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;