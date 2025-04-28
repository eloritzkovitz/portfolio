import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projectsData";

const ProjectPage: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Fetch project details based on projectId
  const project = projects.find(
    (proj) => proj.name.toLowerCase().replace(/\s+/g, "-") === projectId
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      {/* Back to Projects Button */}
      <button
        onClick={() => navigate("/projects")}
        className="mb-8 text-black text-lg font-semibold rounded-lg"
      >
        ← Back to Projects
      </button>

      {/* Project Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center gap-6">
          <img
            src={project.image}
            alt={project.name}
            className="rounded-lg w-20 h-20 object-cover"
          />
          <h1 className="text-4xl font-bold">{project.name}</h1>
        </div>
      </div>

      {/* Details */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">

        {/* Description */}
        <h2 className="text-3xl font-semibold mb-6">Description</h2>
        <p className="text-xl text-gray-700 mb-6">{project.description}</p> 

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* My Involvement */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">My Involvement</h2>
          <ul className="list-disc list-inside text-xl text-gray-700">
            {(project.involvement ?? []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Screenshots */}
        {project.screenshots && (
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="rounded-lg object-cover w-full"
                />
              ))}
            </div>
          </div>
        )}

        {/* GitHub Links */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">GitHub Links</h2>
          <ul className="list-disc list-inside text-xl text-gray-700">
            {Array.isArray(project.links) ? (
              project.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:text-teal-700"
                  >
                    {link}
                  </a>
                </li>
              ))
            ) : (
              <li>
                <a
                  href={project.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-700"
                >
                  {project.links}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;