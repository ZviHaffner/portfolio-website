const ProjectsNav = ({ selectedProject, setSelectedProject, projects }) => {
  const projectsArr = Object.keys(projects);

  return (
    <nav>
      <ul className="flex justify-center items-center text-base">
        {projectsArr.map((project) => {
          const isSelected = project === selectedProject;

          return (
            <li
              className={`m-5 cursor-pointer ${
                isSelected
                  ? "bg-blue-800 p-2 rounded-sm font-semibold text-white shadow-lg shadow-blue-900/50"
                  : "blue_button"
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
