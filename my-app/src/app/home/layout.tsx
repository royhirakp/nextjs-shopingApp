"use client";
import { Box, ThemeProvider } from "@mui/material";
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
      <Box
        sx={{
          boxSizing: "border-box",
          padding: {
            xs: "0 0.5% 0 0.5%",
            sm: "0.5% 2% 0 2%",
            md: "1% 4% 0 4%",
            lg: "1% 5% 0 5%",
            xl: "1% 6% 0 6%",
          },
          height: "100%",
        }}
      >
        {children}
        <Footer />
      </Box>
    </Box>
  );
}
