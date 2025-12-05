
import React, { useReducer } from "react";
import vector from "../../assets/nextarrow.svg";

interface Props {
  className?: string;
}

export const NextButton: React.FC<Props> = ({ className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: "default",
  });

  return (
    <div
      className={`flex rounded-xl relative cursor-pointer justify-center items-center
        w-full max-w-[226px] h-[60px] md:h-[78px] 
        ${
          state.property1 === "variant-2"
            ? "border border-[#1c6ea4] bg-white gap-2 md:gap-4"
            : "bg-[#1c6ea4] gap-2 md:gap-[13px]"
        } 
        mx-auto
        ${className}`}
      onMouseEnter={() => dispatch("mouse_enter")}
      onMouseLeave={() => dispatch("mouse_leave")}
    >
    
      <div
        className={`text-[16px] sm:text-[18px] md:text-[32px] 
            tracking-[1.5px] sm:tracking-[2px] md:tracking-[3.2px]
            ${
              state.property1 === "default"
                ? "font-bold text-white"
                : "font-semibold text-[#1c6ea4]"
            }`}
      >
        Next
      </div>

    
      <img
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 ml-1 md:ml-2"
        src={vector}
        alt="Vector"
      />
    </div>
  );
};

interface State {
  property1: "default" | "variant-2";
}

type Action = "mouse_enter" | "mouse_leave";

function reducer(state: State, action: Action): State {
  switch (action) {
    case "mouse_enter":
      return { ...state, property1: "variant-2" };
    case "mouse_leave":
      return { ...state, property1: "default" };
    default:
      return state;
  }
}
