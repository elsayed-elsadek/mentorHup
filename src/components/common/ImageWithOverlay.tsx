import React from "react";
import loginImage from "../../assets/Frame 67.png";
import RocketIcon from "../../assets/arrowimagewithoverlay.svg"
const ImageWithOverlay: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gray-100">
     {/* image */}
      <img
        src={loginImage}
        alt="Register/Login Background"
        className="w-full h-full object-cover"
      />

    {/* overlay text */}
      <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10">
        <div className="flex flex-row items-start gap-4 p-4 md:p-6 bg-white rounded-md shadow-md max-w-[90%] md:max-w-[600px]">
          <p className="text-black text-sm md:text-base leading-relaxed font-medium max-w-[560px]">
            Here, you can join mentorship programs, collaborate on projects, and
            track your progress — all in one distraction-free platform.
            <br />
            <br />
            Start your journey today, and let your
            <br />
            <span className="flex justify-between items-center w-full">
              learning take flight!
              <img src={RocketIcon} alt="Rocket" className="w-10 h-10 ml-2" />
            </span>
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
