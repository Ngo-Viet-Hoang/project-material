import {
  Assignment,
  Cloud,
  DisplaySettings,
  PieChart,
  Search,
  Wysiwyg,
} from "@mui/icons-material";
import { Box, Container, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";

const StyledContainerIpone = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("ms")]: {
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

const Feed = () => {
  return (
    <Box sx={{padding:"40px"}}>
      <StyledContainer maxWidth="md">
        <Grid container sx={{ textAlign: "center" }}>
          <Grid item xs={4} sx={{ justifyContent: "center" }}>
            <Paper
              elevation={4}
              sx={{
                height: "200px",
                width: "280px",
                bgcolor: "#0160e7",
                color: "white",
                borderRadius: "15px 0 0 0",
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
            >
              <Box>
                <Box sx={{ paddingTop: "30px" }}>
                  <PieChart />
                </Box>
                <Box>
                  <Typography fontWeight="600">Content Marketing</Typography>
                </Box>
                <Box sx={{ paddingTop: "10px" }}>
                  <Typography
                    variant="paragraph"
                    component="p"
                    fontWeight="300"
                    fontSize="12px"
                  >
                    You can provide the answers that your potential customers
                    are trying to find, so you can become the industry.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={4} sx={{ justifyContent: "center" }}>
            <Paper
              elevation={4}
              sx={{
                height: "200px",
                width: "280px",
                bgcolor: "#0160e7",
                color: "white",
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
            >
              <Box>
                <Box sx={{ paddingTop: "30px" }}>
                  <Assignment />
                </Box>
                <Box>
                  <Typography fontWeight="600">Social Marketing</Typography>
                </Box>
                <Box sx={{ paddingTop: "10px" }}>
                  <Typography
                    variant="paragraph"
                    component="p"
                    fontWeight="300"
                    fontSize="12px"
                  >
                    Create and manage top-performing social campaigns and start
                    developing a dedicated customer fan base.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={4} sx={{ justifyContent: "center" }}>
            <Paper
              elevation={4}
              sx={{
                height: "200px",
                width: "280px",
                bgcolor: "#0160e7",
                color: "white",
                borderRadius: "0 15px 0 0",
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
            >
              <Box>
                <Box sx={{ paddingTop: "30px" }}>
                  <DisplaySettings />
                </Box>
                <Box>
                  <Typography fontWeight="600">App Development</Typography>
                </Box>
                <Box sx={{ paddingTop: "10px" }}>
                  <Typography
                    variant="paragraph"
                    component="p"
                    fontSize="12px"
                    fontWeight="300"
                  >
                    Create, publish, and promote engaging content to generate
                    more traffic and build a dedicated community.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={4} sx={{ justifyContent: "center" }}>
            <Paper
              elevation={4}
              sx={{
                height: "200px",
                width: "280px",
                bgcolor: "#0160e7",
                color: "white",
                borderRadius: "0 0 0 15px",
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
            >
              <Box>
                <Box sx={{ paddingTop: "30px" }}>
                  <Search />
                </Box>
                <Box>
                  <Typography fontWeight="600">SEO Optimization</Typography>
                </Box>
                <Box sx={{ padding: "10px" }}>
                  <Typography
                    variant="paragraph"
                    component="p"
                    fontSize="12px"
                    fontWeight="300"
                  >
                    Get more website traffic, more customers, and more online
                    visibility with powerful SEO services.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={4} sx={{ justifyContent: "center" }}>
            <Paper
              elevation={4}
              sx={{
                height: "200px",
                width: "280px",
                bgcolor: "#0160e7",
                color: "white",
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
            >
              <Box>
                <Box sx={{ paddingTop: "30px" }}>
                  <Wysiwyg />
                </Box>
                <Box>
                  <Typography fontWeight="600">Web Development</Typography>
                </Box>
                <Box sx={{ paddingTop: "10px", textAlign: "center" }}>
                  <Typography
                    variant="paragraph"
                    component="p"
                    fontSize="12px"
                    fontWeight="300"
                  >
                    Your website has to impress your visitors within just a few
                    seconds. If it runs slow, if it feels outdated.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={4} sx={{ justifyContent: "center" }}>
            <Paper
              elevation={4}
              sx={{
                height: "200px",
                width: "280px",
                bgcolor: "#0160e7",
                color: "white",
                borderRadius: "0 0 15px 0",
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
            >
              <Box>
                <Box sx={{ paddingTop: "30px" }}>
                  <PieChart />
                </Box>
                <Box>
                  <Typography fontWeight="600">PPC Advertising</Typography>
                </Box>
                <Box sx={{ paddingTop: "10px" }}>
                  <Typography
                    variant="paragraph"
                    component="p"
                    fontSize="12px"
                    fontWeight="300"
                  >
                    You can provide the answers that your potential customers
                    are trying to find, so you can become the industry.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </StyledContainer>
      <StyledContainerIpone>
        <Grid container sx={{ textAlign: "center" }} gap={0.1}>
          <Grid item xs={12} sx={{ justifyContent: "center" }}>
            <Paper
              elevation={4}
              sx={{
                height: "200px",
                width: "100%",
                bgcolor: "#0160e7",
                color: "white",
                borderRadius: "15px 15px 0 0",
              }}
            >
              <Box>
                <Box sx={{ paddingTop: "30px" }}>
                  <PieChart />
                </Box>
                <Box>
                  <Typography fontWeight="600">Content Marketing</Typography>
                </Box>
                <Box sx={{ paddingTop: "10px" }}>
                  <Typography
                    variant="paragraph"
                    component="p"
                    fontSize="12px"
                    fontWeight="300px"
                  >
                    You can provide the answers that your potential customers
                    are trying to find, so you can become the industry.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ justifyContent: "center" }}>
            <Paper
              elevation={4}
              sx={{
                height: "200px",
                width: "100%",
                bgcolor: "#0160e7",
                color: "white",
              }}
            >
              <Box>
                <Box sx={{ paddingTop: "30px" }}>
                  <Assignment />
                </Box>
                <Box>
                  <Typography fontWeight="600">Social Marketing</Typography>
                </Box>
                <Box sx={{paddingTop:"10px"}}>
                  <Typography
                    variant="paragraph"
                    component="p"
                    fontSize="12px"
                    fontWeight="300"
                  >
                    Create and manage top-performing social campaigns and start developing a dedicated customer fan base.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ justifyContent: "center" }}>
            <Paper
              elevation={4}
              sx={{
                height: "200px",
                width: "100%",
                bgcolor: "#0160e7",
                color: "white",
              }}
            >
              <Box>
                <Box sx={{ paddingTop: "30px" }}>
                  <DisplaySettings />
                </Box>
                <Box>
                  <Typography fontWeight="600">App Development</Typography>
                </Box>
                <Box sx={{paddingTop:"10px"}}>
                  <Typography
                    variant="paragraph"
                    component="p"
                    fontSize="12px"
                    fontWeight="300"
                  >
                    Create, publish, and promote engaging content to generate
                    more traffic and build a dedicated community.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ justifyContent: "center" }}>
            <Paper
              elevation={4}
              sx={{
                height: "200px",
                width: "100%",
                bgcolor: "#0160e7",
                color: "white",
              }}
            >
              <Box>
                <Box sx={{ paddingTop: "30px" }}>
                  <Search />
                </Box>
                <Box>
                  <Typography fontWeight="600">SEO Optimization</Typography>
                </Box>
                <Box sx={{ paddingTop: "10px" }}>
                  <Typography
                    variant="paragraph"
                    component="p"
                    fontWeight="300"
                    fontSize="12px"
                  >
                    Get more website traffic, more customers, and more online
                    visibility with powerful SEO services.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ justifyContent: "center" }}>
            <Paper
              elevation={4}
              sx={{
                height: "200px",
                width: "100%",
                bgcolor: "#0160e7",
                color: "white",
              }}
            >
              <Box>
                <Box sx={{ paddingTop: "30px" }}>
                  <Wysiwyg />
                </Box>
                <Box>
                  <Typography fontWeight="600">Web Development</Typography>
                </Box>
                <Box sx={{ paddingTop: "10px" }}>
                  <Typography
                    variant="paragraph"
                    component="p"
                    fontSize="12px"
                    fontWeight="300"
                  >
                    Your website has to impress your visitors within just a few
                    seconds. If it runs slow, if it feels outdated.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ justifyContent: "center" }}>
            <Paper
              elevation={4}
              sx={{
                height: "200px",
                width: "100%",
                bgcolor: "#0160e7",
                color: "white",
                borderRadius: "0 0 15px 15px",
              }}
            >
              <Box>
                <Box sx={{ paddingTop: "30px" }}>
                  <Cloud />
                </Box>
                <Box>
                  <Typography fontWeight="600">PPC Advertising</Typography>
                </Box>
                <Box sx={{ paddingTop: "10px" }}>
                  <Typography
                    variant="paragraph"
                    component="p"
                    fontSize="12px"
                    fontWeight="300"
                  >
                    Target your ideal search phrases and get found at the top of
                    Google’s search results. PPC allows you. immediate
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </StyledContainerIpone>
    </Box>
  );
};

export default Feed;
