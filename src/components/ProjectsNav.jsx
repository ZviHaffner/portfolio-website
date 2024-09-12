const ProjectsNav = ({ selectedProject, setSelectedProject, projects }) => {
  const projectsArr = Object.keys(projects);

  return (
    <nav>
      <ul className="flex justify-center">
        {projectsArr.map((project) => {
          const isSelected = project === selectedProject;

          return (
            <li
              className={`border-2 rounded-md p-2 m-5 cursor-pointer ${
                isSelected
                  ? "border-green-700 bg-green-100"
                  : "border-blue-500 bg-blue-50 hover:bg-green-50"
              }`}
              onClick={() => setSelectedProject(project)}
              key={project}
            >
              {project}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ProjectsNav;
