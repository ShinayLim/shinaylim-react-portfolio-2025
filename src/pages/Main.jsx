import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";

const Main = () => {
  return (
    <div className="content flex-1 overflow-auto p-10 text-pink-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/recent-projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default Main;
