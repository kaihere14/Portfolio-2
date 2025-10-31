import React from "react";
import { motion } from "framer-motion";

const Frontskill = () => {
  return [
    <motion.div
      key="skill-1"
      className="w-[350px] bg-white border-3 flex flex-col shadow-lg shadow-gray-800"
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      transition={{ type: "tween", duration: 0.2 }}
    >
      <div className="first flex border-b-3 items-center p-1 bg-[#c4c4c4]">
        <div className="flex gap-2 px-2">
          <div className="w-3 h-3 border-2 rounded-full bg-white"></div>
          <div className="w-3 h-3 border-2 rounded-full bg-white"></div>
        </div>
        <h1 className='font-["balo"] font-semibold w-full text-center text-base'>
          React Development
        </h1>
      </div>
      <div className="second w-full overflow-hidden">
        <motion.img
          className="w-full h-24 object-cover object-center"
          src="https://media.licdn.com/dms/image/v2/D5612AQE7A9az3VXM0Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1667398918313?e=2147483647&v=beta&t=RvGP-Vj7TrCLdTCiixZ7LgxvyLAeYXjb_GWdsqm13I0"
          alt="React"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "tween", duration: 0.2 }}
        />
      </div>
      <div className="third w-full">
        <div className="left p-4 space-y-2">
          <h1 className='text-2xl font-bold font-["balo"]'>React</h1>
          <p className='text-md font-semibold font-["balo"] line-clamp-3'>
            Proficient in building interactive and dynamic user interfaces using
            React.js, including component-based architecture, state management
            with hooks, and efficient data flow.
          </p>
          <div className="text-right text-sm font-semibold mb-1">90%</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-black h-4 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>,
    <motion.div
      key="skill-2"
      className="w-[350px] bg-white border-3 flex flex-col shadow-lg shadow-gray-800"
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      transition={{ type: "tween", duration: 0.2 }}
    >
      <div className="first flex border-b-3 items-center p-1 bg-[#c4c4c4]">
        <div className="flex gap-2 px-2">
          <div className="w-3 h-3 border-2 rounded-full bg-white"></div>
          <div className="w-3 h-3 border-2 rounded-full bg-white"></div>
        </div>
        <h1 className='font-["balo"] font-semibold w-full text-center text-base'>
          CSS & TailwindCSS
        </h1>
      </div>
      <div className="second w-full overflow-hidden">
        <motion.img
          className="w-full h-24 object-cover"
          src="https://i.pinimg.com/736x/13/0e/cc/130eccc8570dec26081cc54ec3e6ba3a.jpg"
          alt="CSS & TailwindCSS"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "tween", duration: 0.2 }}
        />
      </div>
      <div className="third w-full">
        <div className="left p-4 space-y-2">
          <h1 className='text-2xl font-bold font-["balo"]'>
            CSS & TailwindCSS
          </h1>
          <p className='text-md font-semibold font-["balo"] line-clamp-3'>
            Experienced in modern CSS practices and highly skilled in
            TailwindCSS for rapid and responsive UI development. Capable of
            creating custom designs and ensuring cross-browser compatibility.
          </p>
          <div className="text-right text-sm font-semibold mb-1">85%</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-black h-4 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>,
    <motion.div
      key="skill-3"
      className="w-[350px] bg-white border-3 flex flex-col shadow-lg shadow-gray-800"
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      transition={{ type: "tween", duration: 0.2 }}
    >
      <div className="first flex border-b-3 items-center p-1 bg-[#c4c4c4]">
        <div className="flex gap-2 px-2">
          <div className="w-3 h-3 border-2 rounded-full bg-white"></div>
          <div className="w-3 h-3 border-2 rounded-full bg-white"></div>
        </div>
        <h1 className='font-["balo"] font-semibold w-full text-center text-base'>
          JavaScript Development
        </h1>
      </div>
      <div className="second w-full overflow-hidden">
        <motion.img
          className="w-full h-24 object-cover"
          src="https://i.pinimg.com/1200x/3f/f3/38/3ff338fded7cab6c231606b35ebe18ab.jpg"
          alt="JavaScript"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "tween", duration: 0.2 }}
        />
      </div>
      <div className="third w-full">
        <div className="left p-4 space-y-2">
          <h1 className='text-2xl font-bold font-["balo"]'>JavaScript</h1>
          <p className='text-md font-semibold font-["balo"] line-clamp-3'>
            Strong command of JavaScript for implementing complex logic,
            handling asynchronous operations, and enhancing user experience.
            Familiar with ES6+ features and modern development workflows.
          </p>
          <div className="text-right text-sm font-semibold mb-1">95%</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-black h-4 rounded-full"
              style={{ width: "95%" }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>,
  ];
};

export default Frontskill;
