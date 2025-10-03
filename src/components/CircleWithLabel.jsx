import React from "react";

const CircleWithLabel = ({ imageSrc, label }) => {
  return (
    <div className="flex items-center -mt-5">
      <img
        className="w-12 sm:w-16 md:w-20 h-auto rounded-full z-10"
        src={imageSrc}
        alt={label}
      />
      <div className="-ml-15">
        <div className="relative text-pink-900 bg-pink-400/60 rounded-full shadow flex items-center">
          <span
            className="
              font-black ml-20 mr-10 mt-2 mb-2 
              text-xs sm:text-sm md:text-base lg:text-lg

              /* MOBILE: Scroll if text is long */
              max-w-[150px] sm:max-w-[200px] 
              overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-transparent

              /* DESKTOP: Full width, no scroll */
              md:max-w-none md:overflow-visible md:whitespace-normal md:scrollbar-none
            "
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CircleWithLabel;
