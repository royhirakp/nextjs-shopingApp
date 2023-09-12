import { Box, Stack, Typography } from "@mui/material";
import React from "react";
const footerData = [
  {
    title: "Company",
    data: ["About us", "Our service", "privicy policy", "Affilated Programe"],
  },
  {
    title: "get Help",
    data: ["About us", "Our service", "privicy policy", "Affilated Programe"],
  },
  {
    title: "Online shoping",
    data: ["About us", "Our service", "privicy policy", "Affilated Programe"],
  },
  {
    title: "follow us",
    data: ["About us", "Our service", "privicy policy", "Affilated Programe"],
  },
];
const Footer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      pb={3}
      sx={{ backgroundColor: "cadetblue" }}
    >
      {footerData.map((item, i) => {
        return (
          <Stack
            key={i * 0.25}
            flex={`${item.title === "follow us" ? 4 : 3}`}
            sx={{
              paddingLeft: {
                xs: "0",
                sm: "3%",
                lg: "10%",
              },
            }}
            justifyContent="center"
          >
            <Box>
              <div>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: {
                      xs: "80%",
                      sm: "95%",
                      md: "110%",
                    },
                    borderBottom: "1px solid",
                    display: "inline-block",
                    padding: "1%",
                    marginBottom: "1%",
                  }}
                >
                  {item.title}
                </Typography>
              </div>
              {item.data.map((item, j) => {
                return (
                  <Typography
                    key={j * 0.05}
                    // variant="body2"
                    sx={{
                      fontSize: {
                        xs: "60%",
                        sm: "85%",
                        md: "90%",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Box>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Footer;
