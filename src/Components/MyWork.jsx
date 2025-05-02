import React from "react";
import RotatingText from "./Animations/RotatingText";
import SpotlightCard from "./Animations/SpotlightCard";
import CircularGallery from "./Animations/CircularGallery";
import Masonry from "./Animations/Masonry";
import AnimatedContent from "./Animations/AnimatedContent";
import prescipto from "../assets/prescipto.png";
import pizza from "../assets/pizza.png";
import todo from "../assets/todo.png";
import ladoo from "../assets/ladoo.jpg";
import chicken from "../assets/chicken.jpg";
import choco from "../assets/choco.jpg";
import club from "../assets/club.jpg";
import puff from "../assets/puff.jpg";
import spanish from "../assets/spanish.jpg";
import sand from "../assets/sand.jpg";
import veg from "../assets/veg.jpg";
import fruit from "../assets/fruit.jpg";
import zatar from "../assets/zatar.jpg";

const MyWork = () => {
  const data = [
    { id: 1, image: ladoo, height: 400 },
    { id: 2, image: chicken, height: 300 },
    { id: 3, image: choco, height: 300 },
    { id: 4, image: club, height: 300 },
    { id: 5, image: puff, height: 300 },
    { id: 6, image: spanish, height: 300 },
    { id: 7, image: sand, height: 200 },
    { id: 8, image: veg, height: 300 },
    { id: 9, image: fruit, height: 200 },
    { id: 10, image: zatar, height: 400 },
  ];

  const projects = [
    {
      title: "Prescipto",
      description:
        "A comprehensive doctor appointment booking system with multiple user roles and department-based categorization.",
      features: [
        "Patient portal for booking appointments by department",
        "Doctor's panel to manage appointments and patient records",
        "Admin dashboard for department management and user control",
        "Real-time appointment status updates and notifications",
      ],
      demoLink: "https://prescipto-qbg7.onrender.com/",
      sourceLink: "#",
      image: prescipto,
    },
    {
      title: "Pappas Pizza",
      description:
        "A modern pizza ordering platform with real-time order tracking and comprehensive menu management system.",
      features: [
        "Categorized menu system (Pizza, Chicken, Box Meals, Soft Drinks)",
        "Real-time order tracking and notification system",
        "Sales dashboard for menu management, stock control, analytics and history",
        "Customer profile with order history and favorites",
      ],
      demoLink: "https://pappaspizza.netlify.app/",
      sourceLink: "#",
      image: pizza,
    },
    {
      title: "ToDoApp",
      description:
        "A dynamic task management application that helps users organize their daily activities with real-time updates and intuitive controls.",
      features: [
        "Create and manage daily tasks with title and description",
        "Mark tasks as completed with visual status indicators",
        "Edit existing tasks to update content or deadlines",
        "Delete completed or unnecessary tasks",
        "Persistent storage to maintain task list between sessions",
      ],
      demoLink: "https://todoappsted.netlify.app/",
      sourceLink: "#",
      image: todo,
    },
    // Add more projects here with the same structure
  ];

  return (
    <div id="projects" className="bg-black text-white py-5 sm:py-10">
      <div className="flex justify-center items-center gap-2 mb-4 sm:mb-8 py-5 sm:py-10 text-4xl sm:text-5xl lg:text-7xl">
        <p>My</p>
        <RotatingText
          texts={["Projects", "Designs", "Photography"]}
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

      <div className="px-4 sm:px-8 lg:px-20 text-left">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          config={{ tension: 70, friction: 50 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div>
            <p className="text-3xl sm:text-6xl lg:text-5xl font-bold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#4079ff] bg-clip-text text-transparent leading-normal py-2">
              Projects
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 70, friction: 50 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <div>
            <p className="text-gray-300 text-lg sm:text-xl mt-4">
              Showcasing my expertise in full-stack development using the MERN
              stack (MongoDB, Express.js, React.js, Node.js). Each project
              demonstrates my ability to create robust, scalable, and
              user-friendly web applications.
            </p>
          </div>
        </AnimatedContent>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-0 px-4 mt-8 justify-items-start">
        {projects.map((project, index) => (
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 70, friction: 50 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1}
            threshold={0.1}
          >
            <div>
              <SpotlightCard
                key={index}
                className="w-full p-6"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="flex flex-col gap-4">
                  {/* Image Container */}
                  <div className="w-full relative pb-[56.25%] overflow-hidden rounded-lg mb-4 cursor-pointer">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute top-0 left-0 w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </a>
                  </div>

                  <h6 className="text-2xl font-bold text-cyan-300">
                    {project.title}
                  </h6>
                  <div className="space-y-4">
                    <p className="text-gray-300">{project.description}</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <div className="flex gap-4 mt-4">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-cyan-300 text-black px-4 py-2 rounded-lg hover:bg-cyan-400 transition-colors">
                          View Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </AnimatedContent>
        ))}
      </div>

      <div className="px-4 sm:px-8 lg:px-20 text-left mt-10">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          config={{ tension: 70, friction: 50 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <div>
            <p className="text-3xl sm:text-6xl lg:text-5xl font-bold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#4079ff] bg-clip-text text-transparent leading-normal py-2">
              Designs
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 70, friction: 50 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <div>
            <p className="text-gray-300 text-lg sm:text-xl mt-4">
              Crafting eye-catching posters and visual designs that capture
              attention and convey messages effectively. Each design is created
              with a perfect blend of creativity and purpose.
            </p>
          </div>
        </AnimatedContent>
      </div>
      <div>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-20 text-left mt-10">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          config={{ tension: 70, friction: 50 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <div>
            <p className="text-3xl sm:text-6xl lg:text-5xl font-bold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#4079ff] bg-clip-text text-transparent leading-normal py-2">
              Photography
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 70, friction: 50 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <div>
            <p className="text-gray-300 text-lg sm:text-xl mt-4">
              Specializing in product photography that brings out the essence of
              culinary creations. Each image is meticulously crafted with
              precise lighting, composition, and styling to showcase food and
              beverages in their most appetizing form, helping brands tell their
              delicious stories.
            </p>
          </div>
        </AnimatedContent>
      </div>

      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 70, friction: 50 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1}
        threshold={0.1}
      >
        <div>
          <div>
            <Masonry data={data} />
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default MyWork;
