"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCode,
  FaBars,
  FaTimes,
  FaUpork
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";

const navLinks = ["Home", "About", "Skills", "Projects", "Testimonial", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("Home");
  const observerRef = useRef(null);

  // Set up intersection observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value to change when the section is considered active
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections
    navLinks.forEach((link) => {
      const section = document.getElementById(link.toLowerCase());
      if (section) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveSection(targetId);
    const targetElement = document.querySelector(`#${targetId}`);
    if (targetElement) {
      const headerOffset = 20;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const linkVariants = {
    initial: { y: 0 },
    hover: { y: -2 },
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 5 },
  };

  return (
    <header className="navbar-fixed pt-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative">
        {/* Modernized Glassmorphism Background */}
        <div className="absolute inset-0 mx-2 sm:mx-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 shadow-lg" />
          {/* Subtle animated border */}
          <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Updated Logo */}
        <motion.div
          className="relative z-10 flex items-baseline space-x-1 cursor-pointer select-none group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover="hover"
          onClick={(e) => handleSmoothScroll(e, "home")}
        >
          <motion.span
            className="text-3xl font-bold text-cyan-400 group-hover:text-white transition-colors duration-300"
            variants={linkVariants}
          >
            Abdur
          </motion.span>
          <motion.span
            className="text-3xl font-bold text-gray-300 group-hover:text-cyan-300 transition-colors duration-300 tracking-wider"
            variants={linkVariants}
            transition={{ delay: 0.05 }}
          >
            Razzak
          </motion.span>
        </motion.div>

        {/* Updated Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 relative z-10">
          {navLinks.map((link) => (
            <li key={link} className="relative group">
              <motion.a
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleSmoothScroll(e, link.toLowerCase())}
                className={`px-2 py-2 text-sm font-medium transition-colors duration-300 relative ${
                  activeSection === link.toLowerCase() 
                    ? "text-cyan-400" 
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover="hover"
                initial="initial"
                variants={linkVariants}
              >
                {link}
                <motion.span
                  className={`absolute bottom-0 left-0 w-full h-[1px]  rounded-[100px] ${
                    activeSection === link.toLowerCase() 
                      ? "bg-cyan-400 scale-x-50" 
                      : "bg-cyan-400 scale-x-0"
                  }`}
                  variants={{ hover: { scaleX: 1 } }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0.5 }}
                />
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Updated Social Links */}
        <div className="hidden md:flex items-center space-x-4 relative z-10">
          {[
            { href: "https://www.linkedin.com/in/abdur--razzak/", icon: FaLinkedin, label: "LinkedIn" },
            { href: "https://www.upwork.com/freelancers/~01cbcc4bb65e1d54ef", icon: SiUpwork, label: "Upwork" },
            { href: "https://wa.me/8801703906980", icon: AiOutlineWhatsApp, label: "WhatsApp" },
            { href: "https://wa.me/8801703906980", icon: FaFacebook, label: "Facebook" },
            { href: "https://github.com/fabrazzak", icon: FaGithub, label: "GitHub" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label={social.label}
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="text-xl" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative z-10 p-2 text-gray-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </motion.button>

        {/* Updated Mobile Menu */}
        <motion.div
          className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: menuOpen ? "auto" : "none" }}
        >
          <motion.div
            className="w-64 bg-gray-900/80 backdrop-blur-lg h-full p-6 shadow-xl border-l border-white/10"
            initial={{ x: "100%" }}
            animate={{ x: menuOpen ? 0 : "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes size={24} />
            </button>
            <ul className="mt-16 space-y-6">
              {navLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => handleSmoothScroll(e, link.toLowerCase())}
                    className={`block px-4 py-2 text-lg font-medium rounded-md transition-colors duration-300 ${
                      activeSection === link.toLowerCase()
                        ? "text-cyan-400 bg-white/5"
                        : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
              <li className="pt-6 border-t border-white/10">
                <div className="flex justify-center space-x-6">
                  {[
                    { href: "https://www.linkedin.com/in/abdur--razzak/", icon: FaLinkedin, label: "LinkedIn" },
                    { href: "https://www.upwork.com/freelancers/~01cbcc4bb65e1d54ef", icon: SiUpwork, label: "Upwork" },
                    { href: "https://wa.me/8801703906980", icon: AiOutlineWhatsApp, label: "WhatsApp" },
                    { href: "https://wa.me/8801703906980", icon: FaFacebook, label: "Facebook" },
                    { href: "https://github.com/fabrazzak", icon: FaGithub, label: "GitHub" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      aria-label={social.label}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="text-2xl" />
                    </motion.a>
                  ))}
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-5 right-5 h-[2px] z-20">
          <motion.div 
            className="h-full bg-cyan-400"
            style={{ width: `${scrollProgress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </nav>
    </header>
  );
}