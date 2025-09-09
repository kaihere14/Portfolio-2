import React from 'react'
import Backskill from './Backskill'
import Frontskill from './Frontskill'

const Skills = () => {
  return (
    <div id='skills' className='w-full  flex flex-col py-10 border-b-3 overflow-hidden'>

      <div className="texts w-full ml-15 ">
        <h1 className='text-9xl  font-["balo"] font-bold'>My <span className='text-orange-400 underline'>Skills.</span></h1>
        <p className='w-1/3 pt-5 font-semibold text-lg text-gray-600 '>The technologies and tools I use to craft clean, modern and responsive digital experiences.</p>
      </div>

      <div className="frontend  w-full mt-20 flex flex-col items-center gap-10">
        <h1 className='text-6xl font-["balo"] font-semibold underline '>Frontend Development</h1>
        <div className="blocks flex flex-wrap justify-center gap-20">
          <Frontskill/>
        </div>
      </div>

      <div className="backend   w-full mt-20 flex flex-col items-center gap-10">
        <h1 className='text-6xl font-["balo"] font-semibold underline '>Backend Development</h1>
        <div className="blocks flex flex-wrap justify-center gap-20">
          <Backskill/>
        </div>
      </div>

    </div>
  )
}

export default Skills