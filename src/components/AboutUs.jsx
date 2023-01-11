import { Box, Grid, Typography  } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const AboutUs = () => {
  return (
    <Box sx={{ paddingTop: "700px" }}>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <img
              src="https://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/11/seo-home1.png"
              height="100%"
              width="100%"
              paddingTop="40px"
            />
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography>About Us</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
