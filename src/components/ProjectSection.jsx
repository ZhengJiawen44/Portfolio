import React from "react";
import Wrapper from "../assets/wrappers/ProjectSection";
const ProjectSection = () => {
  return (
    <Wrapper>
      <h1>Projects</h1>
      <div className="card">
        {/* <div className="image card"></div> */}

        <h2>Netlify</h2>
        <p>
          Sentiment analyzer is a website that can analyze more than 10, 000
          YouTube comments.
        </p>
      </div>

      <div className="card">
        {/* <div className="image card"></div> */}

        <h2>Netlify</h2>
        <p>
          Sentiment analyzer is a website that can analyze more than 10, 000
          YouTube comments.
        </p>
      </div>
    </Wrapper>
  );
};

export default ProjectSection;
