import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Box, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import logo from '../../assets/images/WEB HEAD.png'
import DrawerComp from "./Drawer";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import './scroll.css'

import NavbarDemand from '../NavbarDemand';
const useStyles = makeStyles((theme) => ({

    appBarTransparent: {
        backgroundColor: 'rgba(255,255,255, 100)',
        color: 'white'
    },
    appBarSolid: {
        backgroundColor: 'rgba(255,255,255, 255)',
        color:'black'
    },
    
}));

export default function Navbar() {
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const [isVisible, setIsVisible] = useState(true);



 
   
    const [textColor, setTextColor] = useState("text2");

  


    useEffect(() => {  
      const listenToScroll = () => {
        let heightToHideFrom = 110;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop; 
        if (winScroll > heightToHideFrom) {  
             isVisible && setIsVisible(false);
        } else {
             setIsVisible(true);
        }  
      }; 
      window.addEventListener("scroll", listenToScroll);
      return () => 
         window.removeEventListener("scroll", listenToScroll); 
    }, [])
 

    const navRef = React.useRef()
    navRef.current = navBackground

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 210
            if (show) {
                setNavBackground('appBarSolid')
                setTextColor('text1')
            } else {
                setNavBackground('appBarTransparent')
                setTextColor('text2')
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
          
            <AppBar  id='navM' className={classes[navRef.current]}>
            
                  
             <div id="f">   <div id="height">
     
      </div>
     {
        isVisible 
         && 
       <div className='f' id="hide">
            <NavbarDemand></NavbarDemand>
       </div>
      }</div>

<Toolbar>
          
          {isMatch ? (
            <>
              <img id='navImg' src={logo} alt='srcc' style={{ height:'50px'}} />
              <DrawerComp style={{backgroundColor:'black!important'}} />
            </>
          ) : (
            <>
               <Box style={{margin:'auto'}} sx={{ display: { xs: 'none', sm: 'block' } ,  }}>
              <ul className="navbar-links">
        <li className="navbar-dropdown">
          <Link to="/">Home</Link>
         
        </li>
        <li className="navbar-dropdown">
          <Link to='/staff/c'>Staff  </Link>
          <div className="dropdown">
          <Link style={{display:'flex'}} to='/staff/c'>Committee</Link>
            <Link style={{display:'flex'}} to='/staff/a'> Administrator </Link>
            <Link style={{display:'flex'}} to='/staff/t'> Teacher</Link>
            <Link style={{display:'flex'}} to='/staff/o'>Other</Link>
          
          </div>
        </li>
        <li className="navbar-dropdown">
          <Link to='/about'>About Us</Link>

        </li>
        <li className="navbar-dropdown">
          <Link to='/gallary/all'>Gallery  </Link>
          <div className="dropdown">
            <Link style={{display:'flex'}} to='/gallary/all'> <div></div>All</Link>
            <Link style={{display:'flex'}} to='/gallary/office'> <div></div>Office</Link>
            <Link style={{display:'flex'}} to='/gallary/outside'> <div></div>Outside</Link>
            <Link style={{display:'flex'}} to='/gallary/other'> <div></div>Other</Link>
            
          </div>
        </li>
        <li className="navbar-dropdown">
          <Link to='/notices'>Notices</Link>
        </li>
        <li className="navbar-dropdown">
          <Link to='/contact'>Contact</Link>
        </li>

      </ul>
          </Box>
            
            </>
          )}
        </Toolbar>
            </AppBar>
        </div >
    );
}