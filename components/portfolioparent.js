import Portfolio from './portfolio';

const PORTFOLIO_ITEMS = [
  {
    title: "InterviewAce - Interview Preparation Platform",
    description: "Built a platform that provides interview preparation resources such as coding questions and mock interviews. Built with Python Flask, React.js, and PostgreSQL.",
    link: "https://interviewace.vercel.app/"
  },
  {
    title: "StealthSuite - Securing Your Digital Footprint",
    description: "Developed StealthSuite, a comprehensive privacy application enabling users to anonymise images, documents, and audio, enhancing personal data protection across digital platforms. Built with MongoDB, Express.js, React.js, and Node.js.",
    link: "https://kailashgautham.github.io/StealthSuite/"
  },
  {
    title: "Jaga - an Adventure Video Game",
    description: "Developed Jaga, an adventure video game where you explore a mysterious island and solve puzzles to find the magical herb that will cure your brother. Built with Unity and C#.",
    link: "https://ishahomeschool.itch.io/jaga"
  },
  {
    title: "Money Tycoon - a Business Simulation Game",
    description: "Developed a business game where you strategically place outlets and ensure that they are close enough to settlements to make money, and close enough to police stations to avoid theft. Built with Unity and C#.",
    link: "https://kailash331215.itch.io/moneygame"
  },
  {
    title: "Tomb of the Lost - a 3D Adventure Game",
    description: "Developed a 3D adventure game where you explore a tomb and avoid obstacles to find the hidden treasure. Built with Unity and C#.",
    link: "https://kailash331215.itch.io/tombgame"
  },
]

const PortfolioParent = () => {
  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}>
      <h1 style={{
        marginTop: 0,
        marginBottom: "1rem"
      }}>Portfolio</h1>
      {PORTFOLIO_ITEMS.map((portfolio) => (
        <div style={{ paddingBottom: "1.5rem" }}>
          <Portfolio
            portfolio={portfolio}
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioParent;