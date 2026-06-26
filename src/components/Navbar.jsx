// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from 'lucide-react';
import logo from '../assets/sms_logo.png'

// ─── Data ──────────────────────────────────────────────────────────────
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/campus-tour', label: 'Campus Tour' },
  { path: '/gallery', label: 'Photo Gallery' },
  { path: '/academics', label: 'Academic Programs', hasDropdown: true },
  { path: '/contact', label: 'Contact' },
];

const academicPrograms = [
  { label: 'Matric (Science)', path: '/academics/matric-science' },
  { label: 'Matric (Arts)', path: '/academics/matric-arts' },
  { label: 'Intermediate (Pre-Medical)', path: '/academics/inter-pre-medical' },
  { label: 'Intermediate (Pre-Engineering)', path: '/academics/inter-pre-engineering' },
  { label: 'Intermediate (ICS)', path: '/academics/inter-ics' },
  { label: 'Intermediate (I.Com)', path: '/academics/inter-icom' },
];

// ─── Component ──────────────────────────────────────────────────────
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false); // mobile accordion
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState(false);
  const dropdownTimeout = useRef(null);
  const location = useLocation();

  // Scroll effects
  const { scrollY } = useScroll();
  const navPaddingY = useTransform(scrollY, [0, 100], ['16px', '8px']);
  const bgOpacity = useTransform(scrollY, [0, 100], [1, 0.92]);
  const logoWidth = useTransform(scrollY, [0, 100], ['3.5rem', '2.5rem']);

  // Detect scroll for backdrop blur
  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 20);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Close drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false);
    setIsAcademicsOpen(false);
  }, [location.pathname]);

  // Handle dropdown hover with delay
  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setHoverDropdown(true);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setHoverDropdown(false);
    }, 150);
  };

  // Toggle mobile drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (isDrawerOpen) setIsAcademicsOpen(false);
  };

  // Close dropdowns on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDrawerOpen(false);
        setIsAcademicsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ─── Render ──────────────────────────────────────────────────────

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ── Top Info Bar ── */}
      <div className="hidden md:block bg-[#0D1B4B] py-1.5 border-b border-[#F5C518]/40">
        <div className="container mx-auto px-4 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#F5C518]" />
            <span>Akora Khattak, Nowshera, KPK</span>
          </div>
          <div className="flex items-center gap-1 italic text-[#F5C518] font-medium">
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
          backgroundColor: `rgba(27, 46, 110, ${bgOpacity})`,
        }}
        className={`
          transition-shadow duration-300
          ${isScrolled ? 'shadow-lg backdrop-blur-md' : 'shadow-none'}
        `}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src={logo}
              alt="SMS Logo"
              style={{ width: logoWidth }}
              className="rounded-full ring-2 ring-[#F5C518] shadow-md object-cover aspect-square"
            />
          </Link>

          {/* RIGHT: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`
                        flex items-center gap-1 font-medium text-[15px] tracking-wide
                        hover:text-[#F5C518] transition-colors duration-200
                      `}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          hoverDropdown ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {hoverDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-1 w-64 bg-[#1B2E6E] border-t-2 border-[#F5C518] rounded-b-lg shadow-xl overflow-hidden"
                        >
                          <ul className="py-2">
                            {academicPrograms.map((prog) => (
                              <li key={prog.path}>
                                <NavLink
                                  to={prog.path}
                                  className={({ isActive }) =>
                                    `block px-4 py-2.5 text-white hover:bg-[#CC1F1F] transition-colors duration-150 flex items-center gap-2 ${
                                      isActive ? 'bg-[#CC1F1F]' : ''
                                    }`
                                  }
                                >
                                  <span className="text-[#F5C518]">▸</span>
                                  {prog.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-medium text-[15px] tracking-wide transition-colors duration-200 ${
                      isActive ? 'text-[#F5C518]' : 'hover:text-[#F5C518]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-[2px] bg-[#CC1F1F] w-full origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/admissions"
                className="bg-[#CC1F1F] text-white border border-[#F5C518] rounded-md px-4 py-2 font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
              >
                Apply Now
              </Link>
            </motion.div>
          </nav>

          {/* Mobile: Hamburger */}
          <button
            onClick={toggleDrawer}
            className="md:hidden p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isDrawerOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* ── Mobile Drawer ── */}
        <AnimatePresence>
          {isDrawerOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-[#1B2E6E] border-l-4 border-[#F5C518] shadow-inner"
            >
              <div className="container mx-auto px-4 py-2">
                <ul className="flex flex-col">
                  {navLinks.map((link) => {
                    if (link.hasDropdown) {
                      return (
                        <li key={link.path} className="border-b border-white/10 last:border-0">
                          <button
                            onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                            className="w-full flex items-center justify-between py-3 px-2 text-white text-base font-medium"
                          >
                            <span>Academic Programs</span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isAcademicsOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isAcademicsOpen && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-4 bg-[#1B2E6E]/50"
                              >
                                {academicPrograms.map((prog) => (
                                  <li key={prog.path}>
                                    <NavLink
                                      to={prog.path}
                                      className={({ isActive }) =>
                                        `block py-2.5 px-3 text-white text-sm hover:bg-[#CC1F1F]/20 hover:text-[#F5C518] transition-colors ${
                                          isActive
                                            ? 'bg-[#CC1F1F]/20 text-[#F5C518] border-l-4 border-[#CC1F1F]'
                                            : ''
                                        }`
                                      }
                                    >
                                      {prog.label}
                                    </NavLink>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </li>
                      );
                    }

                    return (
                      <li key={link.path} className="border-b border-white/10 last:border-0">
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `block py-3 px-2 text-white text-base font-medium hover:bg-[#CC1F1F]/20 hover:text-[#F5C518] transition-colors ${
                              isActive
                                ? 'bg-[#CC1F1F]/20 text-[#F5C518] border-l-4 border-[#CC1F1F]'
                                : ''
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>

                {/* Mobile CTA */}
                <div className="mt-4 pb-4">
                  <Link
                    to="/admissions"
                    className="block w-full bg-[#CC1F1F] text-white text-center font-semibold py-3 rounded-md border border-[#F5C518]"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;