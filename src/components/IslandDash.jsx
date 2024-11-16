import React from "react";
import Wrapper from "../assets/wrappers/IslandDash";
import { IconHome } from "@tabler/icons-react";
import { IconBriefcase2 } from "@tabler/icons-react";
import { IconTool } from "@tabler/icons-react";
import { IconNews } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import { IconLanguageHiragana } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const IslandDash = () => {
  return (
    <Wrapper>
      <div className="dashboard">
        <NavLink to={"/Blog"}>
          <IconHome stroke={1.5} className="dash-items" />
        </NavLink>

        <IconBriefcase2 stroke={1.5} className="dash-items" />
        <IconTool stroke={1.5} className="dash-items" />
        <IconNews stroke={1.5} className="dash-items" />
        <IconMail stroke={1.5} className="dash-items" />
      </div>

      <div className="translate dashboard">
        <IconLanguageHiragana stroke={1.5} className="dash-items" />
      </div>
    </Wrapper>
  );
};

export default IslandDash;
