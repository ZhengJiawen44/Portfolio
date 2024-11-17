import React from "react";
import Wrapper from "../assets/wrappers/AboutSection";
import Socials from "./Socials";
const About = () => {
  return (
    <Wrapper>
      <h1>Full Stack developer</h1>
      <h3>Zheng Jiawen</h3>
      <Socials />
      <div className="green-popup-grid">
        <div className="green-popup" />
        <div className="dark green-popup" />
      </div>

      <p className="indented">
        I’m a software developer fluent in design and programming. I have a
        knack for problem solving and clean design. When I am not online, I
        enjoy reading and creating assets in blender that I use for my other
        projects.
      </p>
    </Wrapper>
  );
};

export default About;
