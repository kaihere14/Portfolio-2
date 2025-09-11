import React from 'react'
import { TiArrowDownThick } from "react-icons/ti";
import { motion } from "framer-motion";

const Cards = () => {
  return ([
    <motion.div key="card-1" className='w-[70vw] lg:w-[35vw] bg-white border-3 flex flex-col shadow-lg shadow-gray-800' whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} transition={{ type: "tween", duration: 0.2 }}>
        <div className="first flex border-b-3 items-center p-1 bg-[#c4c4c4]">
            <div className='flex gap-2 px-2'>
                <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
                <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
            </div>
            <h1 className='font-["balo"] font-semibold w-full text-center text-xl'>2020-04-08-project.html</h1>
        </div>
        <div className="second w-full">
            <motion.img className='w-full h-32 object-cover' src="https://i.pinimg.com/1200x/12/33/6e/12336ef2701ebce231e9b3eb3ca2a393.jpg" alt="" whileHover={{ scale: 1.05 }} transition={{ type: "tween", duration: 0.2 }} />
        </div>
        <div className="third w-full">
            <div className="left p-6 space-y-2">
            {["To Desktop"].map((item,index)=>(<h1 key={index} className='text-3xl font-bold font-["balo"]'>{item}</h1>))}
            <p className='text-lg font-semibold font-["balo"] line-clamp-3'>A visually accurate and responsive clone of the official ToDesktop landing page. Built using HTML, TailwindCSS, and Vanilla JavaScript, this project replicates the clean UI and animated interactions seen in modern SaaS marketing websites.</p>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: "#ffa600" }} transition={{ type: "tween", duration: 0.2 }} href='#'  className=' cursor-pointer font-["balo"] font-semibold border-3 bg-[#c4c4c4] flex justify center items-center py-2 px-3 gap-4'>
                <a href='https://todesktop-ui-eta.vercel.app/'>View Project</a>
                <TiArrowDownThick className='rotate-[220deg]'/>
            </motion.button>
            </div>
        </div>
    </motion.div>,

    
    <motion.div key="card-1" className='w-[70vw] lg:w-[35vw] bg-white border-3 flex flex-col shadow-lg shadow-gray-800' whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} transition={{ type: "tween", duration: 0.2 }}>
    <div className="first flex border-b-3 items-center p-1 bg-[#c4c4c4]">
        <div className='flex gap-2 px-2'>
            <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
            <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
        </div>
        <h1 className='font-["balo"] font-semibold w-full text-center text-xl'>2020-04-08-project.html</h1>
    </div>
    <div className="second w-full">
        <motion.img className='w-full h-32 object-cover' src="https://i.pinimg.com/736x/43/b0/b6/43b0b6c77528df61d92623c4bdc1e397.jpg" alt="" whileHover={{ scale: 1.05 }} transition={{ type: "tween", duration: 0.2 }} />
    </div>
    <div className="third w-full">
        <div className="left p-6 space-y-2">
        {["Currency Convertor"].map((item,index)=>(<h1 key={index} className='text-3xl font-bold font-["balo"]'>{item}</h1>))}
        <p className='text-lg font-semibold font-["balo"] line-clamp-3'>This is a web-based Currency Converter that lets users select two currencies, enter an amount, and get the converted value instantly.
        It leverages a free and reliable exchange rate API to fetch live rates and ensures accurate conversions every time.</p>
        <motion.button whileHover={{ scale: 1.05, backgroundColor: "#ffa600" }} transition={{ type: "tween", duration: 0.2 }} href='#'  className=' cursor-pointer font-["balo"] font-semibold border-3 bg-[#c4c4c4] flex justify center items-center py-2 px-3 gap-4'>
            <a href='https://currency-convertor-beta-azure.vercel.app/'>View Project</a>
            <TiArrowDownThick className='rotate-[220deg]'/>
        </motion.button>
        </div>
    </div>
    </motion.div>,

    
    <motion.div key="card-3" className='w-[70vw] lg:w-[35vw] bg-white border-3 flex flex-col shadow-lg shadow-gray-800' whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} transition={{ type: "tween", duration: 0.2 }}>
    <div className="first flex border-b-3 items-center p-1 bg-[#c4c4c4]">
        <div className='flex gap-2 px-2'>
            <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
            <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
        </div>
        <h1 className='font-["balo"] font-semibold w-full text-center text-xl'>2020-04-08-project.html</h1>
    </div>
    <div className="second w-full">
        <motion.img className='w-full h-32 object-cover' src="https://i.pinimg.com/736x/c2/00/04/c20004d98dd3f9ea40b351dde14fb8f8.jpg" alt="" whileHover={{ scale: 1.05 }} transition={{ type: "tween", duration: 0.2 }} />
    </div>
    <div className="third w-full">
        <div className="left p-6 space-y-2">
        {["Weathery"].map((item,index)=>(<h1 key={index} className='text-3xl font-bold font-["balo"]'>{item}</h1>))}
        <p className='text-lg font-semibold font-["balo"] line-clamp-3'>This is a web-based Weather Check App that lets users select a city, enter a location, and get the live weather details instantly. It leverages a free and reliable weather API to fetch real-time data and ensures accurate forecasts every time.
        </p>
        <motion.button whileHover={{ scale: 1.05, backgroundColor: "#ffa600" }} transition={{ type: "tween", duration: 0.2 }} href='#'  className=' cursor-pointer font-["balo"] font-semibold border-3 bg-[#c4c4c4] flex justify center items-center py-2 px-3 gap-4'>
            <a href='https://weather-check-hazel.vercel.app/'>View Project</a>
            <TiArrowDownThick className='rotate-[220deg]'/>
        </motion.button>
        </div>
    </div>
    </motion.div>,
    <motion.div key="card-4" className='w-[70vw] lg:w-[35vw] bg-white border-3 flex flex-col shadow-lg shadow-gray-800' whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} transition={{ type: "tween", duration: 0.2 }}>
    <div className="first flex border-b-3 items-center p-1 bg-[#c4c4c4]">
        <div className='flex gap-2 px-2'>
            <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
            <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
        </div>
        <h1 className='font-["balo"] font-semibold w-full text-center text-xl'>2020-04-08-project.html</h1>
    </div>
    <div className="second w-full">
        <motion.img className='w-full h-32 object-cover' src="https://i.pinimg.com/1200x/12/6e/ec/126eecab9015560d505deadd181ff64e.jpg" alt="" whileHover={{ scale: 1.05 }} transition={{ type: "tween", duration: 0.2 }} />
    </div>
    <div className="third w-full">
        <div className="left p-6 space-y-2">
        {["Quizzyy"].map((item,index)=>(<h1 key={index} className='text-3xl font-bold font-["balo"]'>{item}</h1>))}
        <p className='text-lg font-semibold font-["balo"] line-clamp-3'>Quizzy is a browser-based quiz app that challenges your HTML skills by presenting a set of random questions each time you play.
        It uses quizapi.io to fetch questions, stores them locally after fetching once to use api efficenty</p>
        <motion.button whileHover={{ scale: 1.05, backgroundColor: "#ffa600" }} transition={{ type: "tween", duration: 0.2 }} href='#'  className=' cursor-pointer font-["balo"] font-semibold border-3 bg-[#c4c4c4] flex justify center items-center py-2 px-3 gap-4'>
            <a href='https://quizzy-black.vercel.app/'>View Project</a>
            <TiArrowDownThick className='rotate-[220deg]'/>
        </motion.button>
        </div>
    </div>
    </motion.div>,
    <motion.div key="card-5" className='w-[70vw] lg:w-[35vw] bg-white border-3 flex flex-col shadow-lg shadow-gray-800' whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} transition={{ type: "tween", duration: 0.2 }}>
    <div className="first flex border-b-3 items-center p-1 bg-[#c4c4c4]">
        <div className='flex gap-2 px-2'>
            <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
            <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
        </div>
        <h1 className='font-["balo"] font-semibold w-full text-center text-xl'>2020-04-08-project.html</h1>
    </div>
    <div className="second w-full">
        <motion.img className='w-full h-32 object-cover' src="https://i.pinimg.com/736x/25/51/f1/2551f19b644174011f77b345569aed9e.jpg" alt="" whileHover={{ scale: 1.05 }} transition={{ type: "tween", duration: 0.2 }} />
    </div>
    <div className="third w-full">
        <div className="left p-6 space-y-2">
        {["Quick Cart"].map((item,index)=>(<h1 key={index} className='text-3xl font-bold font-["balo"]'>{item}</h1>))}
        <p className='text-lg font-semibold font-["balo"] line-clamp-3'>QuickCart is a lightweight and responsive shopping cart application built with HTML, CSS, and vanilla JavaScript.
        It uses the browser’s Local Storage 🗄️ to persist cart items and total price—so your cart stays saved even after reloading the page.</p>
        <motion.button whileHover={{ scale: 1.05, backgroundColor: "#ffa600" }} transition={{ type: "tween", duration: 0.2 }} href='#'  className=' cursor-pointer font-["balo"] font-semibold border-3 bg-[#c4c4c4] flex justify center items-center py-2 px-3 gap-4'>
            <p>View Project</p>
            <TiArrowDownThick className='rotate-[220deg]'/>
        </motion.button>
        </div>
    </div>
    </motion.div>,
    <motion.div key="card-6" className='w-[70vw] lg:w-[35vw] bg-white border-3 flex flex-col shadow-lg shadow-gray-800' whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} transition={{ type: "tween", duration: 0.2 }}>
    <div className="first flex border-b-3 items-center p-1 bg-[#c4c4c4]">
        <div className='flex gap-2 px-2'>
            <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
            <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
        </div>
        <h1 className='font-["balo"] font-semibold w-full text-center text-xl'>2020-04-08-project.html</h1>
    </div>
    <div className="second w-full">
        <motion.img className='w-full h-32 object-cover' src="https://i.pinimg.com/736x/9a/b9/0f/9ab90f1619d09dd035e614b76b092fdc.jpg" alt="" whileHover={{ scale: 1.05 }} transition={{ type: "tween", duration: 0.2 }} />
    </div>
    <div className="third w-full">
        <div className="left p-6 space-y-2">
        {["Kitten Diaries"].map((item,index)=>(<h1 key={index} className='text-3xl font-bold font-["balo"]'>{item}</h1>))}
        <p className='text-lg font-semibold font-["balo"] line-clamp-3'>Kitten Diaries is a web app that displays a grid of 9 cute kitten images fetched from the Pexels API.
        Every time you load the page, a random page of results is used to make the gallery feel fresh and different each time.Also its responsive for all devices</p>
        <motion.button whileHover={{ scale: 1.05, backgroundColor: "#ffa600" }} transition={{ type: "tween", duration: 0.2 }} href='#'  className=' cursor-pointer font-["balo"] font-semibold border-3 bg-[#c4c4c4] flex justify center items-center py-2 px-3 gap-4'>
            <a href='https://kitten-diaries.vercel.app/'>View Project</a>
            <TiArrowDownThick className='rotate-[220deg]'/>
        </motion.button>
        </div>
    </div>
    </motion.div>,
    <motion.div key="card-7" className='w-[70vw] lg:w-[35vw] bg-white border-3 flex flex-col shadow-lg shadow-gray-800' whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} transition={{ type: "tween", duration: 0.2 }}>
    <div className="first flex border-b-3 items-center p-1 bg-[#c4c4c4]">
        <div className='flex gap-2 px-2'>
            <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
            <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
        </div>
        <h1 className='font-["balo"] font-semibold w-full text-center text-xl'>2020-04-08-project.html</h1>
    </div>
    <div className="second w-full">
        <motion.img className='w-full h-32 object-cover' src="https://i.pinimg.com/originals/da/7f/b4/da7fb40ab691bebc743980876a4bda74.jpg" alt="" whileHover={{ scale: 1.05 }} transition={{ type: "tween", duration: 0.2 }} />
    </div>
    <div className="third w-full">
        <div className="left p-6 space-y-2">
        {["Do ToDo"].map((item,index)=>(<h1 key={index} className='text-3xl font-bold font-["balo"]'>{item}</h1>))}
        <p className='text-lg font-semibold font-["balo"] line-clamp-3'>This is a web-based To-Do App that lets users add, edit, complete, and delete tasks instantly. It leverages the browser’s Local Storage to persist tasks across sessions, syncing changes immediately and ensuring users never lose the stored to do tasks You can mark task complete or delete </p>
        <motion.button whileHover={{ scale: 1.05, backgroundColor: "#ffa600" }} transition={{ type: "tween", duration: 0.2 }} href='#'  className=' cursor-pointer font-["balo"] font-semibold border-3 bg-[#c4c4c4] flex justify center items-center py-2 px-3 gap-4'>
            <a href='https://to-do-lyart-nine.vercel.app/'>View Project</a>
            <TiArrowDownThick className='rotate-[220deg]'/>
        </motion.button>
        </div>
    </div>
    </motion.div>
    
  ])
}

export default Cards