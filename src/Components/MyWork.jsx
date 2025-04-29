import React from 'react'
import RotatingText from './Animations/RotatingText'
import code from "../assets/code.jpg"
import graphic from "../assets/graphic.jpg"
import SpotlightCard from "./Animations/SpotlightCard";
import CircularGallery from './Animations/CircularGallery'
import Masonry from './Animations/Masonry'

const MyWork = () => {

  const data = [
    { id: 1, image: 'https://picsum.photos/id/10/200/300', height: 400 },
    { id: 2, image: 'https://picsum.photos/id/14/200/300', height: 300 },
    { id: 3, image: 'https://picsum.photos/id/15/200/300', height: 300 },
    { id: 4, image: 'https://picsum.photos/id/16/200/300', height: 300 },
    { id: 5, image: 'https://picsum.photos/id/17/200/300', height: 300 },
    { id: 6, image: 'https://picsum.photos/id/19/200/300', height: 300 },
    { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 200 },
    { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 300 },
    { id: 9, image: 'https://picsum.photos/id/85/200/300', height: 200 },
    { id: 10, image: 'https://picsum.photos/id/103/200/300', height: 400 }
  ];

  const projects = [
    {
      title: "Prescipto",
      description: "A comprehensive doctor appointment booking system with multiple user roles and department-based categorization.",
      features: [
        "Patient portal for booking appointments by department",
        "Doctor's panel to manage appointments and patient records",
        "Admin dashboard for department management and user control",
        "Real-time appointment status updates and notifications"
      ],
      demoLink: "#",
      sourceLink: "#",
      image: code
    },
    {
      title: "Pappas Pizza",
    description: "A modern pizza ordering platform with real-time order tracking and comprehensive menu management system.",
    features: [
      "Categorized menu system (Pizza, Chicken, Box Meals, Soft Drinks)",
      "Real-time order tracking and notification system",
      "Admin panel for menu management and stock control",
      "Sales dashboard with order analytics and history",
      "Customer profile with order history and favorites"
    ],
    demoLink: "#",
    sourceLink: "#",
    image: graphic // Assuming you have a pizza-related image
  },
  {
    title: "ToDoApp",
    description: "A dynamic task management application that helps users organize their daily activities with real-time updates and intuitive controls.",
    features: [
      "Create and manage daily tasks with title and description",
      "Mark tasks as completed with visual status indicators",
      "Edit existing tasks to update content or deadlines",
      "Delete completed or unnecessary tasks",
      "Persistent storage to maintain task list between sessions"
    ],
    demoLink: "#",
    sourceLink: "#",
    image: code // Replace with appropriate todo app image
  },
    // Add more projects here with the same structure
  ];

  return (
    <div className='bg-black text-white py-5 sm:py-10'>
      <div className='flex justify-center items-center gap-2 mb-4 sm:mb-8 py-5 sm:py-10 text-4xl sm:text-5xl lg:text-7xl'>
        <p>My</p>
        <RotatingText
          texts={['Projects', 'Designs', 'Photography',]}
          mainClassName="px-2 sm:px-4 md:px-6 bg-cyan-300 text-black overflow-hidden py-1.5 sm:py-2 md:py-3 leading-normal justify-center rounded-lg"
          staggerFrom={"first"}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-120%", opacity: 0 }}
          staggerDuration={0}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-2"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      <div className='px-4 sm:px-8 lg:px-20 text-left'>
        <p className="text-3xl sm:text-6xl lg:text-5xl font-bold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#4079ff] bg-clip-text text-transparent leading-normal py-2">
          Projects
        </p>
        <p className="text-gray-300 text-lg sm:text-xl mt-4">
    Showcasing my expertise in full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js). Each project demonstrates my ability to create robust, scalable, and user-friendly web applications.
  </p>      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-0 px-4 mt-8 justify-items-start'>
  {projects.map((project, index) => (
    <SpotlightCard 
      key={index}
      className="w-full p-6" 
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
            <div className="flex flex-col gap-4">
              {/* Image Container */}
              <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h6 className="text-2xl font-bold text-cyan-300">{project.title}</h6>
              <div className="space-y-4">
                <p className="text-gray-300">{project.description}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-4">
                  <button className="bg-cyan-300 text-black px-4 py-2 rounded-lg hover:bg-cyan-400 transition-colors">
                    View Demo
                  </button>
                  <button className="border border-cyan-300 text-cyan-300 px-4 py-2 rounded-lg hover:bg-cyan-300/10 transition-colors">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
      <div className='px-4 sm:px-8 lg:px-20 text-left mt-10'>
      <p className="text-3xl sm:text-6xl lg:text-5xl font-bold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#4079ff] bg-clip-text text-transparent leading-normal py-2">
          Designs
        </p>
        <p className="text-gray-300 text-lg sm:text-xl mt-4">
    Crafting eye-catching posters and visual designs that capture attention and convey messages effectively. Each design is created with a perfect blend of creativity and purpose.
  </p> 
       </div>
      <div>
      <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} />
</div>
      </div>

      <div className='px-4 sm:px-8 lg:px-20 text-left mt-10'>
      <p className="text-3xl sm:text-6xl lg:text-5xl font-bold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#4079ff] bg-clip-text text-transparent leading-normal py-2">
          Photography
        </p>
        <p className="text-gray-300 text-lg sm:text-xl mt-4">
    Capturing moments through my lens with a focus on portrait and landscape photography. Each shot is carefully composed to tell a unique story and evoke emotion through creative angles and natural lighting.
  </p>   
     </div>

     <div>
     <Masonry data={data} />
     </div>
    </div>
  )
}

export default MyWork