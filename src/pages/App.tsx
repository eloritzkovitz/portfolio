import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import ProjectPage from "./ProjectPage";
import GitHub from "./GitHub";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Router>
        <ScrollToTop />
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-50 shadow-md">
          <Navbar />
        </header>

        {/* Main Content Area */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
            <Route path="/github" element={<GitHub />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
