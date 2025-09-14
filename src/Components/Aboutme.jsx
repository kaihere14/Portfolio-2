import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import doodle from "../assets/doodle.png";
import { ToastContainer, toast } from 'react-toastify';

const Aboutme = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // <-- message input
  const [statusMsg, setStatusMsg] = useState(""); // <-- success/error message

  const load = () =>toast.success('✅ Message send succesfully!', {
position: "bottom",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "light",
});

const fail = ()=>toast.error('❌ Failed to send message!', {
position: "bottom-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "light",
});

const loadingBar = () => {
  toast('sending message...', {
    position: "bottom-center",
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined, // will animate
    hideProgressBar: false, 
    closeButton: false,
    className: "bg-transparent shadow-none", // remove bg
    bodyClassName: "hidden", // hide text
  });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fname,
      lname,
      email,
      msg: message,
    };

     const toastId = toast.loading("Sending message...", {
    position: "bottom-center",
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
  });

    try {
      const response = await axios.post(
        "https://portfolio-backend-gray.vercel.app/contact",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.update(toastId, {
      render: "✅ Message sent successfully!",
      type: "success",
      isLoading: false,
      autoClose: 3000,
      closeOnClick: true,
      draggable: true,
    });
        setStatusMsg("✅ Message Sent Successfully");

        setFname("");
        setLname("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Frontend error:", error);
      toast.update(toastId, {
      render: "❌ Failed to send message!",
      type: "error",
      isLoading: false,
      autoClose: 3000,
      closeOnClick: true,
      draggable: true,
    });
      if (error.response) {
      
        setStatusMsg(error.response.data.error || "❌ Message failed to send");
        
      } else if (error.request) {
       
        setStatusMsg("⚠️ No response from server. Please try again later.");
        
      } else {
        
        setStatusMsg("❌ An unexpected error occurred.");
      }
    }
  };

  return (
    <div id="contact" className="w-full px-5 py-10">
      {/* Title */}
      <div className="text-4xl md:text-6xl font-['balo'] font-bold text-center">
        <h1>
          Contact <span className="text-orange-400 underline">me</span>
        </h1>
      </div>

      {/* Content */}
      <div className="content flex flex-col md:flex-row gap-10 md:gap-20 w-full mt-10 items-center">
        {/* Left image */}
        <div className="w-full md:w-1/2 hidden lg:flex justify-center ">
          <img className="max-w-[300px] md:max-w-[400px] h-auto" src={doodle} alt="doodle" />
        </div>

        {/* Contact form */}
        <motion.div
          key="contact-card"
          className="w-full md:w-1/2 h-fit bg-white border-3 flex flex-col shadow-lg shadow-gray-800 rounded-lg lg:mr-20"
          whileHover={{
            y: -5,
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          {/* Header */}
          <div className="first flex border-b-3 items-center p-2 bg-[#c4c4c4]">
            <div className="flex gap-2 px-2">
              <div className="w-3 h-3 border-2 rounded-full bg-white"></div>
              <div className="w-3 h-3 border-2 rounded-full bg-white"></div>
            </div>
            <h1 className="font-['balo'] font-semibold w-full text-center text-base md:text-xl">
              2020-04-08-Contact.html
            </h1>
          </div>

          {/* Form */}
          <div className="second flex justify-center p-6">
            <form
              className="font-['balo'] w-full flex flex-col gap-6"
              onSubmit={handleSubmit}
              
            >
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  name="fname"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="First Name"
                  className="flex-1 border-2 rounded-2xl p-3 focus:outline-none focus:border-amber-500"
                  required
                />
                <input
                  type="text"
                  name="lname"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Last Name"
                  className="flex-1 border-2 rounded-2xl p-3 focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border-2 rounded-2xl p-3 focus:outline-none focus:border-amber-500 w-full"
                required
              />

              <textarea
                name="msg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className="border-2 rounded-2xl p-3 focus:outline-none focus:border-amber-500 w-full h-32 resize-none"
                required
              />

              {/* Status message */}
              {statusMsg && (
                <p className="text-center text-sm md:text-base mt-2">
                  {statusMsg}
                  
                </p>,
                <ToastContainer/>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="border-2 rounded-2xl py-3 px-6 font-semibold hover:bg-amber-500 transition-colors duration-300"
                >
                  Submit
                </button>
    
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutme;
