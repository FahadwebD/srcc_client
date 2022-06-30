import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from '@mui/icons-material/MoveToInbox';

const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
       
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>About Us</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Staffs</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Gallery</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Contact Us</ListItemText>
              </ListItemIcon>
            </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;

