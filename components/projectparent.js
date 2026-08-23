import Project from './project';

const PROJECT_ITEMS = [
  {
    title: "Torus - Lock-Free SPSC Ring Buffer",
    description: "Lock-free single-producer single-consumer ring buffer.",
    technologies: "C++",
    link: "https://github.com/kailashgautham/torus"
  },
  {
    title: "Lox Interpreter",
    description: "Interpreter for the Lox language.",
    technologies: "C++",
    link: "https://github.com/kailashgautham/lox-interpreter"
  },
  {
    title: "KaithanOS - Operating System in C",
    description: "Simple OS supporting multitasking, memory management, and file systems.",
    technologies: "C, Assembly",
    link: "https://github.com/kaithanos/kaithanos"
  },
  {
    title: "Concurrent Systems - Experiments with Concurrency",
    description: "Concurrent trading systems and a TCP server, tuned for faster execution.",
    technologies: "C++, Go, Rust",
    link: "https://github.com/kailashgautham/concurrent-systems"
  },
  {
    title: "InterviewAce - Interview Preparation Platform",
    description: "Platform for interview prep, with coding questions and mock interviews.",
    technologies: "Python, Flask, React, PostgreSQL",
    link: "https://interviewace.vercel.app/"
  },
  {
    title: "Eepy - An Evil Alarm Clock",
    description: "iOS alarm app with mini-games to make sure you're actually awake.",
    technologies: "Swift, SwiftUI",
    link: "https://github.com/janniver/eepy"
  },
  {
    title: "StealthSuite - Securing Your Digital Footprint",
    description: "Privacy app to anonymise images, documents, and audio.",
    technologies: "MongoDB, Express, React, Node.js",
    link: "https://kailashgautham.github.io/StealthSuite/"
  },
  {
    title: "Jaga - an Adventure Video Game",
    description: "Explore a mysterious island and solve puzzles to find a cure for your brother.",
    technologies: "Unity, C#",
    link: "https://ishahomeschool.itch.io/jaga"
  },
  {
    title: "Money Tycoon - a Business Simulation Game",
    description: "Place outlets near settlements for profit and near police stations to avoid theft.",
    technologies: "Unity, C#",
    link: "https://kailash331215.itch.io/moneygame"
  },
  {
    title: "Tomb of the Lost - a 3D Adventure Game",
    description: "Explore a tomb, dodge obstacles, and find the hidden treasure.",
    technologies: "Unity, C#",
    link: "https://kailash331215.itch.io/tombgame"
  },
]

const ProjectParent = () => {
  return (
    <div>
      <h1>Projects</h1><br></br>
      {PROJECT_ITEMS.map((project) => (
        <div className="projectCard">
          <Project
            project={project}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectParent;
