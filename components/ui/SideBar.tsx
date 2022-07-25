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
import React, { useContext } from "react";
import { UIContext } from "../../context/ui";

const menuItems: string[] = ["Inbox", "Starred", "Send email", "Drafts"];

export const SideBar= () => {
  
const {sidemenuOpen, closeSideMenu} = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
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
