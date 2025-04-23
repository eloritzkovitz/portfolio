function About() {
    return (
      <section className="p-8">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
  
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg">
            Hi! My name is Elor. From the day I remember myself, I have always been fascinated by building and creating things with whatever I had in my hands. Time and curiosity have led me to explore the world of technology and programming, where I could bring together my dreams, ideas and interests - and shape them into reality. 
            I am very passionate about building modern, scalable, and user-friendly applications, as well as learning and adapting to new technologies and frameworks. I am always eager to learn and grow, and I believe that the best way to do that is by constantly challenging ourselves.
          </p>
          <p className="text-lg mt-4">
            Currently, I am a third year computer science student, exploring the world of full-stack development, learning and experimenting with various technologies and frameworks, mainly React and Node.js.
          </p>
        </div>
  
        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>Frontend Development:</strong> React, TypeScript, JavaScript, Tailwind CSS, Bootstrap, CSS, HTML </li>
            <li><strong>Backend Development:</strong> Node.js, Express, REST APIs, C#, Python</li>  
            <li><strong>Mobile Development:</strong> Dart, Kotlin</li>
            <li><strong>Database Management:</strong> MongoDB, SQLite</li>
            <li><strong>Version Control:</strong> Git, GitHub</li>   
            <li><strong>DevOps:</strong> Docker, CI/CD</li>
            <li><strong>Cloud Services:</strong> AWS, Firebase</li>
            <li><strong>Testing:</strong> Jest</li>            
            <li><strong>Languages:</strong> Hebrew, English </li>
          </ul>
        </div>
  
        {/* Hobbies and Interests */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Hobbies & Interests</h2>
          <p className="text-lg">
            When I'm not coding or studying , I love devoting my free time to a long list of hobbies and interests. I also enjoy traveling and exploring new places, photographing architecture, nature and scenery, as well as spending time with my family.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;