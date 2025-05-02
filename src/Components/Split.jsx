import React from "react";
import ScrollVelocity from "./Animations/ScrollVelocity";

const Split = () => {
  return (
    <div className="bg-black text-white py-20">
      <ScrollVelocity texts={["About Me", "Me About"]} className="" />
    </div>
  );
};

export default Split;
