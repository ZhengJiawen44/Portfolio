import React, { useState } from "react";
import { TbLink } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { TbNews } from "react-icons/tb";

const ProjectCard = ({ title, desc, content, tags }) => {
  const handleLinkClick = (e) => {
    e.stopPropagation(); // This prevents the click from reaching the parent div
  };
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={showDetails ? "projectCard expand" : "projectCard"}
      onClick={() => setShowDetails(!showDetails)}
    >
      <div
        className={showDetails ? "card-container expand2" : "card-container"}
      >
        <div className="image"></div>
        <div className="description-container">
          <h2>{title}</h2>
          <p>{desc}</p>

          <div className="tag-container">
            {showDetails
              ? tags.map(({ tag, link }) => (
                  <a
                    className="tag"
                    key={tag}
                    href={link}
                    target="_blank"
                    onClick={handleLinkClick}
                  >
                    {tag === "Github" ? (
                      <TbBrandGithub className="logo" />
                    ) : tag === "Website" ? (
                      <TbLink className="logo" />
                    ) : (
                      <TbNews className="logo" />
                    )}

                    {tag}
                  </a>
                ))
              : ""}
          </div>
        </div>
      </div>
      {showDetails ? <p className="content">{content}</p> : ""}
    </div>
  );
};

export default ProjectCard;
