import React from "react";
import GlassSection from "../components/GlassSection";
import CircleWithLabel from "../components/CircleWithLabel";

const Experience = () => {
  const containerClasses = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
  const rowClasses = "flex flex-wrap -mx-4";
  // UPDATED: Changed from "w-full lg:w-1/2 px-4" to "w-full px-4" for single column layout
  const columnClasses = "w-full px-4";

  // Custom classes to create the "timeline" look (resume-item & resume-title equivalents)
  const resumeTitleClasses =
    "text-2xl font-extrabold uppercase tracking-wider text-pink-800 border-b-4 border-pink-500 pb-2 mb-6";
  const resumeItemClasses =
    "relative pl-6 pb-8 border-l-2 border-pink-400 ml-20";
  const resumeDotClasses =
    "absolute left-[-11px] top-0 w-4 h-4 rounded-full bg-pink-100 border-2 border-pink-500 shadow-md";

  return (
    <div>
      <GlassSection title="experience." className="mr-5 w-full">
        <div className={containerClasses}>
          <div className={rowClasses}>
            <div
              className={columnClasses}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Professional Experience Section */}
              <h3 className={resumeTitleClasses}>INTERNSHIPS</h3>
              <CircleWithLabel
                className=""
                imageSrc="https://play-lh.googleusercontent.com/qu0ZQGjSXHUjqwZYxJ7fKw5NNymJJcYHW5KHjOYCMow2NWSbQtd-YkyX4Avs5hWuRtM"
                label="LexMeet - Legal Help Simplified | Pasig City"
              />

              {/* LexMeet Item */}
              <div className={resumeItemClasses}>
                <div className={resumeDotClasses}></div>
                <h4 className="text-lg font-bold mb-1 text-pink-800">
                  Front-End Developer Intern
                </h4>
                <h5 className="text-sm italic font-semibold text-pink-600 mb-1">
                  July 2024 - September 2024
                </h5>
                <ul className="list-disc ml-5 space-y-1 text-sm text-pink-700">
                  <li>
                    Developed over 10 foundational, reusable React components
                    using SCSS, applying principles of modular design to reduce
                    redundant project code by about 30% and improve development
                    speed for new features.
                  </li>
                  <li>
                    Executed the translation of 15+ Figma design mockups into
                    functional, pixel-accurate, and responsive web interfaces,
                    aiming for over 95% fidelity between the final code and the
                    original UI/UX design.
                  </li>
                  <li>
                    Applied a mobile-first development strategy across all
                    primary project pages, which helped boost mobile usability
                    scores by 40% during internal design review and testing
                    cycles.
                  </li>
                </ul>
              </div>

              <CircleWithLabel
                className=""
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuUGt1socUTT3pY6ZlBEwIWaSoDrmWAaZsQ&s"
                label="8box Solutions Inc. | Pasig City"
              />

              {/* 8Box Solutions Item */}
              <div className={resumeItemClasses}>
                <div className={resumeDotClasses}></div>
                <h4 className="text-lg font-bold mb-1 text-pink-800">
                  Front-End Developer Intern
                </h4>
                <h5 className="text-sm italic font-semibold text-pink-600 mb-1">
                  August 2023 - December 2023
                </h5>
                <ul className="list-disc ml-5 space-y-1 text-sm text-pink-700">
                  <li>
                    Coded and delivered 12+ responsive web interfaces using
                    React.js (or similar frameworks) and EJS, which contributed
                    to a measurable 25% increase in project delivery speed
                    across the team.
                  </li>
                  <li>
                    Led the front-end development of ERP modules using React.js,
                    EJS, SCSS, and JavaScript, building 12+ responsive and
                    scalable user interfaces tailored for enterprise use.
                  </li>
                  <li>
                    Actively collaborated with a cross-functional team of 6+
                    members (including UI/UX designers and product leads) to
                    prototype and implement design feedback, directly helping
                    the UI/UX team improve both the usability and aesthetic
                    quality of the final application.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </GlassSection>
    </div>
  );
};

export default Experience;
