import { Box } from "@mui/material";
import React from "react";
import CartCard from "./parts/CartCard";
import PriceDetailes from "./parts/PriceDetailes";

const Cart = () => {
  return (
    <Box pt={8} sx={{ display: "flex" }}>
      <Box border="1px solid" sx={{ width: "50%", height: "auto" }}>
        <CartCard />
      </Box>{" "}
      <Box
        sx={{
          width: "30%",
          height: "300px",
          float: "right",
          marginLeft: "2%",
          // position: "fixed",
        }}
      >
        <PriceDetailes />
      </Box>
    </Box>
  );
};

export default Cart;
