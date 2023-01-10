import { PieChart } from "@mui/icons-material";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Feed = () => {
  return (
    <Grid container>
      <Grid item xs={4} sx={{justifyContent:"center"}}>
        <Paper
          elevation={4}
          sx={{
            height: "250px",
            width: "300px",
            bgcolor: "skyblue",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Box>
              <PieChart />
            </Box>
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
        <Paper
          elevation={4}
          sx={{
            height: "250px",
            width: "300px",
            bgcolor: "skyblue",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Box>
              <PieChart />
            </Box>
            <Box>
              <Typography>Social Marketing</Typography>
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
      <Grid item xs={4}>
        <Paper
          elevation={4}
          sx={{
            height: "250px",
            width: "300px",
            bgcolor: "skyblue",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Box>
              <PieChart />
            </Box>
            <Box>
              <Typography>App Development</Typography>
            </Box>
            <Box>
              <Typography variant="paragraph" component="p">
                You can provide the answers that your potential customers are
                trying to find, so you can become the industry.
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper
          elevation={4}
          sx={{
            height: "250px",
            width: "300px",
            bgcolor: "skyblue",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Box>
              <PieChart />
            </Box>
            <Box>
              <Typography>SEO Optimization</Typography>
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
      <Grid item xs={4}>
        <Paper
          elevation={4}
          sx={{
            height: "250px",
            width: "300px",
            bgcolor: "skyblue",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Box>
              <PieChart />
            </Box>
            <Box>
              <Typography>App Development</Typography>
            </Box>
            <Box>
              <Typography variant="paragraph" component="p">
                You can provide the answers that your potential customers are
                trying to find, so you can become the industry.
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper
          elevation={4}
          sx={{
            height: "250px",
            width: "300px",
            bgcolor: "skyblue",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Box>
              <PieChart />
            </Box>
            <Box>
              <Typography>SEO Optimization</Typography>
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
  );
};

export default Feed;
