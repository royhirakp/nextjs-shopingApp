import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
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
  // {
  //   title: "follow us",
  //   data: [
  //     <LinkedInIcon />,
  //     <TwitterIcon />,
  //     <InstagramIcon />,
  //     <FacebookIcon />,
  //   ],
  // },
];
const Footer = () => {
  return (
    <Stack
      justifyContent="center"
      pb={3}
      sx={{
        backgroundColor: "#416d6f",
        flexDirection: "row",
        color: "#ffff",
      }}
    >
      <Stack
        flex={3}
        // direction="row"
        sx={{
          paddingLeft: {
            xs: "3%",
            sm: "3%",
            lg: "10%",
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <FooterOptions />
      </Stack>
      <Stack flex={1}>
        <FooterFollowButtonList />
      </Stack>
    </Stack>
  );
};
export default Footer;

const FooterOptions = () => {
  return (
    <>
      {footerData.map((item, i) => {
        return (
          <Stack
            key={i * 0.25}
            flex={`${item.title === "follow us" ? 4 : 3}`}
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
              <Stack
                direction={`${i === item.data.length - 1 ? "row" : "column"}`}
                sx={{
                  display: {
                    xs: `${i === item.data.length - 1 ? "flex" : "none"}`,
                    sm: "flex",
                  },
                }}
              >
                {item.data.map((item, j) => {
                  return (
                    <Typography
                      key={j * 0.05}
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
              </Stack>
            </Box>
          </Stack>
        );
      })}
    </>
  );
};

const FooterFollowButtonList = () => {
  return (
    <Stack
      // flex={`${item.title === "follow us" ? 4 : 3}`}
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
            Follow us
          </Typography>
        </div>
        <Stack
          direction="row"
          sx={{
            display: {
              // xs: `${i === item.data.length - 1 ? "flex" : "none"}`,
              sm: "flex",
            },
          }}
        >
          {[
            <LinkedInIcon />,
            <TwitterIcon />,
            <InstagramIcon />,
            <FacebookIcon />,
          ].map((item, j) => {
            return (
              <Typography
                key={j * 0.05}
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
        </Stack>
      </Box>
    </Stack>
  );
};
