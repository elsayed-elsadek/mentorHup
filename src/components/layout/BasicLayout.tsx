import React from "react";
import ImageWithOverlay from "../common/ImageWithOverlay";
import logo from "../../assets/edunestlogo.png";

interface Props {
  children: React.ReactNode;
}

export const BasicLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-white relative">
      {/* LEFT SIDE */}
      <div
        className="
          w-full md:w-1/2
          flex flex-col
          bg-white shadow-lg
          relative
          px-4 md:px-10 lg:px-14   /* padding على الجوانب فقط */
          pt-0                     /* مفيش padding فوق */
          pb-2                     /* padding تحت */
          rounded-none md:rounded-r-[50px]
        "
      >
        <div className="w-full flex flex-col relative ml-0">
       {/* logo */}
          <div className="absolute top-0 left-0">
            <img
              src={logo}
              alt="Logo"
              className="w-28 h-28 md:w-40 md:h-40 object-contain"
            />
          </div>

       
          <div className="mt-20 md:mt-28 w-full">{children}</div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex w-full md:w-1/2">
        <ImageWithOverlay />
      </div>
    </div>
  );
};
