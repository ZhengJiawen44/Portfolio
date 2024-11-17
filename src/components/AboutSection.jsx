import React from "react";
import { TbBrandBluesky } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import Wrapper from "../assets/wrappers/AboutSection";
const About = () => {
  return (
    <Wrapper>
      <div className="left">
        <h1>Full Stack developer</h1>
        <h3>Zheng Jiawen</h3>

        <div className="socials container">
          <a href="/">
            <TbBrandBluesky className="logo" />
          </a>
          <a href="/">
            <TbBrandGithub className="logo" />
          </a>
          <a href="/">
            <TbMail className="logo" />
          </a>
        </div>
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
      </div>
    </Wrapper>
  );
};

export default About;
