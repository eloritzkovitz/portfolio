import Banner from "../components/Banner";
import GitHubOverview from "../components/github/GitHubOverview";
import TechStackSection from "../components/TechStack";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <Banner />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* GitHub Overview Section */}
      <GitHubOverview />      
    </div>
  );
}

export default Home;
