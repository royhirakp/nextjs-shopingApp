import { Button, Stack, Typography, styled } from "@mui/material";
import React from "react";

import { NewButton, NewTypography } from "../../muielements/GlobalButton";
const ButtonList = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      pt={1}
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
      }}
    >
      <NewButton variant="text">Electronics</NewButton>
      <NewButton variant="text">Books</NewButton>
      <NewButton variant="text">grocery</NewButton>
      <NewButton variant="text">Home appliences</NewButton>
      <NewButton variant="text">Flights</NewButton>{" "}
    </Stack>
  );
};

export default ButtonList;
