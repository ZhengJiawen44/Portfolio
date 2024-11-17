import React from "react";
import IslandDash from "../components/IslandDash";
import Wrapper from "../assets/wrappers/HomeLayout";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <Wrapper>
      <IslandDash />
      <div className="page">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default HomeLayout;
