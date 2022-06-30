import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import { Link } from 'react-router-dom';
import './scroll.css'

import NavbarDemand from '../NavbarDemand';
const useStyles = makeStyles((theme) => ({

    appBarTransparent: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    appBarSolid: {
        backgroundColor: 'rgba(0,111,69,255)'
    }
}));

export default function Navbar() {
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const [isVisible, setIsVisible] = useState(true);
    const [height, setHeight] = useState(0)


    const navItems = ['Home', 'About', 'Contact'];

    useEffect(() => {   
      window.addEventListener("scroll", listenToScroll);
      return () => 
         window.removeEventListener("scroll", listenToScroll); 
    }, [])



    const listenToScroll = () => {
      let heightToHideFrom = 100;
      const winScroll = document.body.scrollTop || 
          document.documentElement.scrollTop;
      setHeight(winScroll);
  
      if (winScroll > heightToHideFrom) {  
           isVisible && setIsVisible(false);
      } else {
           setIsVisible(true);
      }  
    };




 
    const navRef = React.useRef()
    navRef.current = navBackground

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 210
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

   
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <div >
          
            <AppBar className={classes[navRef.current]}>
            
                  
             <div id="h">   <div id="height">
     
      </div>
     {
        isVisible 
         && 
       <div id="hide">
            <NavbarDemand></NavbarDemand>
       </div>
      }</div>

<Toolbar>
          
          {isMatch ? (
            <>
              <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
              <DrawerComp />
            </>
          ) : (
            <>
               <Box style={{margin:'auto'}} sx={{ display: { xs: 'none', sm: 'block' } ,  }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
            
            </>
          )}
        </Toolbar>
            </AppBar>
        </div >
    );
}