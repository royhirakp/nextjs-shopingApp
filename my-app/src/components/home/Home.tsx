"use client";
import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./parts/Header";
import ButtonList from "./parts/ButtonList";
import Cousoul from "./parts/Cousoul";
import ProductCard from "./parts/ProductCard";

const Home = () => {
  return (
    <Box pt={6}>
      {/* header and nav bar / search bar */}

      {/* button list  */}
      <ButtonList />
      {/* artical */}
      {/* <Cousoul /> */}

      {/* product details */}

      <Stack
        spacing={{ xs: 0.5, sm: 1 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        justifyContent="space-between"
        sx={{ paddingTop: { xs: "14%", sm: "0" } }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Stack>
    </Box>
  );
};

export default Home;
