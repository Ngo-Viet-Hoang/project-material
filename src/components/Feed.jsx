import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";

const Feed = () => {
  return (
        <Grid item xs={4}>
          <Box>
            <Container>
            <Paper elevation={4} sx={{height:"60%",width: "60%", p:"5", bgcolor:"skyblue" }}>Feed</Paper>
            </Container>
          
          </Box>
        </Grid>
  );
};

export default Feed;
