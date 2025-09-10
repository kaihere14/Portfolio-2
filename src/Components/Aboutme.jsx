import React , {useState} from 'react'
import { motion } from 'framer-motion'
import { TiArrowDownThick } from "react-icons/ti";
import { data, input } from 'framer-motion/client';
import axios from 'axios';
import doodle from '../assets/doodle.png';

const Aboutme = () => {
    const [fname,setFname] = useState('')
    
    const [lname,setLname] = useState('')
    const [email,setEmail] = useState('')
    const [msg,setMsg] = useState('')

    const handle = async(e)=>{
        e.preventDefault();
        const data={
            fname,
            lname,
            email,
            msg,
        };

        try {
            const response = await axios.post("https://portfolio-backend-gray.vercel.app/contact",data,{
                headers:{
                    "Content-Type" : "application/json"
                }
            });

            if (response.status === 200) {
                setMsg('Message Sent Successfully');
                setFname('');
                setLname('');
                setEmail('');
                // setMsg(''); // Clear the message input after successful send
            }
        } catch (error) {
            console.error("Frontend error:", error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setMsg(error.response.data.error || 'Message Failed to send');
            } else if (error.request) {
                // The request was made but no response was received
                setMsg('No response from server. Please try again later.');
            } else {
                // Something else happened in setting up the request that triggered an Error
                setMsg('An unexpected error occurred.');
            }
        }
       console.log(response)
        
    }

  return (
    <div id='contact' className=' w-full'>
        <div className='text-6xl font-["balo"] font-bold text-center mt-5'>
            <h1>Contact <span className='text-orange-400 underline'>me</span></h1>
        </div>

        <div className="content flex gap-20 w-full mt-10">
            
            <div className='w-auto ml-20'>
                <img className='h-auto w-auto' src={doodle} alt="" />
            </div>


            <motion.div key="card-1" className='w-1/2 h-fit mt-8 bg-white border-3 flex flex-col shadow-lg shadow-gray-800' whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} transition={{ type: "tween", duration: 0.2 }}>
                        <div className="first flex border-b-3 items-center p-1 bg-[#c4c4c4]">
                        <div className='flex gap-2 px-2'>
                        <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
                        <div className='w-3 h-3 border-2 rounded-full bg-white'></div>
                        </div>
                        <h1 className='font-["balo"] font-semibold w-full text-center text-xl'>2020-04-08-Contact.html</h1>
                        </div>

                        <div className="second flex justify-center pt-10 pb-20">
                            <form className='font-["balo"]' action="" onSubmit={(e)=>{
                                handle(e)
                                
                                }}>
                                <div className='flex gap-10 mt-10'>
                                <input  type="text" fname='fname' value={fname} onChange={(e)=>setFname(e.target.value)} placeholder='Enter your First Name' className='border-2 rounded-2xl p-3 focus:outline-none focus:border-amber-500'/>
                                <input type="text" lname='fname' value={lname} onChange={(e)=>setLname(e.target.value)} placeholder='Enter your Last Name' className='border-2 rounded-2xl p-3 focus:outline-none focus:border-amber-500'/>
                                </div>

                                <div className='w-full mt-10'>
                                <input  type="text" email='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email' className='border-2 rounded-2xl p-3 focus:outline-none focus:border-amber-500 w-full'/>
                                <input  type="text" msg='msg' value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='Enter your Message' className='pb-30 text-start border-2 rounded-2xl p-3 focus:outline-none focus:border-amber-500 w-full mt-10'/>
                                </div>

                                <div className='flex justify-center mt-10'>
                                <button className='border-2 rounded-2xl active:border-amber-500 py-3 px-6 hover:bg-amber-500 transition-colors  duration-300'>
                                    Sumbit
                                </button>
                                </div>
                            </form>
                        </div>
            </motion.div>,
        </div>

    </div>
  )
}

export default Aboutme
