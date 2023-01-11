import { Circle, FiberManualRecord } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import AboutUs from "./components/AboutUs";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import PlanTitle from "./components/PlanTitle";
import Title from "./components/Title";

function App() {
  return (
    <Box sx={{ bgColor: "white" }}>
      <Navbar />
      <Title />
      {/* <Container> */}
      <AboutUs />
      <Feed />
     <PlanTitle/>
      {/* <Plan /> */}
      {/* </Container> */}
    </Box>
  );
}

export default App;
