import React from "react";

// components/GlassSection.jsx
export default function GlassSection({ title, children, className = "" }) {
  return (
    <div className={` ${className}`}>
      {/* Title */}
      <div className="font-derian relative text-5xl z-10">{title}</div>

      {/* Content Box */}
      <div className="font-quadria info p-5 pt-15 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-lg w-full text-sm z-0 -mt-7 pb-10">
        {children}
      </div>
    </div>
  );
}
