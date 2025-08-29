import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import projects from "../data/projectsData";

function Home() {
  // Featured projects
  const featuredProjects = projects.filter(
    (p) => p.name === "SnapChef" || p.name === "Voltrico"
  );

  return (
    <>
      {/* Hero Section */}
      <Banner />

      {/* Featured Projects */}
      <section className="w-full max-w-screen mx-auto px-2 sm:px-12 py-4 sm:py-10">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          {featuredProjects.map((project) => (
            <Link
              key={project.name}
              to={`/projects/${project.name.toLowerCase()}`}
              className="group flex flex-col sm:flex-row items-center w-full bg-white rounded-2xl shadow transition-all duration-200 p-6"
              aria-label={`View ${project.name} project`}
              style={{ minWidth: 0 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full sm:w-1/3 h-[400px] sm:h-[400px] rounded-xl mb-4 sm:mb-0 sm:mr-8 object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 transition-colors text-center sm:text-left w-full">
                {project.name}
              </h1>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/projects"
            className="text-teal-500 hover:text-teal-700 font-semibold text-xl"
          >
            View all projects &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
