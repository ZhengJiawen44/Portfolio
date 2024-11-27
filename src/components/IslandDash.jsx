import Wrapper from "../assets/wrappers/IslandDash";
import TranslateDash from "./TranslateDash";
import { TbHome } from "react-icons/tb";
import { TbBriefcase } from "react-icons/tb";
import { TbTool } from "react-icons/tb";
import { TbNotebook } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import DashItems from "./DashItems";
import { forwardRef } from "react";

const IslandDash = forwardRef(({ isVertical }, ref) => {
  const isItemVertical = isVertical ? "dash-items vertical" : "dash-items ";
  return (
    <Wrapper>
      <div
        className={isVertical ? "dashboard vertical show" : "dashboard"}
        ref={ref}
      >
        <DashItems icon={<TbHome className={isItemVertical} />} label="Home" />
        <DashItems
          icon={<TbBriefcase className={isItemVertical} />}
          label="Project"
        />
        <DashItems
          icon={<TbTool className={isItemVertical} />}
          label="Tech I use"
        />
        <DashItems
          icon={<TbNotebook className={isItemVertical} />}
          label="Blogs"
        />
        <DashItems
          icon={<TbMail className={isItemVertical} />}
          label="Contact"
        />
      </div>
      <TranslateDash />
    </Wrapper>
  );
});

export default IslandDash;
