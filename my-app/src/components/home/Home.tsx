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
      {/* <Stack direction="column" spacing={0.5} justifyContent="space-between">
        <Box flex={1} sx={{ border: "1px solid" }}>
          <ButtonList />
        </Box>
        <Box flex={4} sx={{ border: "1px solid" }}>
          <Cousoul />
        </Box>
        <Box flex={20} sx={{ border: "1px solid" }}>
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
      </Stack> */}

      {/* artical */}

      {/* product details */}

      {/*<Stack
        direction="row"
        // sx={{ paddingLeft: "10%", paddingRight: "10%" }}
        spacing={2}
        justifyContent="space-between"
      >
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>

      ////////////////////////////////////
      <Box flex={4} p={2}>
      <Post />
      <Post />
    </Box>
      
      */}
    </Box>
  );
};

export default Home;
