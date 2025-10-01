import React from "react";

const SkillItem = ({ icon, label }) => {
  return (
    <div className="skill-1 flex items-center gap-2">
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default SkillItem;
