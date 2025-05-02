import React from "react";
import GlitchText from "./Animations/GlitchText";
import SpotlightCard from "./Animations/SpotlightCard";
import code from "../assets/code.jpg";
import graphic from "../assets/graphic.jpg";
import social from "../assets/social.jpg";
import edit from "../assets/editing.jpg";
import AnimatedContent from "./Animations/AnimatedContent";

const Services = () => {

  // Services data array for cleaner rendering
const services = [
  {
    title: "Web Development",
    description: "Creating responsive and modern websites using the latest technologies and best practices for optimal user experience.",
    image: code
  },
  {
    title: "Graphics Design",
    description: "Crafting stunning visuals, logos, and brand identities that capture your unique vision and message.",
    image: graphic
  },
  {
    title: "Social Media",
    description: "Strategic social media management and content creation to boost your online presence and engagement.",
    image: social
  },
  {
    title: "Video Editing & Photography",
    description: "Professional video editing and photography services to tell your story through compelling visual content.",
    image: edit
  },
];

  return (
    <div id="services" className="bg-black text-white py-16">
      <div className="flex justify-center mb-24">
        <GlitchText
          speed={1}
          enableShadows={true}
          enableOnHover={false}
          className="text-3xl font-bold"
        >
          Services
        </GlitchText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <AnimatedContent
            key={index}
            distance={100}
            direction="vertical"
            reverse={false}
            config={{ tension: 50, friction: 25 }}
            initialOpacity={0.0}
            animateOpacity
            scale={1}
            threshold={0.1}
          >
            <SpotlightCard
              className="w-full h-full p-6 flex flex-col"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h6 className="font-bold text-xl mb-3">{service.title}</h6>
                  <p className="text-gray-300">{service.description}</p>
                </div>
                <div className="w-full h-48 overflow-hidden rounded-lg mt-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </SpotlightCard>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
};



export default Services;