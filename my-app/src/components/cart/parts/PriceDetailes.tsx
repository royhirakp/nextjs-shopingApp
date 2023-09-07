import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
const PriceDetailes = () => {
  return (
    <Card sx={{ minWidth: 255 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          variant="h5"
        >
          PRICE DETAILS
        </Typography>
        <Divider />
        <Typography component="div">
          Price <span style={{ float: "right" }}>5000</span>{" "}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Discount <span style={{ float: "right" }}>5000</span>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Delivery Charges <span style={{ float: "right" }}>5000</span>
        </Typography>

        <Divider />
        <Typography variant="h4">
          Total Amount: <span style={{ float: "right" }}>5000</span>
        </Typography>
        <Divider />

        <Typography color="green">
          You will save ₹6,601 on this order
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PriceDetailes;
