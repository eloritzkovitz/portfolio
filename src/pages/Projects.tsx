import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData";

function Projects() {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-2 sm:px-12 py-4 sm:py-10">
      {/* Intro Card */}
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
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
            tech={project.tech}
            image={project.image}           
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
