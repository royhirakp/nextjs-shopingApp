"use client";
import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./parts/Header";
import ButtonList from "./parts/ButtonList";
import Cousoul from "./parts/Cousoul";
import ProductCard from "./parts/ProductCard";

const Home = () => {
  return (
    <Box mt={6}>
      <Stack direction="column" spacing={0.5} justifyContent="space-between">
        <Box flex={1}>
          <ButtonList />
        </Box>
        <Box flex={4}>
          <Cousoul />
        </Box>
        <Box flex={20}>
          <Stack
            spacing={{ xs: 0.5, sm: 1 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            justifyContent="space-between"
            sx={{ paddingTop: { xs: "2%", sm: "0" } }}
          >
            {[1, 2, 3, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6].map(
              (item, i) => {
                return <ProductCard key={i * 0.25} />;
              }
            )}
            <ProductCard />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
