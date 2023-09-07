import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Ratting from "./Ratting";

const ProductCard = () => {
  return (
    <Card
      sx={{
        marginBottom: "1%",
        maxWidth: {
          xs: "45%",
          sm: "25%",
          md: "15%",
        },
      }}
    >
      <CardMedia
        component="img"
        height="2%"
        image="https://cdn2.thecatapi.com/images/bja.jpg"
        alt="Paella dish"
      />
      <CardContent sx={{ padding: "0" }}>
        <Typography
          sx={{ padding: "0" }}
          variant="body2"
          color="text.secondary"
        >
          Product name with details
        </Typography>
        <Typography
          sx={{ padding: "0" }}
          variant="body2"
          color="text.secondary"
        >
          producr color
        </Typography>
      </CardContent>

      <Ratting rate={4.5} count={"12"} />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
