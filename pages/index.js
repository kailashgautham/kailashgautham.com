import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  useTheme
} from "@mui/material";
import Home from '../components/home';
import Sidenav from "../components/sidenav";
import Layout from '../components/layout';


export default function MainPage() {

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
            justifyContent="start"
            flexDirection={isSmallScreen ? "column" : "row"}
            sx={{
              paddingTop: { xs: "50px", md: "100px" },
              paddingBottom: { xs: "50px", md: "100px" },
            }}
          >
            <Sidenav />
            <Grid size={{ xs: 12, sm: 8 }} order={isSmallScreen ? 2 : 1}>
              <Home />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
