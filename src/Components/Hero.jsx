import React from "react";
import BlurText from "./Animations/BlurText";
import main from "../assets/Main_photo.png";
import FadeContent from "./Animations/FadeContent";
import AnimatedContent from "./Animations/AnimatedContent";
import SplashCursor from "./Animations/SplashCursor";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div
      id="home"
      className="bg-black text-white min-h-screen px-4 sm:px-8 lg:px-20 pt-16 sm:pt-24 lg:pt-32 relative flex flex-col"
    >
      <div className="fixed inset-0 z-0">
        <SplashCursor />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 flex justify-end items-center pr-4 sm:pr-8 lg:pr-20">
        <FadeContent
          blur={true}
          duration={2000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="relative">
            <img
              src={main}
              alt="profile"
              className="rounded-[30%_70%_70%_30%/30%_30%_70%_70%] w-[280px] h-[350px] sm:w-[400px] sm:h-[500px] lg:w-[600px] lg:h-[700px] object-cover"
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"></div>
          </div>
        </FadeContent>
      </div>

      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        {/* Text Content - At the top for all screen sizes */}
        <div className="relative z-10 pt-8 sm:pt-12 lg:pt-20 pl-4 sm:pl-8 lg:pl-20">
          <div>
            <BlurText
              text="Im "
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl sm:text-6xl lg:text-9xl mb-4 sm:mb-6 lg:mb-8 font-bold"
            />
            <BlurText
              text="Midhun Mohan!"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl sm:text-6xl lg:text-9xl mb-4 sm:mb-6 lg:mb-8 font-bold"
            />
            <BlurText
              text="Full Stack Developer, Photographer, and a tech enthusiast."
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-xl sm:text-3xl lg:text-5xl mb-2 sm:mb-3 lg:mb-4 font-bold"
            />
          </div>
        </div>

        {/* Flex spacer to push content to bottom on mobile */}
        <div className="flex mt-96 sm:hidden"></div>

        {/* Desktop positioning - only visible on sm and above */}
        <div className="hidden sm:block sm:mt-6">
          {/* Scroll Down Text */}
          <div className="sm:text-left sm:pl-20 sm:mb-6">
            <BlurText
              text="To know more scroll down"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-lg sm:text-xl text-gray-400"
            />
          </div>

          {/* Buttons Container */}
          <div className="sm:pl-20 sm:mb-16 flex space-x-6">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                config={{ tension: 50, friction: 25 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.1}
              >
                <div className="flex gap-5">
                  {/* Connect Button with right arrow icon */}
                  <a href="#contact">
                    <button className="bg-white text-black py-3 px-5 rounded flex items-center space-x-4 hover:bg-gray-100 transition-all duration-300 hover:scale-105 justify-center transform">
                      <span className="font-medium">Contact Me</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </a>

                  {/* Resume Button with right arrow icon */}
                  <a
                    href="https://drive.google.com/file/d/1MzrQEyglHWvNpl-qzCcBk9iKuJqFFOWm/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-black py-3 px-5 rounded flex items-center space-x-4 hover:bg-gray-100 transition-all duration-300 hover:scale-105 justify-center transform">
                      <span className="font-medium"> My Resume</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </AnimatedContent>
            </FadeContent>
          </div>
        </div>

        {/* Mobile positioning - only visible on xs screens */}
        <div className="sm:hidden mb-32">
          {/* Scroll Down Text */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <BlurText
              text="To know more scroll down"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-lg sm:text-xl text-gray-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          {/* Buttons Container */}
          <div className="flex justify-center space-x-4 px-4">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                config={{ tension: 50, friction: 25 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.1}
              >
                <div className="flex gap-5">
                  {/* Connect Button with right arrow icon */}
                  <a href="#contact">
                    <button className="bg-white text-black py-3 px-4 rounded flex items-center space-x-2 hover:bg-gray-100 transition-colors flex-1 justify-center">
                      <span className="font-medium">Contact Me</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </a>

                  {/* Resume Button with right arrow icon */}
                  <a
                    href="https://drive.google.com/file/d/1MzrQEyglHWvNpl-qzCcBk9iKuJqFFOWm/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-black py-3 px-4 rounded flex items-center space-x-2 hover:bg-gray-100 transition-colors flex-1 justify-center">
                      <span className="font-medium">My Resume</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </AnimatedContent>
            </FadeContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
