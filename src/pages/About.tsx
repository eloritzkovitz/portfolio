import { useState, useEffect } from "react";
import { FaList, FaTh } from "react-icons/fa"; // Import icons from react-icons
import skillsData from "../data/skillsData";
import "../styles/About.css";

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // State to pause auto-sliding
  const [expandedStates, setExpandedStates] = useState(
    skillsData.map(() => false) // Initialize all categories as collapsed
  );
  const [isFlatView, setIsFlatView] = useState(false); // Toggle between grouped and flat view

  const cards = [
    {
      title: "Introduction",
      content: (
        <div className="text-lg leading-relaxed">
          <p>
            Hi! My name is Elor. From the day I remember myself, I have always
            been fascinated by building and creating things with whatever I had
            in my hands. Time and curiosity have led me to explore the world of
            technology and programming, where I could bring together my dreams,
            ideas, and interests - and shape them into reality.
          </p>
          <p className="mt-4">
            I am very passionate about building modern, scalable, and
            user-friendly applications, as well as learning and adapting to new
            technologies and frameworks. I am always eager to learn and grow,
            and I believe that the best way to do that is by constantly
            challenging ourselves.
          </p>
          <p className="mt-4">
            Currently, I am a third-year computer science student, exploring the
            world of full-stack development, learning and experimenting with
            various technologies and frameworks, mainly React and Node.js.
          </p>
        </div>
      ),
    },
    {
      title: "Skills",
      content: (
        <div className="skills-list">
          {/* Flat View */}
          {isFlatView ? (
            <div className="flex flex-wrap gap-2">
              {skillsData.flatMap((skillCategory) =>
                skillCategory.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="tech-tag">
                    {skill}
                  </span>
                ))
              )}
            </div>
          ) : (
            /* Grouped View */
            skillsData.map((skillCategory, categoryIndex) => {
              const isExpanded = expandedStates[categoryIndex];

              return (
                <div key={categoryIndex} className="mb-4">
                  {/* Category Header with Expand/Collapse Button */}
                  <div
                    className="flex justify-between items-center cursor-pointer bg-gray-100 p-3 rounded-md shadow-md"
                    onClick={() => {
                      const newStates = [...expandedStates];
                      newStates[categoryIndex] = !newStates[categoryIndex];
                      setExpandedStates(newStates);
                    }}
                  >
                    <h3 className="text-xl font-semibold">
                      {skillCategory.category}
                    </h3>
                    <button className="text-lg font-bold">
                      {isExpanded ? "-" : "+"}
                    </button>
                  </div>

                  {/* Skills as Tags (Visible Only When Expanded) */}
                  {isExpanded && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skillCategory.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="tech-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      ),
    },
    {
      title: "Hobbies & Interests",
      content: (
        <div className="text-lg leading-relaxed">
          <p>
            When I'm not coding or studying, I try my best to devote my free
            time to my long list of hobbies and interests. For example, I really
            like integrating my love for drawing and graphic design with my
            projects.
          </p>
          <p className="mt-4">
            I also enjoy traveling and exploring new places, photographing
            architecture, nature, and scenery, as well as spending time with my
            family.
          </p>
        </div>
      ),
    },
  ];

  // Handle the next card
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Handle the previous card
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  // Handle the indicator click
  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Reset expanded states when the card changes
  useEffect(() => {
    setExpandedStates(skillsData.map(() => false));
  }, [currentIndex]);

  // Automatic scrolling
  useEffect(() => {
    if (isPaused) return; // Pause auto-sliding when `isPaused` is true

    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Detect screen size to hide arrows on mobile
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Add keyboard navigation for the right arrow key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      className="about-section"
      onMouseEnter={() => setIsPaused(true)} // Pause sliding on hover
      onMouseLeave={() => setIsPaused(false)} // Resume sliding on mouse leave
    >
      {/* Intro Card */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
      </div>

      <div className="carousel-container">
        {/* Carousel Items */}
        <div
          className="carousel-items"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="carousel-card">
              {/* Title with Toggle Button */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="carousel-card-title text-2xl font-bold">
                  {card.title}
                </h2>
                {card.title === "Skills" && (
                  <button
                    className="toggle-view-btn"
                    onClick={() => setIsFlatView(!isFlatView)}
                    aria-label="Toggle View"
                  >
                    {isFlatView ? <FaList size={20} /> : <FaTh size={20} />}
                  </button>
                )}
              </div>
              {card.content}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {!isMobile && (
          <>
            <button
              onClick={handlePrev}
              className="carousel-button carousel-button-left"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="carousel-button carousel-button-right"
            >
              &#8594;
            </button>
          </>
        )}

        {/* Indicators */}
        <div className="carousel-indicators">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`carousel-indicator ${
                currentIndex === index ? "active" : ""
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;