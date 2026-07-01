// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Menu, X, MapPin, Phone, Mail, ChevronDown } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home", sectionId: "home" },
  { id: "about", label: "About", sectionId: "about" },
  { id: "campus-tour", label: "Campus Tour", sectionId: "campus-tour" },
  { id: "gallery", label: "Photo Gallery", sectionId: "gallery" },
  { id: "academics", label: "Academic Programs", sectionId: "academics" },
  { id: "contact", label: "Contact", sectionId: "contact" },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    setIsDrawerOpen(false);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setActiveSection(sectionId);
    }, 150);
  };

  const { scrollY } = useScroll();
  const navPaddingY = useTransform(scrollY, [0, 100], ["16px", "8px"]);
  // Starts completely transparent (0) on load, changes to rich solid opacity on scroll
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "campus-tour", "gallery", "academics", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    // Changed to absolute/fixed to let Hero sit natively underneath on load
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* ── Top Info Bar ── */}
      <div className="hidden md:block bg-[#0D1B4B]/90 backdrop-blur-sm py-1.5 border-b border-[#F5C518]/20">
        <div className="container mx-auto px-4 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#F5C518]" />
            <span>Akora Khattak, Nowshera, KPK</span>
          </div>
          <div className="hidden lg:inline-block items-center gap-1 italic text-[#F5C518] font-medium">
            “Great Institutions Are Not Born Over Night — We Can Only Try”
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              0345-8465810
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              info@smhsc.edu.pk
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <motion.div
        style={{
          paddingTop: navPaddingY,
          paddingBottom: navPaddingY,
          backgroundColor: `rgba(27, 46, 110, ${isScrolled ? 0.95 : 0})`,
        }}
        className={`
          transition-all duration-300 text-white
          ${isScrolled ? "shadow-lg backdrop-blur-md border-b border-white/10" : "border-b border-transparent"}
        `}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src='/sms_banner.webp'
              alt="SMS Logo"
              className="w-32 lg:w-44 sm:w-20 max-h-9 object-fit"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.sectionId}`}
                onClick={(e) => handleSmoothScroll(e, link.sectionId)}
                className={`
                  relative font-medium text-[15px] tracking-wide transition-colors duration-200 cursor-pointer
                  hover:text-[#F5C518]
                  ${activeSection === link.sectionId ? "text-[#F5C518]" : "text-white"}
                `}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#CC1F1F] w-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeSection === link.sectionId ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                />
              </a>
            ))}

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <a
                href="https://forms.gle/KXg7MzBveJvhj83e7"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-block bg-[#CC1F1F] text-white border border-[#F5C518] rounded-md px-4 py-2 font-semibold text-sm shadow-md transition-all"
              >
                Apply Now
              </a>
            </motion.div>
          </nav>

          {/* Mobile: Hamburger */}
          <button onClick={toggleDrawer} className="md:hidden p-1 text-white">
            {isDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isDrawerOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-[#1B2E6E] border-t border-white/10"
            >
              <div className="container mx-auto px-4 py-4">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.sectionId}`}
                        onClick={(e) => handleSmoothScroll(e, link.sectionId)}
                        className={`
                          block py-3 px-2 text-white text-base font-medium rounded-md
                          ${activeSection === link.sectionId ? "bg-[#CC1F1F]/20 text-[#F5C518]" : ""}
                        `}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;