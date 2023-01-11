import { ArrowCircleRightOutlined, Circle } from "@mui/icons-material";
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const StyledButton = styled(Button)(({ theme }) => ({
  width: "160px",
  height: "40px",
  borderRadius: "100px",
  backgroundColor: theme.palette.blueColor.main,
}));

const StyledContainerIpone = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const AboutUs = () => {
  return (
    <Box sx={{ paddingTop: "700px" }}>
      <StyledContainer maxWidth="md">
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
            <Box sx={{ paddingTop: "60px", paddingLeft: "50px" }}>
              <Box sx={{ color: "gray" }}>
                <Typography fontWeight="600" fontSize="12px">
                  <Circle fontSize="10px" /> ABOUT US
                </Typography>
              </Box>
              <Box sx={{ paddingTop: "10px" }}>
                <Typography variant="h4" component="h1" fontWeight="700">
                  Grow Your Business
                </Typography>
                <Typography variant="h4" component="h1" fontWeight="700">
                  with Our SEO Agency
                </Typography>
                <Typography sx={{ paddingTop: "10px" }}>
                  Over 10 years Onum helping companies reach their financial and
                  branding goals.
                </Typography>
                <Typography sx={{ paddingTop: "10px", fontSize: "12px" }}>
                  Over the years, we have worked with Fortune 500s and brand-new
                  startups. We help ambitious businesses like yours generate
                  more profits by building awareness, driving web traffic,
                  connecting with customers, and growing overall sales. Give us
                  a call.
                </Typography>
                <Box sx={{ paddingTop: "50px" }}>
                  <StyledButton
                    variant="contained"
                    size="small"
                    endIcon={<ArrowCircleRightOutlined color="white" />}
                  >
                    <Typography variant="subtitle2" component="p">
                      Lean More
                    </Typography>
                  </StyledButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </StyledContainer>
      <Box>
        <StyledContainerIpone>
          <Grid container>
            <Grid item xs={12}>
              <img
                src="https://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/11/seo-home1.png"
                height="100%"
                width="100%"
                paddingTop="40px"
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ paddingTop: "60px", paddingLeft: "50px" }}>
                <Box sx={{ color: "gray" }}>
                  <Typography fontWeight="600" fontSize="12px">
                    <Circle fontSize="10px" /> ABOUT US
                  </Typography>
                </Box>
                <Box sx={{ paddingTop: "10px" }}>
                  <Typography variant="h4" component="h1" fontWeight="700">
                    Grow Your Business
                  </Typography>
                  <Typography variant="h4" component="h1" fontWeight="700">
                    with Our SEO Agency
                  </Typography>
                  <Typography sx={{ paddingTop: "10px" }}>
                    Over 10 years Onum helping companies reach their financial
                    and branding goals.
                  </Typography>
                  <Typography sx={{ paddingTop: "10px", fontSize: "12px" }}>
                    Over the years, we have worked with Fortune 500s and
                    brand-new startups. We help ambitious businesses like yours
                    generate more profits by building awareness, driving web
                    traffic, connecting with customers, and growing overall
                    sales. Give us a call.
                  </Typography>
                  <Box sx={{ paddingTop: "30px" }}>
                    <StyledButton
                      variant="contained"
                      size="small"
                      endIcon={<ArrowCircleRightOutlined color="white" />}
                    >
                      <Typography variant="subtitle2" component="p">
                        Lean More
                      </Typography>
                    </StyledButton>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </StyledContainerIpone>
      </Box>
    </Box>
  );
};

export default AboutUs;
