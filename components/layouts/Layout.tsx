import { Box } from "@mui/material";
import Head from "next/head";
import React, { FC } from "react";
import { NavBar } from "../ui";
import SideBar from "../ui/Sidebar";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = "openJira", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <SideBar />
      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
