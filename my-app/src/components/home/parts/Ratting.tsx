"use client";

import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Box, Stack, Typography } from "@mui/material";
interface RatingProps {
  rate: number;
  count: string;
}
const Ratting: React.FC<RatingProps> = ({ rate, count }) => {
  return (
    // <div className="flex">
    <Box
      sx={{
        width: {
          xs: "50%",
          sm: "60%",
        },
        display: "flex",
      }}
    >
      <Rating style={{ maxWidth: 100, width: "80%" }} value={rate} readOnly />
      <Stack width="48%">
        <Typography
          sx={{ padding: "0", fontSize: "80%" }}
          variant="body2"
          color="text.secondary"
        >
          {count} reviews
        </Typography>
      </Stack>
    </Box>
    // </div>
  );
};

export default Ratting;
