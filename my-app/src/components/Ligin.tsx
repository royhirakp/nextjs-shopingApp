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
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: {
            xs: "2%",
            sm: "3%",
            md: "4%",
          },
          borderRadius: "15px",
        }}
      >
        <Stack alignItems="center" justifyContent="center">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <h3>Login</h3>
        </Stack>

        <Stack justifyContent="center" alignItems="center">
          <TextField
            sx={{
              marginBottom: "5px",
            }}
            label="Emial"
            placeholder="Enter Email"
            fullWidth
            required
          />
          <FormControl fullWidth variant="outlined" sx={{}}>
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
          <Typography>
            <Link href="#" underline="hover">
              {"Forget password ?"}
            </Link>
          </Typography>

          <NewButton
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Sign in
          </NewButton>
        </Stack>

        <Stack direction="row" spacing={1}>
          <IconButton aria-label="delete">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="delete" disabled color="primary">
            <FacebookIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="add an alarm">
            <GoogleIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <TwitterIcon />
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Ligin;
