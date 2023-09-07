import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  NewTypography,
  NewButton,
} from "../../components/muielements/GlobalButton";
const Product = () => {
  return (
    <Box pt={8} border="1px solid" display="flex">
      <Box width="40%">
        <Card sx={{ maxWidth: "100%", height: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn2.thecatapi.com/images/bja.jpg"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Box>
      <Box width="55%">
        <NewTypography variant="h3">Product Name</NewTypography>
        <NewTypography variant="h4">Product Name</NewTypography>

        <Stack direction="row" spacing={3}>
          <NewButton>Add to cart</NewButton>
          <NewButton> Buy Now</NewButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Product;
