import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import ProjectPage from "./ProjectPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100 text-gray-900">
      <Router>
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-50 bg-gray-800 text-white shadow-md w-full">
          <Navbar />
        </header>

        {/* Main Content Area */}
        <main className="flex-grow w-full">          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 w-full">
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
