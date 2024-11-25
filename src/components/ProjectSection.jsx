import Wrapper from "../assets/wrappers/ProjectSection";
import ProjectCard from "./ProjectCard";
import { data } from "../utils/projectData";
const ProjectSection = () => {
  return (
    <Wrapper>
      <h1>Projects</h1>
      {data.map(({ title, desc, content, tags }) => {
        return (
          <ProjectCard
            key={title}
            title={title}
            desc={desc}
            content={content}
            tags={tags}
          />
        );
      })}
    </Wrapper>
  );
};

export default ProjectSection;
