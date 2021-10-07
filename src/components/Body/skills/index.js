import React, { useEffect } from "react";
import "./skills.scss";
import Separator from "../../common/separator";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() =>{
    Aos.init({duration: 2000});
  }, [])
  const data = SkillsData;
  return (
    <div data-aos="fade-up" className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
