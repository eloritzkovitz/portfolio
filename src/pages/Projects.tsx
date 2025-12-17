import { useState } from "react";
import SearchBar from "../components/layout/SearchBar";
import ProjectCard from "../components/projects/ProjectCard";
import { useProjectSearch } from "../hooks/useProjectSearch";

function Projects() {
  const [search, setSearch] = useState("");
  const filteredProjects = useProjectSearch(search);

  return (
    <section className="w-full max-w-screen-xl mx-auto px-2 sm:px-12 py-4 sm:py-10">
      <title>Projects | Elor Itzkovitz</title>

      {/* Search Bar */}
      <div className="flex sm:flex-row items-center gap-3 mb-8">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search projects by name or tech..."
        />
      </div>

      {/* Project Cards */}
      <div className="space-y-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 py-12">
            No projects found.
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))
        )}
      </div>
    </section>
  );
}

export default Projects;
