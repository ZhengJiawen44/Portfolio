import React, { useRef } from "react";
import { useObserver } from "../utils/useObserver";
import Wrapper from "../assets/wrappers/IslandDash";
import TranslateDash from "./TranslateDash";
import { TbHome } from "react-icons/tb";
import { TbBriefcase } from "react-icons/tb";
import { TbTool } from "react-icons/tb";
import { TbNotebook } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import DashItems from "./DashItems";

const IslandDash = () => {
  const [dashboardRef, isVisible] = useObserver();
  console.log(isVisible);

  return (
    <Wrapper>
      <div className="dashboard" ref={dashboardRef}>
        <DashItems icon={<TbHome className="dash-items" />} label="Home" />
        <DashItems
          icon={<TbBriefcase className="dash-items" />}
          label="Project"
        />
        <DashItems
          icon={<TbTool className="dash-items" />}
          label="Tools I use"
        />
        <DashItems icon={<TbNotebook className="dash-items" />} label="Blogs" />
        <DashItems
          icon={<TbMail className="dash-items" />}
          label="Contact me!"
        />
      </div>
      <TranslateDash />
    </Wrapper>
  );
};

export default IslandDash;
