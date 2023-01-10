import { Circle } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import AboutUs from "./components/AboutUs";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import Title from "./components/Title";

function App() {
  return (
    <Box sx={{ bgColor: "white" }}>
      <Navbar />
      <Title />
      {/* <Container> */}
        {/* <AboutUs/>
          <Feed />
        <Box sx={{ display: "flex" }}>
          <Circle />
          <Typography fontWeight="300"> CHOOSE YOUR PLAN </Typography>
          <Circle />
        </Box>
        <Typography variant="h4" component="h1">
          Flexible Pricing Plans
        </Typography>
          <Plan />   */}
      {/* </Container> */}
    </Box>
  );
}

export default App;
