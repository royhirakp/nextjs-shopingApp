"use client";
import React from "react";

import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Stack alignItems="center" m="2% 0 5% 0" justifyContent="center">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <h3>Login</h3>
      </Stack>

      <Stack justifyContent="center" m="0 0 2% 0" alignItems="center">
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
        <Typography variant="body1" sx={{ width: "100%", textAlign: "end" }}>
          <Link href="#" underline="hover">
            {"Forget password ?"}
          </Link>
        </Typography>

        <Button
          sx={{
            "&.MuiButton-contained": {
              backgroundColor: "blue",
            },
          }}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >
          Sign in
        </Button>
      </Stack>
      <Stack spacing={0} direction="row">
        <Typography variant="body1">don,t have an account?</Typography>
        <Link href="singup" underline="hover">
          {"Sing Up"}
        </Link>
      </Stack>
    </>
  );
};

export default LoginForm;
