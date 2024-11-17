import React from "react";
import Wrapper from "../assets/wrappers/IslandDash";
import { TbLanguageHiragana } from "react-icons/tb";
const TranslateDash = () => {
  return (
    <Wrapper>
      <div className="translate dashboard">
        <TbLanguageHiragana className="dash-items" />
      </div>
    </Wrapper>
  );
};
export default TranslateDash;
