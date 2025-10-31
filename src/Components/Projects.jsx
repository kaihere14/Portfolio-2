import React, { useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { TiArrowDownThick } from "react-icons/ti";
import { X, ExternalLink, Github } from "lucide-react";

// Modal Component
const ProjectModal = ({ project, onClose }) => {
  // Prevent body scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      style={{ touchAction: "none" }} // Prevent touch scrolling on mobile
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-white max-w-4xl w-full max-h-[90vh] border-3 shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()} // Prevent wheel events from bubbling
      >
        {/* Browser-like header - Fixed at top */}
        <div className="flex border-b-3 items-center p-3 bg-[#c4c4c4] flex-shrink-0 relative">
          <div className="flex gap-2 px-2">
            <div className="w-3 h-3 border-2 rounded-full bg-white"></div>
            <div className="w-3 h-3 border-2 rounded-full bg-white"></div>
          </div>
          <h1 className='font-["balo"] font-semibold w-full text-center text-xl pr-12'>
            2020-04-08-project-details.html
          </h1>

          {/* Close Button - Properly aligned in header */}
          <button
            onClick={onClose}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 shadow-lg transition-colors z-10"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div
          className="flex-1 overflow-y-auto overflow-x-hidden"
          style={{ maxHeight: "calc(90vh - 60px)" }}
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative h-64 lg:h-80 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content with background pattern */}
          <div className="p-8 space-y-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-[400px]">
            {/* Title with background */}
            <div className="bg-white p-6 border-3 shadow-md">
              <h2 className='text-4xl lg:text-5xl font-bold font-["balo"] text-gray-800'>
                {project.title}
              </h2>
            </div>

            {/* Description with background */}
            <div className="bg-white p-6 border-3 shadow-md">
              <h3 className='font-["balo"] font-bold text-xl mb-4 text-gray-800'>
                Project Overview
              </h3>
              <p className='text-lg font-["balo"] text-gray-700 leading-relaxed'>
                {project.description}
              </p>
            </div>

            {/* Tech Stack (if available) */}
            {project.tech && (
              <div className="bg-white p-6 border-3 shadow-md">
                <h3 className='font-["balo"] font-bold text-xl mb-4 text-gray-800'>
                  Technologies Used:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((technology, index) => (
                    <span
                      key={index}
                      className='bg-[#c4c4c4] px-4 py-2 border-2 border-gray-400 text-sm font-["balo"] font-semibold text-gray-800 hover:bg-[#ffa600] transition-colors duration-200'
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Admin Credentials Section - Only for project ID 3 (Weathery) */}
            {project.id === 3 && (
              <div className="bg-amber-50 p-6 border-3 border-amber-300 shadow-md">
                <h3 className='font-["balo"] font-bold text-xl mb-4 text-amber-800'>
                  🔐 Admin Login Credentials:
                </h3>
                <div className="bg-white p-4 rounded-lg border-2 border-amber-200">
                  <div className="space-y-2 font-mono">
                    <p className='text-lg font-["balo"] text-gray-800'>
                      <span className="font-bold text-amber-700">Email:</span>{" "}
                      admin
                    </p>
                    <p className='text-lg font-["balo"] text-gray-800'>
                      <span className="font-bold text-amber-700">
                        Password:
                      </span>{" "}
                      admin@2008
                    </p>
                  </div>
                  <div className="mt-3 p-3 bg-amber-100 rounded border-l-4 border-amber-500">
                    <p className='text-sm font-["balo"] text-amber-800'>
                      💡 <strong>Tip:</strong> Use these credentials to access
                      admin features and explore the full functionality of the
                      application.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Links with enhanced background */}
            <div className="bg-white p-6 border-3 shadow-md">
              <h3 className='font-["balo"] font-bold text-xl mb-4 text-gray-800'>
                Project Links:
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex-1 bg-[#c4c4c4] hover:bg-[#ffa600] border-3 font-["balo"] font-semibold py-3 px-6 flex items-center justify-center gap-3 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105'
                  >
                    <ExternalLink size={20} />
                    <span>View Live Project</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex-1 bg-gray-800 hover:bg-gray-900 text-white border-3 font-["balo"] font-semibold py-3 px-6 flex items-center justify-center gap-3 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105'
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Card Component - Reusable and efficient
const ProjectCard = ({ project, index, onClick }) => {
  // Determine if this is one of the first 4 projects (featured)
  const isFeatured = index < 4;

  return (
    <motion.div
      onClick={onClick}
      className={`w-[70vw] lg:w-[35vw] flex flex-col shadow-lg flex-shrink-0 cursor-pointer relative ${
        isFeatured
          ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-4 border-yellow-400 shadow-yellow-400/50"
          : "bg-white border-3 shadow-gray-800"
      }`}
      whileHover={{
        y: -8,
        boxShadow: isFeatured
          ? "0 20px 25px -5px rgba(251, 191, 36, 0.4), 0 10px 10px -5px rgba(251, 191, 36, 0.2)"
          : "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        scale: isFeatured ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.1, duration: 0.5 },
      }}
    >
      {/* Featured Badge for first 3 projects */}
      {isFeatured && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
            ⭐ FEATURED
          </div>
        </div>
      )}
      <div
        className={`first flex border-b-3 items-center p-1 ${
          isFeatured
            ? "bg-gradient-to-r from-yellow-400 to-orange-400"
            : "bg-[#c4c4c4]"
        }`}
      >
        <div className="flex gap-2 px-2">
          <div
            className={`w-3 h-3 border-2 rounded-full ${
              isFeatured ? "bg-white border-yellow-600" : "bg-white"
            }`}
          ></div>
          <div
            className={`w-3 h-3 border-2 rounded-full ${
              isFeatured ? "bg-white border-yellow-600" : "bg-white"
            }`}
          ></div>
        </div>
        <h1
          className={`font-["balo"] font-semibold w-full text-center text-xl ${
            isFeatured ? "text-white drop-shadow-md" : ""
          }`}
        >
          2020-04-08-project.html
        </h1>
      </div>

      <div className="second w-full overflow-hidden">
        <motion.img
          className="w-full h-32 object-cover"
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "tween", duration: 0.2 }}
        />
      </div>

      <div className="third w-full">
        <div className="left p-6 space-y-2">
          <h1 className='text-3xl font-bold font-["balo"]'>{project.title}</h1>
          <p className='text-lg font-semibold font-["balo"] line-clamp-3'>
            {project.description}
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: isFeatured ? "#f59e0b" : "#ffa600",
            }}
            transition={{ type: "tween", duration: 0.2 }}
            className={`cursor-pointer font-["balo"] font-semibold border-3 flex justify-center items-center py-2 px-3 gap-4 w-full ${
              isFeatured
                ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg"
                : "bg-[#c4c4c4]"
            }`}
          >
            <span>{isFeatured ? "✨ Explore Featured" : "Know More"}</span>
            <TiArrowDownThick className="rotate-[220deg]" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const targetRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  // Projects data array
  const projectsData = [
    {
      id: 1,
      title: "TitleForge",
      image:
        "https://i.pinimg.com/736x/43/b0/b6/43b0b6c77528df61d92623c4bdc1e397.jpg",
      description:
        "TitleForge is an AI-powered YouTube title optimization platform that helps content creators generate click-worthy, SEO-friendly titles to boost their video views and engagement. Built as a comprehensive full-stack application, it leverages Google's Gemini AI for advanced title analysis and generation, YouTube Data API for channel insights, and a sophisticated credit-based system for user management. The platform features intelligent title enhancement that analyzes tone, emotion, keywords, and engagement factors from existing video titles to generate optimized alternatives. With a modern, responsive interface built using React and Tailwind CSS, users can seamlessly input YouTube channel names or URLs to receive AI-generated title suggestions delivered both in the dashboard and via beautifully formatted emails. The application includes secure user authentication with JWT, OTP-based email verification, payment gateway integration through Razorpay for credit purchases, and Redis-powered rate limiting for API protection. Additional features include real-time credit tracking, comprehensive user profiles, password recovery system, and detailed analytics showing before/after title comparisons to demonstrate the optimization impact.",
      link: "https://titleforge.me/",
      github: "https://github.com/kaihere14/Title-Forge",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Perplexity AI",
        "Google Gemini AI",
        "YouTube Data API",
        "PhonePay",
        "JWT",
        "Bcrypt",
        "Redis",
        "Tailwind CSS",
        "Axios",
        "React Router",
        "Vite",
        "Resend API",
        "DaisyUI",
        "Postman",
      ],
    },
    {
      id: 3,
      title: "ResolveIQ  ",
      image:
        "https://i.pinimg.com/736x/9a/b9/0f/9ab90f1619d09dd035e614b76b092fdc.jpg", // Replace with your actual ResolveIQ image
      description:
        "ResolveIQ is a full-stack complaint management and resolution system that optimizes technical support through intelligent ticket routing and real-time status tracking. Built on the MERN stack, it enables seamless collaboration between users, admins, and technicians via role-based access, JWT authentication, and automated email notificationsThe platform features a three-tier complaint lifecycle (pending, ongoing, completed), dynamic technician assignment, and OTP-based status verification. Its backend uses Express.js (MVC) with MongoDB aggregation pipelines for efficient data handling, and integrates Resend API for transactional notifications.On the frontend, a React + Vite interface delivers fluid dashboards with GSAP animations, Framer Motion, and Tailwind CSS styling. Each role—user, technician, admin—has a dedicated view with real-time tracking, analytics, and secure session management.Deployed on Vercel, ResolveIQ embodies production-grade SaaS patterns like error boundaries, standardized APIs, and toast-based feedback, reflecting strong design principles and scalable architecture.",
      link: "https://resolve-iq-cqza.vercel.app/", // Replace with your actual deployed URL
      github: "https://github.com/kaihere14/ResolveIQ---Backend",
      tech: [
        "JavaScript",
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT Auth",
        "Bcrypt",
        "Resend API",
        "RESTful APIs",
        "MVC Architecture",
        "GSAP",
        "Framer Motion",
        "Axios",
        "React Router DOM",
        "React Toastify",
      ],
    },
    {
      id: 2,
      title: "ChatX",
      image:
        "https://i.pinimg.com/1200x/a7/ba/3d/a7ba3d1bffec91d6fc4b946dc2fcf968.jpg",
      description:
        "ChatX is a comprehensive real-time messaging application that enables seamless communication between users with modern web technologies. Built as a full-stack solution, it features instant messaging, file sharing, user authentication, and real-time status indicators. The application includes advanced security measures like rate limiting and bot protection, email notifications, password recovery system, and responsive design optimized for both desktop and mobile devices. Users can create accounts, connect with others, send text messages and images, see online/offline status, typing indicators, and manage their profiles with custom profile pictures. The app also includes keyboard sound effects for enhanced user experience and maintains message history with the ability to delete conversations.",
      link: "https://chatx-lcy3i.sevalla.app/",
      github: "https://github.com/kaihere14/ChatX",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "Socket.io",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Bcrypt",
        "Cloudinary",
        "Tailwind CSS",
        "DaisyUI",
        "Zustand",
        "Axios",
        "React Router",
        "Vite",
        "Resend API",
        "Arcjet Security",
        "React Hot Toast",
        "Lucide React",
      ],
    },
    {
      id: 4,
      title: "Chatify AI",
      image:
        "https://i.pinimg.com/1200x/12/33/6e/12336ef2701ebce231e9b3eb3ca2a393.jpg", // AI chat interface image
      description:
        "Chatify AI is an intelligent conversational application that combines the power of Google's Gemini AI with modern web technologies to deliver an exceptional chat experience. Built as a full-stack solution, it features real-time AI conversations, advanced user authentication with OTP verification, email notifications, and a sleek responsive interface. The application includes secure JWT-based authentication, password recovery system with email verification, input refinement capabilities, and a modern dark-themed UI optimized for both desktop and mobile devices. Users can create accounts with email verification, engage in intelligent conversations with AI, refine their queries for better responses, and manage their profiles securely. The app maintains conversation history and provides a seamless user experience with loading indicators, toast notifications, and smooth animations.",
      link: "https://chatify-ai.vercel.app/", // Your actual GitHub repo link
      github: "https://github.com/kaihere14/chatify-ai",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "Google Gemini AI",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Bcrypt",
        "Tailwind CSS",
        "Axios",
        "Vite",
        "Nodemailer",
        "React Toastify",
        "React Icons",
        "React Markdown",
        "Framer Motion",
        "React Loading Indicators",
        "Cookie Parser",
        "CORS",
      ],
    },
    {
      id: 5,
      title: "Weathery",
      image:
        "https://i.pinimg.com/736x/c2/00/04/c20004d98dd3f9ea40b351dde14fb8f8.jpg",
      description:
        "This is a web-based Weather Check App that lets users select a city, enter a location, and get the live weather details instantly. It leverages a free and reliable weather API to fetch real-time data and ensures accurate forecasts every time.",
      link: "https://weather-check-hazel.vercel.app/",
      github: "https://github.com/yourusername/weathery",
      tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    },
    {
      id: 6,
      title: "Quizzyy",
      image:
        "https://i.pinimg.com/1200x/12/6e/ec/126eecab9015560d505deadd181ff64e.jpg",
      description:
        "Quizzy is a browser-based quiz app that challenges your HTML skills by presenting a set of random questions each time you play. It uses quizapi.io to fetch questions, stores them locally after fetching once to use api efficiently.",
      link: "https://quizzy-black.vercel.app/",
      github: "https://github.com/yourusername/quizzy",
      tech: ["HTML", "CSS", "JavaScript", "Quiz API", "Local Storage"],
    },

    {
      id: 7,
      title: "Kitten Diaries",
      image:
        "https://i.pinimg.com/736x/9a/b9/0f/9ab90f1619d09dd035e614b76b092fdc.jpg",
      description:
        "Kitten Diaries is a web app that displays a grid of 9 cute kitten images fetched from the Pexels API. Every time you load the page, a random page of results is used to make the gallery feel fresh and different each time. Also its responsive for all devices.",
      link: "https://kitten-diaries.vercel.app/",
      github: "https://github.com/yourusername/kitten-diaries",
      tech: ["HTML", "CSS", "JavaScript", "Pexels API"],
    },
  ];

  return (
    <>
      <section
        id="project"
        ref={targetRef}
        className="relative h-[300vh] bg-[#DDDDDD] border-b-3"
      >
        <div className="sticky top-0 h-screen flex overflow-hidden">
          {/* Title */}
          <div className="flex items-center pl-4 lg:pl-8">
            <h1 className='font-["balo"] text-6xl lg:text-[10rem] font-semibold leading-none tracking-tight'>
              Projects
            </h1>
          </div>

          {/* Cards animation */}
          <motion.div
            style={{ x }}
            className="flex items-center gap-10 lg:gap-20 ml-10 lg:ml-20 pr-20"
          >
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
