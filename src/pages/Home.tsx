import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg mb-6">
        Hello! I'm Elor Itzkovitz, an aspiring software developer with a passion
        for building modern, scalable, and user-friendly applications. Take a look at my
        projects to see how I bring my ideas to life, learn more about me, or check
        out my contact information!
      </p>
      <Link
        to="/projects"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Check out my projects
      </Link>
    </section>
  );
}

export default Home;