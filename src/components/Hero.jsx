// src/components/Hero.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Counting Animation Hook ──────────────────────────────────────
const useCountUp = (targetNumber, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!startOnView) {
      animateNumber();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateNumber();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, duration, startOnView, hasAnimated]);

  const animateNumber = () => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(eased * targetNumber);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return { count, countRef };
};

// ─── Hero Component ──────────────────────────────────────────────
const Hero = () => {
  // Statistics data with counting configuration
  const stats = [
    {
      number: 3000,
      label: "Students",
      color: "#1B2E6E",
      suffix: "+",
    },
    {
      number: 250,
      label: "Faculty",
      color: "#CC1F1F",
      suffix: "+",
    },
    {
      number: 95,
      label: "Passing Rate",
      color: "#F5C518",
      suffix: "%",
    },
  ];

  // Use the counting hook for each stat
  const stat1 = useCountUp(stats[0].number, 2000);
  const stat2 = useCountUp(stats[1].number, 1800);
  const stat3 = useCountUp(stats[2].number, 2200);

  const countResults = [stat1, stat2, stat3];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#fafafa]"
    >
      {/* --- Premium Background Architecture --- */}
      {/* Blueprint/Grid pattern for a professional academic feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Soft Cinematic Light Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#1B2E6E]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F5C518]/5 rounded-full blur-[100px]"></div>

      {/* Sleek Decorative Architectural Lines */}
      <div className="absolute top-1/3 left-0 w-32 h-[2px] bg-gradient-to-r from-[#1A8A6E]/30 to-transparent"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-[2px] bg-gradient-to-l from-[#CC1F1F]/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left Content - Main Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1,
                },
              },
            }}
            className="space-y-6 lg:col-span-2 max-w-4xl mx-auto text-center"
          >
            {/* Main Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="text-[#1B2E6E]">Empowering Minds,</span>
              <br />
              <span className="text-[#CC1F1F]">Building Futures</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-gray-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              A premier educational institution in Akora Khattak, Nowshera,
              dedicated to shaping future leaders through quality education and
              character development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap gap-4 pt-2 justify-center"
            >
              <a href="https://forms.gle/FNsJPoMdTtEwTp2MA" target="blank">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#CC1F1F] text-white px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-[#CC1F1F]/20 hover:shadow-[#CC1F1F]/35 transition-all duration-300 group"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>

              <a href="#about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-[#1B2E6E] border-2 border-[#1B2E6E]/15 px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#1B2E6E] hover:text-white hover:border-[#1B2E6E] transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </a>
            </motion.div>

            {/* Stats with Counting Animation */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  ref={countResults[index].countRef}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
                >
                  <div
                    className="text-2xl md:text-3xl font-bold transition-colors duration-300 group-hover:scale-105 transform"
                    style={{ color: stat.color }}
                  >
                    {countResults[index].count}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm mt-1 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
