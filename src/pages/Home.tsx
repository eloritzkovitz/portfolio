import GitHubOverview from "../components/github/GitHubOverview";
import TechStackSection from "../components/tech/TechStack";
import Banner from "../components/ui/Banner";

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