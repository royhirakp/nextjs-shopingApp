import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";
const Cousoul = () => {
  var items = [
    {
      id: 1,
      img: "https://cdn2.thecatapi.com/images/eer.jpg",
    },
    {
      id: 2,
      img: "https://cdn2.thecatapi.com/images/de5.jpg",
    },
    {
      id: 3,
      img: "https://cdn2.thecatapi.com/images/b9u.jpg",
    },
    {
      id: 4,
      img: "https://cdn2.thecatapi.com/images/1si.jpg",
    },
  ];

  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Cousoul;

function Item(props: any) {
  return (
    <Paper
      sx={{
        width: "100%",

        height: {
          xs: "1rem",
          sm: "5rem",
          md: "9rem",
        },
      }}
    >
      <Box height="100%">
        <img src={props.item.img} alt=" cat" style={{ width: "100%" }} />
      </Box>
    </Paper>
  );
}
