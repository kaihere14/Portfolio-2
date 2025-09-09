import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Projects from './Components/Projects'
import Lenis from '@studio-freight/lenis'
import Skills from './Components/Skills'
import Aboutme from './Components/Aboutme'
import Footer from './Components/footer'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 👉 make all # links smooth with Lenis
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const id = anchor.getAttribute("href").substring(1);
        const el = document.getElementById(id);
        if (el) lenis.scrollTo(el);
      });
    });
  }, []);


  return (
    <div className=''>
     <Navbar id="home"/>
     <Landing/> 
     <Projects/>
     <Skills/>
     <Aboutme/>
     <Footer/>
    </div>

  )
}

export default App