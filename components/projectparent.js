import Project from './project';

const PROJECT_ITEMS = [
  {
    title: "Pixel Empire - A 2D Game Engine",
    description: "Developed a 2D game engine.",
    technologies: "C++",
    link: "https://github.com/kailashgautham/pixel-empire"
  },
  {
    title: "KaithanOS - Operating System in C",
    description: "Developed a simple operating system that supports multitasking, memory management, and file systems.",
    technologies: "C, Assembly",
    link: "https://github.com/kaithanos/kaithanos"
  },
  {
    title: "Concurrent Systems - Experiments with Concurrency",
    description: "Built concurrent trading systems and a TCP server, enabling significant speedups in execution time.",
    technologies: "C++, Go, Rust",
    link: "https://github.com/kailashgautham/concurrent-systems"
  },
  {
    title: "Kepler - The Trading Platform of the Future",
    description: "Developed a trading platform for clients to easily post margin payments and make trades.",
    technologies: "Java, PostgreSQL, React, Apache Flink",
    link: "https://github.com/kailashgautham/kepler"
  },
  {
    title: "InterviewAce - Interview Preparation Platform",
    description: "Built a platform that provides interview preparation resources such as coding questions and mock interviews.", 
    technologies: "Python, Flask, React",
    link: "https://github.com/janniver/interviewace"
  },
  {
    title: "Eepy - An Evil Alarm Clock",
    description: "Developed an iOS alarm app featuring interactive mini-games to ensure users are fully awake.",
    technologies: "Swift, SwiftUI",
    link: "https://github.com/janniver/eepy"
  },
]

const ProjectParent = () => {
  return (
    <div>
      <h1>Projects</h1><br></br>
      {PROJECT_ITEMS.map((project) => (
        <div style={{ paddingBottom: "1.5rem" }}>
          <Project
            project={project}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectParent;
