"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Badge,
  Avatar,
  Stack,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { Mail, NotificationAdd } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { theme } from "@/app/home2/theme";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "##15c630",
    },
  },
});
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
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

const Header = () => {
  const router = useRouter();
  // const [open, setOpen] = useState(false);
  // function handleClose() {
  //   setOpen(false);
  // }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" sx={{ padding: "0 6% 0% 6%", position: "fixed" }}>
      <Stack>
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            DAAA
          </Typography>
          <AdbIcon sx={{ display: { sm: "none", xs: "block" } }} />
          <Search>
            <IconButton aria-label="delete">
              <SearchIcon />
            </IconButton>{" "}
            <InputBase placeholder="search products.." />
          </Search>

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
            <IconButton aria-label="cart" onClick={() => router.push("/cart")}>
              <ShoppingCartIcon />
            </IconButton>

            <IconButton
              aria-label="profile"
              onClick={() => router.push("/profile")}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </IconButton>

            <IconButton
              aria-label="profile"
              onClick={() => alert(" logout app")}
            >
              <LogoutIcon />
            </IconButton>
          </Stack>
        </StyledToolbar>

        {/*  */}

        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
          <Typography variant="body1"> Hiark </Typography>
        </UserBox>
      </Stack>
    </AppBar>
  );
};

export default Header;
