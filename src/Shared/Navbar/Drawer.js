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
import './Drawer.css'

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
    
<nav class="vertical">
  <ul style={{textAlign:'left'}} >
    <li><Link to ="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to ="/staff/all">Staffs +</Link>
      <ul>
        <li><Link to ="/staff/a">Adminastator</Link></li>
        <li><Link to ="/staff/t">Teachers</Link></li>
        <li><Link to ="/staff/o">Other</Link></li>
      </ul>
    </li>
 
    
    <li><Link to ="/gallary/all">Gallery +</Link>
      <ul>
        <li><Link to ="/gallary/office">Office</Link></li>
        <li><Link to ="/gallary/outside">Outside</Link></li>
        <li><Link to ="/gallary/other">Other</Link></li>
      </ul>
    
    </li>
    <li><Link to="/contact">Contact Us</Link></li>
  </ul>
</nav>
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

