"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div>
      <Box>
        <Stack>
          <Typography variant="h1">hello hello</Typography>
          <Typography variant="h2">hello h22222</Typography>

          <Typography variant="body1">hello h bodyyyy111</Typography>
          <Typography variant="body2">hello body2</Typography>
        </Stack>

        <Stack>
          <Button
            sx={{
              textTransform: "none",
              display: "flex",
              width: "auto",
              padding: 0,
              fontSize: {
                xs: 5,
                md: 10,
                xl: 15,
              },
            }}
            variant="contained"
            color="error"
          >
            button1
          </Button>
          <Button variant="text">button1</Button>
        </Stack>
      </Box>
    </div>
  );
};

export default page;
