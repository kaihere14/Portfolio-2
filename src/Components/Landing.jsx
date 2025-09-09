import React from 'react'
import { TiArrowDownThick } from "react-icons/ti";

const Landing = () => {
  return (
    <div  id="home" className='w-full min-h-screen overflow-hidden bg-[#ffffff] border-b-3'>
        <div className="content w-full flex mx-30 mt-30">
            <div className="left w-1/2 mt-10">
            {["Hello.","I'm Arman."].map((item,index)=>(<h1 key={index} className='text-8xl font-bold font-["balo"] '>{item.includes('Arman') ? <>I'm <span className='text-[#ffa600]'>Arman.</span></> : item}</h1>))}
            <p className='text-2xl font-semibold font-["balo"] w-[80%]'>Hi, I’m Arman — a passionate web developer crafting clean,modern and responsive websites.</p>
            <button href='#'  className='hover:bg-[#ffa600]  hover:scale-105 transition-all ease-in duration-200 cursor-pointer font-["balo"] font-semibold border-3 bg-[#c4c4c4] flex justify center items-center py-2 px-3 mt-10 gap-2'>
                <a href='https://drive.google.com/uc?export=download&id=1UKwxiq0MgVb_EbxwkdFsE_EakfOW6sQN' download>Download Resume</a>
                <TiArrowDownThick/>
            </button>
            </div>
            <div className="right w-1/2">
                <img src="https://cdn.prod.website-files.com/5e87e737ee7085b9ba02c101/5e87e737ee7085c39c02c107_mac.svg" alt="" />
            </div>
        </div>


        <div className="quick  w-full mt-30 mb-5 ">

          <h1 className='text-4xl font-["balo"] font-semibold ml-[10vw] leading-none'>Quick Links</h1>

          <div className="flex w-full justify-center">
            <button href='#'  className='hover:bg-[#ffa600] hover:scale-105 transition-all ease-in duration-200 text-lg  gap-20 cursor-pointer font-["balo"] font-semibold border-3 bg-[#c4c4c4] flex justify center items-center py-2 px-3 gap-2'>
                <a href='https://www.instagram.com/_mirenox/'>Instagram </a>
                <TiArrowDownThick className='rotate-[220deg]'/>
            </button>

            <button href='#'  className='hover:bg-[#ffa600] hover:scale-105 transition-all ease-in duration-200 text-lg gap-20 cursor-pointer font-["balo"] font-semibold border-3 bg-[#c4c4c4] flex justify center items-center py-2 px-3 gap-2'>
                <a href='https://github.com/kaihere14'>Github</a>
                <TiArrowDownThick className='rotate-[220deg]'/>
            </button>

            <button href='#'  className='hover:bg-[#ffa600] hover:scale-105 transition-all ease-in duration-200 text-lg gap-20 cursor-pointer font-["balo"] font-semibold border-3 bg-[#c4c4c4] flex justify center items-center py-2 px-3 gap-2'>
                <a href='https://www.linkedin.com/in/arman-thakur-303b47367/'>Linkedin</a>
                <TiArrowDownThick className='rotate-[220deg]'/>
            </button>


            <button href='#'  className='hover:bg-[#ffa600] hover:scale-105 transition-all ease-in duration-200 text-lg gap-20 cursor-pointer font-["balo"] font-semibold border-3 bg-[#c4c4c4] flex justify center items-center py-2 px-3  gap-2'>
                <a href='https://x.com/ArmanKiyotaka'>Twitter</a>
                <TiArrowDownThick className='rotate-[220deg]'/>
            </button>

            </div>

        </div>

    </div>
  )
}

export default Landing