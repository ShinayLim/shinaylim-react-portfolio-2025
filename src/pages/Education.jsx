import React from "react";
import GlassSection from "../components/GlassSection";
import CircleWithLabel from "../components/CircleWithLabel";

const Education = () => {
  return (
    <div>
      <GlassSection title="education." className="mr-5 w-full">
        <CircleWithLabel
          className=""
          imageSrc="https://www.pup.edu.ph/resources/images/logo200.png"
          label="Polytechnic University of the Philippines | Mabini Campus"
        />
        <div className="bullet flex  items-center">
          <div className="items">
            <div className="item-1 flex items-center ml-20 gap-2">
              <div className="name flex flex-col leading-tight">
                <p>
                  - Bachelor of Science in Computer Engineering with
                  Specialization in System Development
                </p>
                <span> - DOST-SEI Scholar</span>
                <span> - Class of 2025</span>
                <span> - President's Lister </span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <CircleWithLabel
          className=""
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDl0sOCDUru2JJniC6yedtX0CwBewa7tXyFg&s"
          label="Antipolo City National Science and Technology High School"
        />
        <div className="bullet flex  items-center">
          <div className="items">
            <div className="item-1 flex items-center ml-20 gap-2">
              <div className="name flex flex-col leading-tight">
                <p>
                  - Science, Technology, Engineering, and Mathematics (STEM)
                </p>
                <p>
                  - Photojournalist & Copy Reader of Ang Tipolenyo publication{" "}
                </p>

                <span> - Class of 2021 </span>
                <span> - With High Honors </span>
              </div>
            </div>
          </div>
        </div>
      </GlassSection>
    </div>
  );
};

export default Education;
