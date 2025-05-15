import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  useTheme
} from "@mui/material";
import Layout from '../components/layout';
import Sidenav from "../components/sidenav";
import ProjectParent from "../components/projectparent";
  
const WorkPage = () => {

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
            <Grid size={{ xs: 12, sm: 8 }} order={isSmallScreen ? 2 : 1}>
              <ProjectParent />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}

export default WorkPage;