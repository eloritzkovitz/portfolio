import Banner from "../components/Banner";
import GitHubStats from "../components/GitHubStats";
import TechStackSection from "../components/TechStack";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <Banner />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* GitHub Stats Section */}
      <GitHubStats />      
    </div>
  );
}

export default Home;
