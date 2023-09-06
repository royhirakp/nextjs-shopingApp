import { Paper } from "@mui/material";
import React from "react";
import SingupForm from "./parts/SingupForm";

const Singup = () => {
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
      <SingupForm />
    </Paper>
  );
};

export default Singup;
