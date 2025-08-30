import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData";

function Projects() {
  return (
    <section className="w-full max-w-screen mx-auto">
      {/* Project Cards */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            tech={project.tech}
            image={project.image}            
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
