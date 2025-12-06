
import React from "react";
import vector from "../../assets/success.svg";

export const Frame: React.FC = () => {
  return (
    <div
      className="flex flex-col w-full max-w-lg sm:max-w-xl md:max-w-[633px] 
      h-auto items-center gap-6 sm:gap-8 md:gap-[30px] px-4 sm:px-6 md:px-0 py-5 relative bg-white rounded-xl border border-solid border-black"
    >
      {/* Heading */}
      <div className="flex flex-col w-full max-w-[604px] items-center gap-1 sm:gap-2">
        <p className="text-[20px] sm:text-[28px] md:text-[32px] font-semibold text-black tracking-[1px] sm:tracking-[1.4px] md:tracking-[1.6px] text-center">
          Your account has been created
        </p>
        <p className="text-[20px] sm:text-[28px] md:text-[32px] font-semibold text-black tracking-[1px] sm:tracking-[1.4px] md:tracking-[1.6px] text-center">
          successfully
        </p>
      </div>

      {/* Vector Image */}
      <img
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px]"
        src={vector}
        alt="Vector"
      />

      {/* Subtext */}
      <div className="flex flex-col w-full max-w-[604px] items-center gap-1 sm:gap-2">
        <p className="text-[16px] sm:text-[20px] md:text-[24px] font-normal text-black tracking-[1px] sm:tracking-[1.1px] md:tracking-[1.2px] text-center">
          You are now ready to start guiding
        </p>
        <p className="w-full max-w-[496px] text-[16px] sm:text-[20px] md:text-[24px] font-normal text-center">
          <span className="text-black">
            students and sharing your expertise on{" "}
          </span>
          <span className="font-semibold text-[#154d71]">EduNest</span>
        </p>
      </div>
    </div>
  );
};
