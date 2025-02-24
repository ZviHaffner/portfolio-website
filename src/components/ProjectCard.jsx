import GalleryCarousel from "./GalleryCarousel";

const ProjectCard = ({ project, name }) => {
  return (
    <div className="w-11/12 md:w-2/3 mx-auto bg-blue-50 my-8 py-8 px-4 rounded-3xl shadow-lg text-green-900">
      <h1 className="my-8">{name}</h1>
      <div className="my-8">
        {project.gallery ? <GalleryCarousel gallery={project.gallery} /> : null}
        {project.video ? (
          <video
            src="/6026heroes.mp4"
            width="320"
            controls
            className="mx-auto my-8"
          />
        ) : null}
      </div>
      <h2>{project.subtitle}</h2>
      <br />
      <p>{project.desc}</p>
      <br />
      <h3 className="text-2xl font-semibold">Technologies Used</h3>
      <p>
        {project.technologies.map((tech) => {
          return <span key={tech}>{tech} </span>;
        })}
      </p>
      <br />
      {Object.keys(project.links).map((key) => {
        const link = project.links[key];
        return (
          <div key={link}>
            <p>{key}: </p>
            <a
              href={link}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              {link}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
