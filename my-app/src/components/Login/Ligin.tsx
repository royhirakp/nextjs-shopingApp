"use client";
import React from "react";

import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ButtonList from "./parts/ButtonList";
import LoginForm from "./parts/LoginForm";

const UserBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  gap: "2px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NewButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "white",
  marginTop: "1%",
  borderRadius: "16px",

  [theme.breakpoints.up("xs")]: {
    fontSize: "55%",
    width: "50px",
    "&.MuiButton-contained": {
      backgroundColor: "red",
    },
  },

  [theme.breakpoints.up("sm")]: {
    width: "70px",
    fontSize: "70%",
    "&.MuiButton-contained": {
      backgroundColor: "blue",
    },
  },
  [theme.breakpoints.up("md")]: {
    width: "80px",
    fontSize: "85%",
    "&.MuiButton-contained": {
      backgroundColor: "green",
    },
  },
}));

const Ligin = () => {
  const paperStyle = {
    padding: 20,
    // height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: {
          xs: "95%",
          sm: "43%",
        },
        padding: {
          xs: "2%",
          sm: "2%",
          md: "3%",
        },
        borderRadius: "15px",
      }}
    >
      <LoginForm />
      <ButtonList />
    </Paper>
  );
};

export default Ligin;
