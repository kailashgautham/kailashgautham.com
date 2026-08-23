import Experience from './experience';

const EXPERIENCE_ITEMS = [
  {
    companyName: "Squarepoint Capital",
    roles: [
      {
        role: "Graduate C++ Software Engineer",
        duration: "July 2026 - Present",
        description: "Working under the Risk PnL team as a full-time C++ Software Engineer.",
        technologies: "C++"
      },
      {
        role: "C++ Software Engineer Intern",
        duration: "August 2025 - June 2026",
        description: "Worked under the Risk PnL team. Finally used C++. Loved the challenge.",
        technologies: "C++"
      }
    ]
  },
  {
    companyName: "Goldman Sachs",
    role: "Software Engineer Intern",
    duration: "May 2025 - August 2025",
    description: "Worked under the Margin Engineering team to develop a real-time metrics platform to analyse margin trends.",
    technologies: "Java"
  },
  {
    companyName: "National University of Singapore",
    role: "Teaching Assistant",
    duration: "March 2025 - April 2025",
    description: "Assisted in teaching CS2105 Introduction to Computer Networks.",
    technologies: "Python, C++, Java"
  },
  {
    companyName: "AI Centre for Education Technologies",
    role: "Software Engineer Intern",
    duration: "May 2024 - August 2024",
    description: "Worked on AICET's Koditsu project, a high-performance code assessment platform that can support over 800 concurrent users.",
    technologies: "TypeScript"
  },
  {
    companyName: "Triple One Global",
    role: "Software Engineer Intern",
    duration: "May 2023 - August 2023",
    description: "Engineered Monster Group's new website, a platform that connects job seekers with employers. Also developed a content management system for non-technical users to manage the website's content.",
    technologies: "TypeScript"
  },
  {
    companyName: "National University of Singapore",
    role: "Teaching Assistant",
    duration: "January 2023 - April 2023",
    description: "Assisted in teaching CS2030S Programming Methodology II, a module that covers advanced programming concepts such as object-oriented programming and functional programming.",
    technologies: "Vim, Java"
  },
  {
    companyName: "NUS FinTech Lab",
    role: "Software Engineer Intern",
    duration: "August 2022 - April 2023",
    description: "Developed the NUS FinTech Lab website, a platform that showcases the lab's research projects and publications. Conducted research on upcoming fintech technologies.",
    technologies: "HTML, CSS, Wordpress"
  },
  {
    companyName: "Netcon Technologies",
    role: "Cyber Security Engineer Intern",
    duration: "March 2019 - April 2019",
    description: "Assisted in conducting penetration tests on clients' networks and systems.",
    technologies: "Kali Linux, Metasploit, Wireshark, Nmap"
  },
]

const GroupedExperience = ({ companyName, roles }) => (
  <div className="experienceCard">
    <h3>{companyName}</h3>
    {roles.map((roleItem, i) => (
      <div key={i} style={{ marginTop: "0.75rem" }}>
        <p style={{ color: "#808080" }}>{roleItem.role} | {roleItem.duration}</p>
        <p>{roleItem.description}</p>
        <p><b>Technologies</b>: {roleItem.technologies}</p>
      </div>
    ))}
  </div>
);

const ExperienceParent = () => {
  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}>
      <h1 style={{
        marginTop: 0,
        marginBottom: "1rem"
      }}>Work Experience</h1>
      {EXPERIENCE_ITEMS.map((item, i) => (
        <div key={i} style={{ paddingBottom: "1.5rem" }}>
          {item.roles
            ? <GroupedExperience companyName={item.companyName} roles={item.roles} />
            : <Experience experience={item} />
          }
        </div>
      ))}
    </div>
  );
};

export default ExperienceParent;
