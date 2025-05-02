import React from "react";
import TrueFocus from "./Animations/TrueFocus";
import AnimatedContent from "./Animations/AnimatedContent";
import CountUp from './Animations/CountUp'

const Skill = () => {
  const skills = [
    { name: "Full Stack Development", percentage: 85 },
    { name: "Photography", percentage: 75 },
    { name: "Tech Knowledge", percentage: 95 },
  ];

  return (
    <div id="skills" className="bg-black text-white py-10 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-20">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <TrueFocus
          sentence="My Skills"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
          className="text-3xl sm:text-4xl lg:text-5xl"
        />
      </div>

      <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        {/* Description */}
        <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 70, friction: 50 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl text-center leading-relaxed">
          Passionate about creating seamless web experiences with MERN stack,
          capturing life's moments through photography, and staying ahead with
          the latest tech trends. Here's a glimpse of my expertise across
          different domains.
        </p>
            </div>
          </AnimatedContent>
        

        {/* Skills and Stats Container */}
        <div className="w-full max-w-3xl space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Skills Section */}
          <div className="space-y-6 sm:space-y-8">
            {skills.map((skill, index) => (
              <AnimatedContent
                key={index}
                distance={100}
                direction="horizontal"
                reverse={true}
                config={{ tension: 70, friction: 50 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1}
                threshold={0.2}
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg sm:text-xl lg:text-2xl font-semibold">{skill.name}</span>
                    <span className="text-base sm:text-lg lg:text-xl">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 sm:h-3 lg:h-4 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>

          {/* Stats Section */}
<div className="w-full border-t border-gray-700 pt-8 sm:pt-12 lg:pt-16">
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
              <div className="flex flex-row items-center justify-between px-4">
    {/* Clients */}
    <div className="flex flex-col items-center">
      <CountUp
        from={0}
        to={10}
        separator=","
        direction="up"
        duration={1}
        className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
      />
      <p className="text-xs sm:text-base lg:text-lg text-gray-300 mt-2"> Trusted Clients</p>
    </div>

    {/* Vertical Divider */}
    <div className="h-12 w-px bg-gray-700"></div>

    {/* Experience */}
    <div className="flex flex-col items-center">
      <CountUp
        from={0}
        to={6}
        separator=","
        direction="up"
        duration={1}
        className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
      />
      <p className="text-xs sm:text-base lg:text-lg text-gray-300 mt-2">Years of experience</p>
    </div>

    {/* Vertical Divider */}
    <div className="h-12 w-px bg-gray-700"></div>

    {/* Support */}
    <div className="flex flex-col items-center">
      <CountUp
        from={0}
        to={24}
        separator=","
        direction="up"
        duration={1}
        className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
      />
      <p className="text-xs sm:text-base lg:text-lg text-gray-300 mt-2">Hour Support</p>
    </div>
  </div>
            </div>
          </AnimatedContent>
  
</div>
        </div>
      </div>
    </div>
  );
};

export default Skill;