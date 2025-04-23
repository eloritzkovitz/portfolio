import { useState } from "react";
import skillsData from "../data/skillsData";
import "../styles/About.css";

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Introduction",
      content: (
        <>
          <p className="text-lg">
            Hi! My name is Elor. From the day I remember myself, I have always
            been fascinated by building and creating things with whatever I had
            in my hands. Time and curiosity have led me to explore the world of
            technology and programming, where I could bring together my dreams,
            ideas, and interests - and shape them into reality.
          </p>
          <p className="text-lg mt-4">
            I am very passionate about building modern, scalable, and
            user-friendly applications, as well as learning and adapting to new
            technologies and frameworks. I am always eager to learn and grow,
            and I believe that the best way to do that is by constantly
            challenging ourselves.
          </p>
          <p className="text-lg mt-4">
            Currently, I am a third-year computer science student, exploring the
            world of full-stack development, learning and experimenting with
            various technologies and frameworks, mainly React and Node.js.
          </p>
        </>
      ),
    },
    {
      title: "Skills",
      content: (
        <ul className="list-disc list-inside space-y-2 text-lg">
          {skillsData.map((skill, index) => (
            <li key={index}>
              <strong>{skill.category}:</strong> {skill.skills}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Hobbies & Interests",
      content: (
        <p className="text-lg">
          When I'm not coding or studying, I try my best to devote my free time to my long list of hobbies and interests.
          For example, I really like integrating my love for drawing and graphic design with my projects.
          I also enjoy traveling and exploring new places, photographing architecture, nature, and scenery,
          as well as spending time with my family.
        </p>
      ),
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="about-section">
      <h1 className="about-title">About Me</h1>

      <div className="carousel-container">
        {/* Carousel Items */}
        <div
          className="carousel-items"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="carousel-card">
              <h2 className="carousel-card-title">{card.title}</h2>
              {card.content}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
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