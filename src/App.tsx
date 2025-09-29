import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import DirectionProvider from "./components/layout/DirectionProvider";
import Navbar from "./components/layout/navigation/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <DirectionProvider>
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
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer>
            <Footer />
          </footer>
        </Router>
      </div>
    </DirectionProvider>
  );
}

export default App;
