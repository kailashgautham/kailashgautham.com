import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Home from '../components/home';
import { useState } from 'react';
import Link from 'next/link';
import NavItem from '../components/navitem';
import Image from 'next/image';
import ExperienceParent from '../components/experienceparent';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Work Experience", href: "/work" },
  { text: "Projects", href: "/projects" },
  { text: "Contact", href: "/contact" },
];

const EXPERIENCE_ITEMS = [
  {
    companyName: "AI Singapore",
    role: "Software Engineer Intern",
    duration: "May 2024 - August 2024",
    description: "Worked on AI Singapore's Codaveri project, an automated programming coach that provides real-time personalised guidance and feedback to developers.",
    technologies: "MongoDB, Express.js, React.js, Node.js"
  },
  {
    companyName: "Monster Group",
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

export default function MainPage({ allPostsData }) {
  const [url, setUrl] = useState("/");
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.pageLayout}>
        <div className={utilStyles.navbarContainer}>
          <header>
            <>
              <Image
                priority
                src="/profile.jpg"
                className={utilStyles.borderCircle}
                height={100}
                width={100}
                alt=""
              />
            </>
            <nav className={`nav`}>
              <Link href={"/"} onClick={() => setUrl("/")}>
                <p className="logo">Kailash Gautham</p>
              </Link>
              <p>Welcome to my website :)</p>
              <br></br>
              <div
                onClick={() => setNavActive(!navActive)}
                className={`nav__menu-bar`}
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                {MENU_LIST.map((menu, idx) => (
                  <div
                    key={menu.text}
                    style={{ width: "auto"}}
                  >
                    <NavItem active={activeIdx === idx} {...menu} setUrl={setUrl}/>
                  </div>
                ))}
              </div>
            </nav>
          </header>
        </div>
        <div className={utilStyles.contentContainer}>
          {url === "/" && <Home />}
          {url === "/work" && (
            <ExperienceParent experiences={EXPERIENCE_ITEMS} />
          )}
        </div>
      </div>
    </Layout>
  );
}
