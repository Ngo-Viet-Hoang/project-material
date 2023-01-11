import React from "react";
import { Circle, FiberManualRecord } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";

const PlanTitle = () => {
  return (
    <Box sx={{ textAlign: "center", width: "100%", paddingTop: "40px" }}>
      <Box>
        <Typography fontWeight="300">
          <FiberManualRecord fontSize="string" color="gray" /> CHOOSE YOUR PLAN{" "}
          <FiberManualRecord fontSize="string" color="gray" />
        </Typography>
      </Box>
      <Box sx={{ paddingTop: "10px" }}>
        <Typography variant="h4" component="h1">
          Flexible Pricing Plans
        </Typography>
        <Box sx={{ paddingTop: "20px" }}>
          <Typography variant="p" sx={{ fontSize: "12px" }}>
            We have experience working with large and small businesses and are
            ready to
          </Typography>
          <Box>
            <Typography variant="p" sx={{ fontSize: "12px" }}>
              develop a targeted strategy and plan that’s just right for you.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PlanTitle;
