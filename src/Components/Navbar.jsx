import React from 'react'
import { motion } from 'framer-motion'
import Lenis from "@studio-freight/lenis"

const lenis = new Lenis()

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    lenis.scrollTo(el) // Lenis handles the smooth scroll
  }
}

const Navbar = () => {
  return (
    <div className='w-full bg-[#c4c4c4] py-2 border-b-3 flex items-center gap-5 px-5'>
        <div className='w-7 h-5 flex items-center'><img className='rounded-md' src="https://i.pinimg.com/1200x/c4/f5/fa/c4f5fa60b185e0e5771de1f4c96d7372.jpg" alt="" /></div>
        <div className="flex items-center gap-10 text-lg font-bold leading-none tracking-tight">
            <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "tween", duration: 0.3, ease: "easeOut" }} className='animated-underline' href="#home">Home</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "tween", duration: 0.3, ease: "easeOut" }} className='animated-underline' href="#project">Project</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "tween", duration: 0.3, ease: "easeOut" }} className='animated-underline'  href="#skills">Skills</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "tween", duration: 0.3, ease: "easeOut" }} className='animated-underline' href="#contact">Contact me</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "tween", duration: 0.3, ease: "easeOut" }} className='animated-underline' href="https://drive.google.com/uc?export=download&id=1UKwxiq0MgVb_EbxwkdFsE_EakfOW6sQN" download>Resume</motion.a>
        </div>
    </div>
  )
}

export default Navbar