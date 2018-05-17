import React from "react";
import { Parallax } from "react-parallax";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills">
      <Parallax
        blur={{ min: 0, max: 3 }}
        bgImage={require("../../images/skills.png")}
        bgImageAlt="skills image"
        strength={200}>
        <div style={{ height: "100vh" }} className="skills-items">
          <div className="vertical-center skills-box">
            <h3>HTML5 | CSS3 | REACT | JavaScript | D3 | jQuery</h3>
            <h1 className="skills-title">Skills</h1>
            <h3>Node.js | Express | Mongo | Git</h3>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Skills;
