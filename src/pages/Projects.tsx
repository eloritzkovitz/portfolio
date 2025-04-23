import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData";

function Projects() {
  return (
    <section className="p-8">
      {/* Intro Card */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          My Projects
        </h1>
      </div>      
      
      {/* Project Cards */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            languages={project.languages}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
