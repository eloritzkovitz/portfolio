import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData";

function Projects() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <p className="text-lg mb-8">
        Here are some of the projects I've worked on:
      </p>
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
