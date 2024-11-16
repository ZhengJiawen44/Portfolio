import React from "react";
import IslandDash from "../components/IslandDash";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <div>
      <IslandDash />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
