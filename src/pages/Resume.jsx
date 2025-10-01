import React from "react";
import GlassSection from "../components/GlassSection";
import BrowserWindow from "../components/Browser";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  const tabs = [
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <div>
      <BrowserWindow
        tabs={tabs}
        children={(activeTab) => {
          switch (activeTab) {
            case "education":
              return (
                <p>
                  <Education />
                </p>
              );
            case "experience":
              return (
                <p>
                  <Experience />
                </p>
              );
            case "skills":
              return (
                <p>
                  <Skills />
                </p>
              );
            default:
              return <p>Select a tab</p>;
          }
        }}
      />
    </div>
  );
};

export default Resume;
