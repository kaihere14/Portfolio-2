import React, { useRef } from "react";
import Cards from "./Cards";
import { motion, useTransform, useScroll } from "framer-motion";

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="project"
      ref={targetRef}
      className="relative h-[300vh] bg-[#DDDDDD] border-b-3"
    >
      <div className="sticky top-0 h-screen flex overflow-hidden">
        {/* Title */}
        <div className="flex items-center">
          <h1 className='font-["balo"] text-6xl lg:text-[10rem] font-semibold leading-none tracking-tight'>
            Projects
          </h1>
        </div>

        {/* Cards animation */}
        <motion.div
          style={{ x }}
          className="flex justify-center items-center gap-20 ml-10 lg:ml-45"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {Cards().map((card, index) =>
            React.cloneElement(card, { key: index, variants: item })
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
