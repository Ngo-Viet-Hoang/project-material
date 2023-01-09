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

const StyledStack = styled(Stack)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "500px",
  height: "40px",
  bgcolor: "red",
  borderRadius: "100px",
  border: "#ccc solid",
});
const StyledButton = styled(Button)(({ theme }) => ({
  width: "160px",
  borderRadius: "100px",
  backgroundColor: theme.palette.otherColor.main,
}));

const Title = () => {
  return (
    // <Box sx={{ width: "100%", height: "300px", bgcolor: "gray" }}>
    <Container>
      <Box sx={{ bgColor: "white" }}>
        <StyledStack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <InputBase placeholder="Your Website URL" />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <InputBase placeholder="Email" />
            <StyledButton
              variant="contained"
              endIcon={<ArrowCircleRightOutlinedIcon color="white" />}
            >
              <Typography variant="subtitle2" component="p">Start now</Typography>
            </StyledButton>
          </Box>
        </StyledStack>
      </Box>
    </Container>
    //   </Box>
  );
};

export default Title;
