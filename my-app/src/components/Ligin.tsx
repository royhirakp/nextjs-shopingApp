"use client";
import React from "react";

import Image from "next/image";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
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

  [theme.breakpoints.up("xs")]: {
    fontSize: "50%",
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Paper elevation={3} sx={{ padding: "2px" }}>
        <Stack alignItems="center" justifyContent="center">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <h3>Login</h3>
        </Stack>
        <TextField label="Emial" placeholder="Enter Email" fullWidth required />
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <NewButton type="submit" color="primary" variant="contained" fullWidth>
          Sign in
        </NewButton>
      </Paper>
    </Box>
  );
};

export default Ligin;
