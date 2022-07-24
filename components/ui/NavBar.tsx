import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React from "react";

export const NavBar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">openJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
