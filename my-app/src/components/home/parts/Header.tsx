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
import MenuIcon from "@mui/icons-material/Menu";
import {
  typoHeading2,
  typoText,
  typoHeading1,
} from "@/components/muielements/stylesWithBP";
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
          xs: "90%",
          sm: "40%",
          md: "35%",
        },
        display: "flex",
        flexDirection: "row",
      }}
    >
      <IconButton aria-label="search" sx={{ padding: "1%" }}>
        <SearchIcon />
      </IconButton>
      <InputBase
        // fullWidth
        sx={{
          fontSize: {
            xs: "0.9rem", // Extra small screens (e.g., mobile phones)
            sm: "1.1rem", // Small screens (e.g., tablets)
            md: "1.3rem", // Medium screens (e.g., laptops)
            lg: "1.4rem",
          },
        }}
        placeholder="search products.."
      />
    </Search>
  );
};

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ padding: "0 6% 0% 6%", position: "fixed", zIndex: "999" }}
    >
      <Stack>
        {/* make this flexxx */}
        <StyledToolbar>
          <IconButton>
            <MenuIcon
              sx={{
                display: { xs: "block", sm: "none" },
                width: {
                  xs: "65%",
                  md: "80%",
                },
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ ...typoHeading1, display: { xs: "none", sm: "block" } }}
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
