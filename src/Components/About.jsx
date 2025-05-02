import React from "react";
import about from "../assets/About_photo.png";
import AnimatedContent from "./Animations/AnimatedContent";

const About = () => {
  return (
    <div id="about" className="bg-black text-white px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20">
      {/* Container with responsive flex layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
        {/* Image section */}
        <div className="w-full lg:w-1/2">
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
              <img
                src={about}
                alt="about"
                className="rounded-3xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </AnimatedContent>
        </div>

        {/* Text content section */}
        <div className="w-full lg:w-1/2">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 70, friction: 50 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1}
            threshold={0.2}
          >
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                About Me
              </h2>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                As a Full Stack Developer specializing in the MERN stack, I bridge
                the gap between innovative design and seamless functionality. My
                expertise spans across MongoDB, Express.js, React.js, and Node.js,
                allowing me to craft end-to-end solutions that not only meet but
                exceed expectations.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                Beyond coding, I'm an avid photographer who finds inspiration in
                capturing moments that tell compelling stories. This creative
                pursuit enhances my approach to web development, where I blend
                technical precision with aesthetic sensibility.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                As a tech enthusiast, I stay at the forefront of emerging
                technologies and industry trends. My commitment to continuous
                learning and attention to detail ensures that every project I
                undertake reflects the highest standards of quality and
                innovation.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

export default About;