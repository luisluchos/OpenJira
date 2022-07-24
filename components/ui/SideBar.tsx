import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import React from "react";

const menuItems: string[] = ["Inbox", "Starred", "Send email", "Drafts"];

export default function SideBar() {
  return (
    <Drawer anchor="left" open={true}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                {index % 2 ? <EmailOutlinedIcon /> : <DraftsOutlinedIcon />}
              </ListItemIcon>
              <ListItemText color="red">{menuItem}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
