import GalleryCarousel from "./GalleryCarousel";

const ProjectCard = ({ project, name }) => {
  return (
    <div className="border-2 border-blue-500 bg-blue-50 rounded-md m-5">
      <h1>{name}</h1>
      {project.gallery ? <GalleryCarousel gallery={project.gallery} /> : null}
      {project.video ? (
        <video src="/6026heroes.mp4" width="320" controls className="mx-auto" />
      ) : null}
      <h2>{project.subtitle}</h2>
      <br />
      <p>{project.desc}</p>
      <br />
      <div>
        Technologies Used:{" "}
        {project.technologies.map((tech) => {
          return <p key={tech}>{tech}</p>;
        })}
      </div>
      <br />
      {Object.keys(project.links).map((key) => {
        const link = project.links[key];
        return (
          <p key={link}>
            {key}:{" "}
            <a href={link} target="_blank" className="hover:text-blue-600">
              {link}
            </a>
          </p>
        );
      })}
    </div>
  );
};

export default ProjectCard;
