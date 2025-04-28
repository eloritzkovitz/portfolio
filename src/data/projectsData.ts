const projects = [
    {
      name: "SnapChef",
      description:
        "SnapChef is a mobile application designed to create customized recipes based on available products at home. The application will make use of AI to identify various ingredients (from a taken photo, a scanned receipt or a barcode), and then create cooking recipes based on the given data and other preferences. In addition, the application will provide guidance throughout the process and allow its users to save and rate their recipes, as well as share them with their friends.",
      tech: ["Flutter", "Dart", "TypeScript", "Node.js", "MongoDB", "JWT", "Swagger", "Generative AI",  "Cloud Vision", "Text-to-Speech", "Firebase Messaging"],
      image: "/projects/SnapChef/icon.png",
      links: [
        "https://github.com/Elor-Itz/SnapChef",
        "https://github.com/Elor-Itz/SnapChef-API",
      ],
      involvement: [
        "Designed and implemented the application interface and frontend using Flutter and Dart",
        "Collaborated with my team to build the backend API and integrate it with the frontend",        
        "Integrated Swagger for API documentation",
        "Added features such as Cloud Vision for ingredient recognition, Generative AI for recipe generation, Text-to-Speech and local and remote notifications",
        "Working on optimizing the performance and responsiveness of the application and the backend server",
        "Working on a static website to showcase the project",
      ],
      screenshots: [
        "/projects/SnapChef/screenshot1.jpg",
        "/projects/SnapChef/screenshot2.jpg",
        "/projects/SnapChef/screenshot3.jpg",
        "/projects/SnapChef/screenshot4.jpg",
        "/projects/SnapChef/screenshot5.jpg",
        "/projects/SnapChef/screenshot6.jpg",
        "/projects/SnapChef/screenshot7.jpg",
        "/projects/SnapChef/screenshot8.jpg",               
      ],
    },
    {
      name: "Trevel",
      description: "Trevel is a social networking platform designed for users to share their travel experiences, post trip highlights, and interact with fellow travelers. Users can upload photos, write travel stories, comment on posts, and mark their favorite content. The platform integrates AI-powered content suggestions to enhance user experience and provide relevant travel insights.",
      tech: ["React", "TypeScript", "Bootstrap", "CSS", "Node.js", "MongoDB", "JWT", "Swagger", "Generative AI"],
      image: "/projects/Trevel/icon.png",
      links: "https://github.com/Elor-Itz/Trevel",
      involvement: [
        "Designed and implemented the application interface and frontend using React and TypeScript",
        "Developed the backend API using Node.js and MongoDB, ensuring seamless integration with the frontend",
        "Implemented user authentication and authorization using JWT and cookies",
        "Integrated Swagger for API documentation",
        "Implemented testing suites with Jest",
        "Implemented Generative AI features to provide personalized content suggestions and enhance user engagement",        
      ],
      screenshots: [      
        "/projects/Trevel/screenshot1.png",
        "/projects/Trevel/screenshot2.png",
        "/projects/Trevel/screenshot3.png",
        "/projects/Trevel/screenshot4.png",
        "/projects/Trevel/screenshot5.png",
        "/projects/Trevel/screenshot6.png",
        "/projects/Trevel/screenshot7.png",        
      ],
    },
    {
      name: "Voltrico",
      description: "An online appliances store, allowing users to browse products, add them to cart, perform orders and view them. Administrators can also add, edit and delete items, as well as view order history and statistics. Originally a college project written in JavaScript/CSS/HTML, this version has been completely rewritten in React and TypeScript to match newer standards.",
      tech: ["React", "TypeScript", "Bootstrap", "CSS", "Node.js", "MongoDB", "JWT", "Swagger", "JavaScript", "HTML"],
      image: "/projects/Voltrico/icon.png",
      links: "https://github.com/Elor-Itz/Voltrico",
      involvement: [
        "Refractored legacy code from JavaScript/CSS/HTML to React and TypeScript",
        "Redesigned the application interface to a modern and user-friendly layout using Bootstrap",
        "Updated the backend API to include Swagger documentation",                
      ],
      screenshots: [        
      ],
    },
    {
      name: "HexGame",
      description: "An abstract strategy board game implemented using React. The game allows two players to compete on a hexagonal board, with the goal of forming a connected path of their color linking two opposite sides of the board. The game logic relies on disjoint-set data structures to determine the winner.",
      tech: ["React", "JavaScript", "CSS"],
      image: "/projects/HexGame/icon.png",
      links: "https://github.com/Elor-Itz/HexGame",
      involvement: [        
        "Implemented the game logic using disjoint-set data structures",
        "Expanded a simple college assignment into a fully functional game using React",
        "Designed the game interface to be user-friendly and visually appealing",
        "Implemented a simple AI opponent for single-player mode",
      ],
      screenshots: [ 
        "/projects/HexGame/screenshot1.png",
        "/projects/HexGame/screenshot2.png",
        "/projects/HexGame/screenshot3.png", 
        "/projects/HexGame/screenshot4.png",
        "/projects/HexGame/screenshot5.png",      
      ],
    },
    {
      name: "SayTheC",
      description: "A simple educational desktop application built for my brother's assignment. It helps pupils learn the pronunciation of the letter C in various English words.",
      tech: ["C#", ".NET", "WPF", "Text-to-Speech"],
      image: "/projects/SayTheC/icon.png",
      links: "https://github.com/Elor-Itz/SayTheC",
      involvement: [
        "Developed a simple desktop application using C# and WPF",
        "Implemented Text-to-Speech functionality to pronounce words containing the letter C",                    
      ],
      screenshots: [
        "/projects/SayTheC/screenshot1.png",
        "/projects/SayTheC/screenshot2.png",
        "/projects/SayTheC/screenshot3.png",        
      ],
    },
  ];
  
  export default projects;