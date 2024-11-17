import React from "react";
import Wrapper from "../assets/wrappers/IslandDash";
import TranslateDash from "./TranslateDash";
import { TbHome } from "react-icons/tb";
import { TbBriefcase } from "react-icons/tb";
import { TbTool } from "react-icons/tb";
import { TbNotebook } from "react-icons/tb";
import { TbMail } from "react-icons/tb";

const IslandDash = () => {
  return (
    <Wrapper>
      <div className="dashboard">
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/#About");
          }}
        >
          <div className="dash-item-container">
            <TbHome className="dash-items" />
            <p className="label-container">Home</p>
          </div>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/#Projects");
          }}
        >
          <div className="dash-item-container">
            <TbBriefcase className="dash-items" />
            <p className="label-container">Projects</p>
          </div>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/#Tools");
          }}
        >
          <div className="dash-item-container">
            <TbTool className="dash-items" />
            <p className="label-container">tools I use</p>
          </div>
        </button>

        <button to={"/Blog"}>
          <div className="dash-item-container">
            <TbNotebook className="dash-items" />
            <p className="label-container">Blog</p>
          </div>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/#Contact");
          }}
        >
          <div className="dash-item-container">
            <TbMail className="dash-items" />
            <p className="label-container">Contact me!</p>
          </div>
        </button>
      </div>
      <TranslateDash />
    </Wrapper>
  );
};

export default IslandDash;
