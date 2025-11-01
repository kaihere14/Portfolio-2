import React from 'react'
import { TiArrowDownThick } from "react-icons/ti";

const Landing = () => {
  return (
    <div id="home" className="w-full min-h-screen overflow-hidden bg-[#ffffff] border-b-3 px-5 sm:px-10">
      
      {/* Content Section */}
      <div className="content w-full flex flex-col lg:flex-row items-center lg:items-start lg:mx-20 lg:mt-30">
        
        {/* Left Side */}
        <div className="left w-full lg:w-1/2 mt-10 text-center lg:text-left">
          {["Hello.", "I'm Arman."].map((item, index) => (
            <h1 
              key={index} 
              className="text-4xl sm:text-6xl lg:text-8xl font-bold font-['balo'] leading-none"
            >
              {item.includes("Arman") ? <>I'm <span className="text-[#ffa600]">Arman.</span></> : item}
            </h1>
          ))}
          <p className="mt-5 text-lg sm:text-xl lg:text-2xl font-semibold font-['balo'] lg:w-[80%] mx-auto lg:mx-0">
            Hi, I’m Arman — a passionate web developer crafting clean, modern and responsive websites.
          </p>
          <a 
            href="https://drive.google.com/file/d/13VVVgGtNzpVSg7sWoYHYd9wTXkwvwhrm/view?usp=drive_link" 
            download
          >
            <button className="mt-8 flex items-center justify-center gap-2 px-5 py-3 border-3 bg-[#c4c4c4] font-['balo'] font-semibold cursor-pointer transition-all duration-200 ease-in hover:bg-[#ffa600] hover:scale-105 mx-auto lg:mx-0 rounded-lg">
              Download Resume
              <TiArrowDownThick />
            </button>
          </a>
        </div>

        {/* Right Side */}
        <div className="right w-full ml-10 lg:w-1/2 flex justify-center mt-10 mr-10 lg:mt-0">
          <img 
            src="https://cdn.prod.website-files.com/5e87e737ee7085b9ba02c101/5e87e737ee7085c39c02c107_mac.svg" 
            alt="Laptop" 
            className="w-[80%] sm:w-[60%] lg:w-[100%] lg:mr-10 max-w-[500px]"
          />
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="quick w-full mt-20 mb-5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-['balo'] font-semibold ml-0 lg:ml-[10vw] text-center lg:text-left">
          Quick Links
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mt-5 lg:ml-10">
          {[
            { href: "https://www.instagram.com/_mirenox/", label: "Instagram" },
            { href: "https://github.com/kaihere14", label: "Github" },
            { href: "https://www.linkedin.com/in/arman-thakur-303b47367/", label: "Linkedin" },
            { href: "https://x.com/ArmanKiyotaka", label: "Twitter" },
          ].map((link, idx) => (
            <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center gap-2 px-5 py-2 border-3 bg-[#c4c4c4] font-['balo'] font-semibold text-base sm:text-lg cursor-pointer transition-all duration-200 ease-in hover:bg-[#ffa600] hover:scale-105 rounded-lg w-[140px] sm:w-[160px]">
                {link.label}
                <TiArrowDownThick className="rotate-[220deg] flex-shrink-0" />
              </button>
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Landing
