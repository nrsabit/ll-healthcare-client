import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box } from "@mui/material";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <Box sx={{ minHeight: "screen" }}>{children}</Box>
      <Footer></Footer>
    </>
  );
};

export default layout;
