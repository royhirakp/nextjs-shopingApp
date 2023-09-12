"use client";
import { Box, Stack, ThemeProvider } from "@mui/material";
import { theme } from "../../theme/muiTheam";
import Header from "../../components/home/parts/Header";
import ButtonList from "../../components/home/parts/ButtonList";
import Footer from "@/components/home/parts/Footer";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Stack
        sx={
          {
            // backgroundColor: "rebeccapurple",
          }
        }
      >
        <Box
          sx={{
            boxSizing: "border-box",
            // backgroundColor: "ActiveBorder",
            // height: "100%",
            width: {
              xs: "90%",
              sm: "90%",
              md: "70%",
            },
            margin: "0 auto 0 auto",
            minWidth: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "1000px",
            },
          }}
        >
          {children}
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
}
