import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  useTheme
} from "@mui/material";
import Home from '../components/home';
import { useState } from 'react';
import Link from 'next/link';
import NavItem from '../components/navitem';
import Image from 'next/image';
import ExperienceParent from '../components/experienceparent';
import ProjectParent from '../components/projectparent';
import Contact from '../components/contact';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Work Experience", href: "/work" },
  { text: "Projects", href: "/projects" },
  { text: "Contact", href: "/contact" },
];


export default function MainPage() {

  const [url, setUrl] = useState("/");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
    <Container maxWidth="lg">
      <Grid
        container
        alignItems="start"
        spacing={6}
        display="flex"
        justifyContent="start"
        flexWrap={"wrap"}
        flexDirection={isSmallScreen ? "column" : "row"}
        sx={{
          paddingTop: { xs: "50px", md: "100px" },
          paddingBottom: { xs: "50px", md: "100px" },
        }}
      >
        <Grid item xs={12} sm={4} className={isSmallScreen ? "no-border" : "navbarContainer"}>
          <Image
            priority
            src="/profile.jpg"
            className="borderCircle"
            height={100}
            width={100}
            alt=""
          />
          <Link href={"/"} onClick={() => setUrl("/")}>
          <p className="logo">Kailash Gautham</p>
          </Link>
          <p>Welcome to my website :)</p>
          <br></br>
          <nav>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              {MENU_LIST.map((menu, idx) => (
                <div
                  key={menu.text}
                  style={{ width: "auto"}}
                >
                  <NavItem {...menu} setUrl={setUrl}/>
                </div>
              ))}
            </div>
          </nav>
        </Grid>
        <Grid item xs={12} sm={8} order={isSmallScreen ? 2 : 1}>
          {url === "/" && <Home  setUrl={setUrl}/>}
          {url === "/work" && <ExperienceParent />}
          {url === "/projects" && <ProjectParent />}
          {url === "/contact" && <Contact />}
        </Grid>
      </Grid>
    </Container>
  </Box>
  );
}
