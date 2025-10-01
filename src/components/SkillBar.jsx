import React from "react";

const SkillBar = ({ icon, name, level, color }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-sm font-medium">{level}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
