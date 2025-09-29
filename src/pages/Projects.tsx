import ProjectCard from "../components/projects/ProjectCard";
import projects from "../data/projectsData";

function Projects() {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-2 sm:px-12 py-4 sm:py-10">
      <title>Projects | Elor Itzkovitz</title>
      
      {/* Project Cards */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;