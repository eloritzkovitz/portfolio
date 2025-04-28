import { useState, useEffect } from "react";
import { FaList, FaTh } from "react-icons/fa";
import skillsData from "../data/skillsData";
import "../styles/About.css";

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedStates, setExpandedStates] = useState(
    skillsData.map(() => false)
  );
  const [isFlatView, setIsFlatView] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Variables for swipe detection
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

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
                  <span
                    key={`${skillCategory.category}-${skillIndex}`}
                    className="tech-tag"
                  >
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
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
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
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      const touchEnd = e.changedTouches[0].clientX;
      const swipeDistance = touchStartX - touchEnd;

      if (swipeDistance > 50) {
        // Swipe left
        handleNext();
      } else if (swipeDistance < -50) {
        // Swipe right
        handlePrev();
      }
    }

    // Reset touch start
    setTouchStartX(null);
  };

  // Update `isMobile` state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="about-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Intro Card */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
      </div>

      {isMobile ? (
        <div className="carousel-container">
          {/* Carousel Items */}
          <div
            className="carousel-items"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={`${card.title}-${index}`} className="carousel-card">
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
                      data-tooltip={
                        isFlatView
                          ? "Switch to Grouped View"
                          : "Switch to Flat View"
                      }
                    >
                      {isFlatView ? <FaList size={20} /> : <FaTh size={20} />}
                    </button>
                  )}
                </div>
                {card.content}
              </div>
            ))}
          </div>

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
      ) : (
        <div className="desktop-cards">
          {cards.map((card, index) => (
            <div
              key={`${card.title}-${index}`}
              className="bg-white shadow-md rounded-lg p-6 mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{card.title}</h2>
                {card.title === "Skills" && (
                  <button
                    className="toggle-view-btn"
                    onClick={() => setIsFlatView(!isFlatView)}
                    aria-label="Toggle View"
                    data-tooltip={
                      isFlatView
                        ? "Switch to Grouped View"
                        : "Switch to Flat View"
                    }
                  >
                    {isFlatView ? <FaList size={20} /> : <FaTh size={20} />}
                  </button>
                )}
              </div>
              {card.content}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default About;