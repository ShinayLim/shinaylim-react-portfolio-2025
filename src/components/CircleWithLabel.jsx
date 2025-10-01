import React from "react";

const CircleWithLabel = ({ imageSrc, label }) => {
  return (
    <div className="flex items-center -mt-5">
      <img
        className="w-20 h-auto rounded-full z-10"
        src={imageSrc}
        alt={label}
      />
      <div className="-ml-15">
        <div className="relative text-pink-900 bg-pink-400/60 w-full h-auto rounded-full shadow flex justify-center items-center">
          <span className="font-black ml-20 mr-10 mt-2 mb-2">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default CircleWithLabel;
