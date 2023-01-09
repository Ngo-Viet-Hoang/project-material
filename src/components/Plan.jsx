import { Grid, Paper } from "@mui/material";
import React from "react";

const Plan = () => {
  return (
    <Grid item xs={4}>
      <Paper elevation={4} sx={{ height: "300px",width:"100%", p: "5", bgcolor: "skyblue" }}>
        Feed
      </Paper>
    </Grid>
  );
};

export default Plan;
