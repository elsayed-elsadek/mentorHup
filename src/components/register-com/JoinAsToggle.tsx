
import React from "react";
import type { JoinAs } from "../../types/auth";

interface Props {
  joinAs: JoinAs;
  setJoinAs: (v: JoinAs) => void;
}

export const JoinAsToggle: React.FC<Props> = ({ joinAs, setJoinAs }) => {
  const baseStyles =
    "w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[40px] sm:h-[45px] lg:h-[50px] rounded-xl text-[12px] font-medium transition-all duration-200 flex items-center justify-center font-Poppins";

  const activeStyles = "bg-primary text-white shadow-md";
  const inactiveStyles =
    "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200";

  return (
    <div
      className="
        flex flex-row
        justify-between
        items-center
        w-full max-w-[528px] mx-0
      "
    >
      
      <button
        type="button"
        aria-pressed={joinAs === "student"}
        onClick={() => setJoinAs("student")}
        className={`${baseStyles} ${
          joinAs === "student" ? activeStyles : inactiveStyles
        }`}
        style={{ marginLeft: "0px" }}
      >
        Student
      </button>

      
      <button
        type="button"
        aria-pressed={joinAs === "mentor"}
        onClick={() => setJoinAs("mentor")}
        className={`${baseStyles} ${
          joinAs === "mentor" ? activeStyles : inactiveStyles
        }`}
      >
        Mentor
      </button>
    </div>
  );
};

