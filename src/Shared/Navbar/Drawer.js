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
import { Link } from 'react-router-dom';


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
       
            <Link style={{textDecoration:'none'}} to='/'>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            </Link>
            <Link style={{textDecoration:'none'}} to='/about'>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>About Us</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            </Link>
            <Link style={{textDecoration:'none'}} to='/staff'>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Staff</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            </Link>
            <Link style={{textDecoration:'none'}} to='/gallary'>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Gallery</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            </Link>
            <Link style={{textDecoration:'none'}} to='/contact'>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Contact Us</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            </Link>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon style={{color:'black'}} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;

