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
import { LoginFormAvtar } from "@/components/muielements/stylesWithBP";

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
  const iconbuttonStyle = { padding: 0 };
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
      <IconButton
        aria-label="cart"
        // sx={iconbuttonStyle}
        onClick={() => router.push("/home/cart")}
      >
        <ShoppingCartIcon style={{ color: "#ffff" }} />
      </IconButton>

      <IconButton
        aria-label="profile"
        // sx={iconbuttonStyle}
        onClick={() => router.push("/home/profile")}
      >
        <Avatar
          // sx={{}}
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
      </IconButton>

      <IconButton
        // sx={iconbuttonStyle}
        aria-label="profile"
        onClick={() => alert(" logout app")}
      >
        <LogoutIcon style={{ color: "#ffff" }} />
      </IconButton>
    </Stack>
  );
};

const SearchBar = () => {
  return (
    <Search
      sx={{
        width: {
          xs: "60%",
          sm: "30%",
          md: "25%",
        },
        display: "flex",
        flexDirection: "row",
        height: {
          xs: "39%",
          sm: "45%",
          md: "50%",
        },
      }}
    >
      <IconButton
        aria-label="search"
        sx={{
          padding: "1%",
        }}
      >
        <SearchIcon
          sx={{
            width: {
              xs: "55%",
              sm: "65%",
              md: "75%",
            },
          }}
        />
      </IconButton>
      <InputBase
        fullWidth
        sx={{
          fontSize: {
            xs: "60%", // Extra small screens (e.g., mobile phones)
            sm: "70%", // Small screens (e.g., tablets)
            md: "80%", // Medium screens (e.g., laptops)
            lg: "90%",
          },
        }}
        placeholder="search products.."
      />
    </Search>
  );
};
const MenuButtonAndLoGo = () => {
  return (
    <Box
      sx={{
        display: { xs: "block", sm: "none" },
      }}
    >
      <IconButton>
        <MenuIcon
          sx={{
            // display: { xs: "block", sm: "none" },
            width: {
              xs: "65%",
              md: "80%",
            },
          }}
        />
      </IconButton>
    </Box>
  );
};
const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        position: "fixed",
        zIndex: "999",
        padding: {
          xs: "0",
          md: "0 10% 0 10%",
          backgroundColor: "cadetblue",
        },
      }}
    >
      <Stack>
        {/* make this flexxx */}
        <StyledToolbar>
          <MenuButtonAndLoGo />

          <Box>
            <Typography
              variant="h6"
              sx={{ ...typoHeading1, display: { xs: "none", sm: "block" } }}
            >
              DAAA
            </Typography>
          </Box>

          <SearchBar />

          <ButtonsList />
        </StyledToolbar>
      </Stack>
    </AppBar>
  );
};

export default Header;
