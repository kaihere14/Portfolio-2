import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { FiMenu, FiX } from "react-icons/fi";

const lenis = new Lenis();

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // start Lenis RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      lenis.scrollTo(el);
      setIsOpen(false); // close menu after clicking
    }
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "project", label: "Project" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact me" },
  ];

  return (
    <div className="w-full bg-[#c4c4c4] py-1 border-b-3 px-5 flex items-center justify-between lg:justify-start">
      {/* Logo */}
      <div className="w-10 h-10 flex items-center mr-7">
        <img
          className="rounded-md w-full h-full object-cover"
          src="https://i.pinimg.com/1200x/c4/f5/fa/c4f5fa60b185e0e5771de1f4c96d7372.jpg"
          alt="logo"
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10 text-lg font-bold leading-none tracking-tight">
        {links.map((link) => (
          <motion.button
            key={link.id}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="animated-underline"
            onClick={() => scrollToSection(link.id)}
          >
            {link.label}
          </motion.button>
        ))}
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
          className="animated-underline"
          href="https://drive.google.com/file/d/1OI17Q3zkRM6mGJeplXKC1OUpGvxljb03/view?usp=sharing"
          download
        >
          Resume
        </motion.a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: -9, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[60px] left-0 w-full bg-[#c4c4c4] flex flex-col items-center gap-6 py-6 border-b-3 z-50"
          >
            {links.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="text-lg font-bold"
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </motion.button>
            ))}
            <a
              className="text-lg font-bold"
              href="https://drive.google.com/file/d/1OI17Q3zkRM6mGJeplXKC1OUpGvxljb03/view?usp=sharing"
              download
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
