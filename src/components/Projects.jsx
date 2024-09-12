import { useState } from "react";
import ProjectsNav from "./ProjectsNav";
import ProjectCard from "./ProjectCard";
import projects from "../assets/projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("NC News BE");

  return (
    <div>
      <ProjectsNav selectedProject={selectedProject} setSelectedProject={setSelectedProject} projects={projects} />
      {Object.keys(projects).map((key) => {
        if (key === selectedProject) {
          const project = projects[key];
          return <ProjectCard project={project} name={key} key={key} />;
        }
      })}
    </div>
  );
};

export default Projects;
