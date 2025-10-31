import React from "react";
import { motion } from "framer-motion";

const Backskill = () => {
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
          MongoDB Database
        </h1>
      </div>
      <div className="second w-full overflow-hidden">
        <motion.img
          className="w-full h-24 object-cover object-center"
          src="https://www.gtech.com.tr/wp-content/uploads/2020/09/mongodb-nedir-1.png"
          alt="MongoDB"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "tween", duration: 0.2 }}
        />
      </div>
      <div className="third w-full">
        <div className="left p-4 space-y-2">
          <h1 className='text-2xl font-bold font-["balo"]'>MongoDB</h1>
          <p className='text-md font-semibold font-["balo"] line-clamp-3'>
            Experienced in designing and managing NoSQL databases with MongoDB,
            including schema design, data modeling, and query optimization for
            scalable applications.
          </p>
          <div className="text-right text-sm font-semibold mb-1">80%</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-black h-4 rounded-full"
              style={{ width: "80%" }}
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
          Node.js Runtime
        </h1>
      </div>
      <div className="second w-full overflow-hidden">
        <motion.img
          className="w-full h-24 object-cover"
          src="https://blog.42mate.com/wp-content/uploads/2016/08/Node-js-Logo.png"
          alt="Node.js"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "tween", duration: 0.2 }}
        />
      </div>
      <div className="third w-full">
        <div className="left p-4 space-y-2">
          <h1 className='text-2xl font-bold font-["balo"]'>Node.js</h1>
          <p className='text-md font-semibold font-["balo"] line-clamp-3'>
            Proficient in building scalable and efficient backend services using
            Node.js, including asynchronous programming, module development, and
            API creation.
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
          Express.js Framework
        </h1>
      </div>
      <div className="second w-full overflow-hidden">
        <motion.img
          className="w-full h-24 object-cover"
          src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fhpg6if7btrwilqkidqbe.png"
          alt="Express.js"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "tween", duration: 0.2 }}
        />
      </div>
      <div className="third w-full">
        <div className="left p-4 space-y-2">
          <h1 className='text-2xl font-bold font-["balo"]'>Express.js</h1>
          <p className='text-md font-semibold font-["balo"] line-clamp-3'>
            Experienced in developing robust RESTful APIs and web applications
            using the Express.js framework, including routing, middleware, and
            authentication.
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
  ];
};

export default Backskill;
