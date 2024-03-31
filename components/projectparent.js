import React from 'react';
import Project from './project';

const PROJECT_ITEMS = [
    {
      duration: "JAN 2024 - PRESENT",
      title: "KaithanOS - C++ Operating System",
      description: "Developed a simple operating system in C++ that supports multitasking, memory management, and file systems.",
      link: "https://github.com/kaithanos/kaithanos"
    },
    {
      duration: "JAN 2024 - PRESENT",
      title: "InterviewAce - Interview Preparation Platform",
      description: "Built a platform that provides interview preparation resources such as coding questions and mock interviews. Built with Python Flask, React.js, and PostgreSQL.",
      link: "https://github.com/janniver/interviewace"
    },
    {
      duration: "DEC 2023 - PRESENT",
      title: "StealthSuite - Securing Your Digital Footprint",
      description: "Developed StealthSuite, a comprehensive privacy application enabling users to anonymise images, documents, and audio, enhancing personal data protection across digital platforms. Built with MongoDB, Express.js, React.js, and Node.js.",
      link: "https://github.com/kailashgautham/stealthsuite"
    },
    {
      duration: "AUG 2023 - PRESENT",
      title: "C++ Orderbook with Websocket API",
      description: "Developed a C++ orderbook that supports limit orders, market orders, and order matching. Integrated with a WebSocket API to provide real-time order updates.",
      link: "https://github.com/kailashgautham/orderbook"
    },
  ]

const ProjectParent = () => {
    return (
        <div>
            <h1>Projects</h1><br></br>
            {PROJECT_ITEMS.map((project) => (
                <div style={{paddingBottom: "1.5rem"}}>
                    <Project
                        project={project}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectParent;