import React from 'react';
import Experience from './experience';

const EXPERIENCE_ITEMS = [
  {
    companyName: "Goldman Sachs",
    role: "Software Engineer Intern",
    duration: "May 2025 - August 2025",
    description: "Working under the Margin Technology team (Post-Trade Transactions).",
    technologies: "Java, Spring, PostgreSQL, Apache Flink"
  },
  {
    companyName: "AI Singapore",
    role: "Software Engineer Intern",
    duration: "May 2024 - August 2024",
    description: "Worked on AI Singapore's Koditsu project, a high-performance code assessment platform that can support over 800 concurrent users.",
    technologies: "MongoDB, React.js, Nest.js"
  },
  {
    companyName: "Triple One Global",
    role: "Software Engineer Intern",
    duration: "May 2023 - August 2023",
    description: "Engineered Monster Group's new website, a platform that connects job seekers with employers. Also developed a content management system for non-technical users to manage the website's content.",
    technologies: "Next.js, TypeScript, Prisma, PostgreSQL"
  },
  {
    companyName: "National University of Singapore",
    role: "Teaching Assistant",
    duration: "January 2023 - April 2023",
    description: "Assisted in teaching CS2030S Programming Methodology II, a module that covers advanced programming concepts such as object-oriented programming and functional programming.",
    technologies: "Vim, Java, Git"
  },
  {
    companyName: "NUS FinTech Lab",
    role: "Frontend Developer and Research Intern",
    duration: "August 2022 - April 2023",
    description: "Developed the NUS FinTech Lab website, a platform that showcases the lab's research projects and publications. Conducted research on upcoming fintech technologies.",
    technologies: "HTML, CSS, JavaScript"
  },
  {
    companyName: "Netcon Technologies",
    role: "Cybersecurity Intern",
    duration: "March 2019 - April 2019",
    description: "Assisted in conducting penetration tests on clients' networks and systems.",
    technologies: "Kali Linux, Metasploit, Wireshark, Nmap"
  },
]

const ExperienceParent = () => {
  return (
    <div>
      <h1>Work Experience</h1><br></br>
      {EXPERIENCE_ITEMS.map((experience) => (
        <div style={{ paddingBottom: "1.5rem" }}>
          <Experience
            experience={experience}
          />
        </div>
      ))}
    </div>
  );
};

export default ExperienceParent;
