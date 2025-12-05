
import React from "react";

interface Props {
  loading: boolean;
  label: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

export const SubmitButton: React.FC<Props> = ({
  loading,
  label,
  type = "submit",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        flex items-center justify-center
        w-full              
        sm:w-[360px]           
        md:w-[420px]           
        lg:w-[480px]           
        xl:w-[531px]          
        h-[55px]
        rounded-xl
        gap-2
        px-4 sm:px-8 lg:px-12
        bg-[linear-gradient(90deg,rgba(21,77,113,1)_18%,rgba(51,161,224,1)_100%)]
        text-white
        font-CTA-button
        transition-all duration-200
        hover:scale-[1.02]
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      <span className="flex items-center gap-2">
        {label}
        {loading && (
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
      </span>
    </button>
  );
};

