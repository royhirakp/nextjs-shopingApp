"use client";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import React from "react";

const NewButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "white",

  [theme.breakpoints.up("xs")]: {
    fontSize: "50%",
    width: "50px",
    "&.MuiButton-contained": {
      backgroundColor: "red",
    },
  },

  [theme.breakpoints.up("sm")]: {
    width: "70px",
    fontSize: "70%",
    "&.MuiButton-contained": {
      backgroundColor: "blue",
    },
  },
  [theme.breakpoints.up("md")]: {
    width: "80px",
    fontSize: "85%",
    "&.MuiButton-contained": {
      backgroundColor: "green",
    },
  },
}));

const NewTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    fontSize: "90%",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "150%",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "170%",
  },
}));

const page = () => {
  return (
    <div>
      <Box>
        <Stack>
          <NewTypography>heloooooo typo 1</NewTypography>
        </Stack>

        <Stack>
          <NewButton variant="contained">button</NewButton>
        </Stack>
      </Box>
    </div>
  );
};

export default page;
