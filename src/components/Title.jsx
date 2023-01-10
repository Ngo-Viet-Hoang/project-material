import {
  Box,
  Button,
  ButtonBase,
  ButtonGroup,
  Divider,
  InputBase,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import React from "react";

const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "450px",
  height: "40px",
  bgcolor: "red",
  borderRadius: "100px",
  border: "#ccc solid",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  width: "160px",
  height: "40px",
  borderRadius: "100px",
  backgroundColor: theme.palette.otherColor.main,
}));

const StyledStackIphone = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("xs")]: {
    display: "flex",
    paddingLeft: "10px",
  },
}));

const Title = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        paddingTop: "150px",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", width: "100%" }}>
          <Typography variant="h6">WHAT'S YOUR SEO SCORE</Typography>
          <Box>
            <Typography variant="h2" width="h1" fontWeight="700">
              We are Full Service
            </Typography>
            <Typography variant="h2" width="h1" fontWeight="700" sx={{color:"#00C3FF"}}>
              SEO Agency
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", paddingTop: "40px" }}>
          <StyledStack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <InputBase
              placeholder="Your Website URL"
              sx={{ paddingLeft: "10px" }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <InputBase placeholder="Email" />
              <StyledButton
                variant="contained"
                size="small"
                endIcon={<ArrowCircleRightOutlinedIcon color="white" />}
              >
                <Typography variant="subtitle2" component="p">
                  Start now
                </Typography>
              </StyledButton>
            </Box>
          </StyledStack>

          <StyledStackIphone spacing={2}>
            <Box
              sx={{
                border: "#ccc solid",
                width: "270px",
                borderRadius: "100px",
              }}
            >
              <InputBase
                placeholder="Your Website URL"
                sx={{ paddingLeft: "10px" }}
              />
            </Box>
            <Box
              sx={{
                border: "#ccc solid",
                width: "270px",
                borderRadius: "100px",
              }}
            >
              <InputBase placeholder="Email" sx={{ paddingLeft: "10px" }} />
            </Box>
            <StyledButton
              variant="contained"
              endIcon={<ArrowCircleRightOutlinedIcon color="white" />}
            >
              <Typography variant="subtitle1" component="p">
                Start now
              </Typography>
            </StyledButton>
          </StyledStackIphone>
        </Box>
        <Box sx={{ paddingTop: "40px" }}>
          <img
            src="https://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/11/topimg-home1.png"
            height="100%"
            width="100%"
            paddingTop="40px"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Title;
