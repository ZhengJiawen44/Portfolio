import React from "react";
import { TbBrandBluesky } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
const Socials = () => {
  return (
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
  );
};

export default Socials;
