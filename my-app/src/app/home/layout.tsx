"use client";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "../../theme/muiTheam";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box>{children}</Box>;
}
