import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Plan = () => {
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={4} sx={{ justifyContent: "center" }}>
          <Paper
            elevation={4}
            sx={{
              height: "300px",
              width: "250px",
              bgcolor: "skyblue",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Typography>Content Marketing</Typography>
              </Box>
              <Box>
                <Typography variant="paragraph" component="p">
                  You can provide the answers that your potential customers are
                  trying to find, so you can become the industry.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4} sx={{ justifyContent: "center" }}>
          <Paper
            elevation={4}
            sx={{
              height: "300px",
              width: "250px",
              bgcolor: "skyblue",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Typography>Content Marketing</Typography>
              </Box>
              <Box>
                <Typography variant="paragraph" component="p">
                  You can provide the answers that your potential customers are
                  trying to find, so you can become the industry.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4} sx={{ justifyContent: "center" }}>
          <Paper
            elevation={4}
            sx={{
              height: "300px",
              width: "250px",
              bgcolor: "skyblue",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Typography>Content Marketing</Typography>
              </Box>
              <Box>
                <Typography variant="paragraph" component="p">
                  You can provide the answers that your potential customers are
                  trying to find, so you can become the industry.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Plan;
