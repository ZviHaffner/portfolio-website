import { useState } from "react";
import ProjectsNav from "./ProjectsNav";
import ProjectCard from "./ProjectCard";
import projects from "../assets/projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("NC News BE");

  return (
    <div id="projects" className="bg-green-50 text-center text-xl">
      <h1 className="text-center m-5 text-blue-800">
        {"<"}Projects{"/>"}
      </h1>
      <ProjectsNav
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        projects={projects}
      />
      {Object.keys(projects).map((key) => {
        if (key === selectedProject) {
          const project = projects[key];
          return <ProjectCard project={project} name={key} key={project.id} />;
        }
      })}
    </div>
  );
};

export default Projects;
