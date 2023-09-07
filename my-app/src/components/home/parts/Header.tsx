"use client";
import { useRouter } from "next/navigation";
import React from "react";

import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawarForMobile from "./DrawarForMobile";
import MenuIcon from "@mui/icons-material/Menu";
// import { theme } from "@/app/home2/theme";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 1px",
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  gap: "2px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const ButtonsList = () => {
  const router = useRouter();

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <IconButton aria-label="cart" onClick={() => router.push("/home/cart")}>
        <ShoppingCartIcon />
      </IconButton>

      <IconButton
        aria-label="profile"
        onClick={() => router.push("/home/profile")}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </IconButton>

      <IconButton aria-label="profile" onClick={() => alert(" logout app")}>
        <LogoutIcon />
      </IconButton>
    </Stack>
  );
};

const SearchBar = () => {
  return (
    <Search
      sx={{
        width: {
          xs: "50%",
          sm: "60%",
          md: "60%",
        },
      }}
    >
      <IconButton aria-label="search" sx={{ padding: 0 }}>
        <SearchIcon
          sx={{
            width: {
              xs: "65%",
              md: "80%",
            },
          }}
        />
      </IconButton>{" "}
      <InputBase
        placeholder="search products.."
        sx={{ xs: "80%", md: "100%" }}
      />
    </Search>
  );
};

const Header = () => {
  return (
    <AppBar position="static" sx={{ padding: "0 6% 0% 6%", position: "fixed" }}>
      <Stack>
        <StyledToolbar>
          <IconButton>
            <MenuIcon
              sx={{
                width: {
                  xs: "65%",
                  md: "80%",
                },
              }}
            />
          </IconButton>
          {/* <DrawarForMobile /> */}
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            DAAA
          </Typography>

          <SearchBar />
          <ButtonsList />
        </StyledToolbar>
      </Stack>
    </AppBar>
  );
};

export default Header;
