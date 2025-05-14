import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  useTheme
} from "@mui/material";
import Link from 'next/link';
import Image from 'next/image';
import ExperienceParent from '../components/experienceparent';
import Layout from '../components/layout';
import Sidenav from "../components/sidenav";
import ProjectParent from "../components/projectparent";
const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Work Experience", href: "/work" },
  { text: "Projects", href: "/projects" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Contact", href: "/contact" },
];
  
const WorkPage = ({ setUrl }) => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout home>
      <Box>
        <Container maxWidth="lg">
          <Grid
            container
            alignItems="start"
            spacing={6}
            display="flex"
            flexDirection={isSmallScreen ? "column" : "row"}
            sx={{
              paddingTop: { xs: "50px", md: "100px" },
              paddingBottom: { xs: "50px", md: "100px" },
            }}
          >
            <Sidenav />
            <Grid item xs={12} sm={8} order={isSmallScreen ? 2 : 1}>
              <ProjectParent />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}

export default WorkPage;