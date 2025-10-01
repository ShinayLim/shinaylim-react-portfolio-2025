import React from "react";
import GlassSection from "../components/GlassSection";
import ProjectCard from "../components/ProjectCard";
import { BiPrinter } from "react-icons/bi";
import BrowserWindow from "../components/Browser";
import Applications from "./Applications";
import UserDesign from "./UserDesign";

const Projects = () => {
  const tabs = [
    { id: "applications", label: "Applications" },
    { id: "ui", label: "Designs" },
  ];

  return (
    <div>
      <BrowserWindow
        tabs={tabs}
        children={(activeTab) => {
          switch (activeTab) {
            case "applications":
              return (
                <p>
                  <Applications />
                </p>
              );
            case "ui":
              return (
                <p>
                  <UserDesign />
                </p>
              );
            case "design":
              return <p>gdfgdfg</p>;
            default:
              return <p>Select a tab</p>;
          }
        }}
      />
    </div>
  );
};

export default Projects;
