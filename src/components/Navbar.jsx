import {
  Dehaze,
  KeyboardArrowDown,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  Grid,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const StyledAppbar = styled(AppBar)({
  display: "flex",
  width: "100%",
  height: "90px",
  paddingTop: "20px",
  backgroundColor: "orange",
});
const StyledBox = styled(Box)({
  display: "flex",
  width: "20%",
});
const StyledSearch = styled(Box)(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "5px",
  [theme.breakpoints.down("lg")]: {
    display: "flex",
  },
}));
const StyledContact = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
const BoxIcon = styled(Box)({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  color: "black",
  boxSizing: "border-box",
  justifyContent: "center",
});
const Navbar = () => {
  return (
    <StyledAppbar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <StyledBox>
          <img
            src="https://webmaster.com.vn/themes/webmaster/assets/public/images/logo/logo.svg?v=2.0.7"
            height="60px"
            width="300px"
          />
        </StyledBox>
        <StyledSearch>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="subtitle2">Home</Typography>
                <KeyboardArrowDown />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="subtitle2">Pages</Typography>
                <KeyboardArrowDown />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="subtitle2">Services</Typography>
                <KeyboardArrowDown />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="subtitle2">Portfolio</Typography>
                <KeyboardArrowDown />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="subtitle2">Blog</Typography>
                <KeyboardArrowDown />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="subtitle2">Contacts</Typography>
                <KeyboardArrowDown />
              </Box>
            </Grid>
          </Grid>
        </StyledSearch>
        <StyledContact>
          <Box>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "white",
                color: "#00C3FF",
                borderRadius: 5,
                height: "40px",
              }}
            >
              Contact Us
            </Button>
          </Box>
          <Box sx={{ paddingTop: "10px", paddingLeft: "3px" }}>
            <Search />
          </Box>
        </StyledContact>
        <Icons>
          <BoxIcon component="button">
            <ShoppingCart />
          </BoxIcon>
          <BoxIcon component="button">
            <Search />
          </BoxIcon>
          <BoxIcon component="button">
            <Dehaze />
          </BoxIcon>
        </Icons>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // open={open}
        // onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </StyledAppbar>
  );
};

export default Navbar;
