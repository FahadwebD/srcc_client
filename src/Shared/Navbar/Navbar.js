import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Box, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import logo from '../../assets/images/footerlogo.png'
import DrawerComp from "./Drawer";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import './scroll.css'

import NavbarDemand from '../NavbarDemand';
const useStyles = makeStyles((theme) => ({

    appBarTransparent: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
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


    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
      if (anchorEl !== event.currentTarget) {
        setAnchorEl(event.currentTarget);
      }
    }
  
    function handleClose() {
      setAnchorEl(null);
    }

    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <div >
          
            <AppBar className={classes[navRef.current]}>
            
                  
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
           
              <Link style={{textDecoration:'none'}} to='/'>
              <Button   className={textColor}>
                Home
              </Button>
              </Link>
              <Link style={{textDecoration:'none'}} to='/about'>
              <Button   className={textColor}>
                About Us
              </Button>
              </Link>

              
              <Button 
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
             
              onMouseOver={handleClick}
              
              className={textColor} endIcon={<  KeyboardArrowDownIcon style={{ marginLeft:'-5px'}} />}>
                Staff
              </Button>
              <Menu
              style={{width:'400px!important'}}
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
       <Link style={{textDecoration:'none'}} to='/staff/all'> <MenuItem onClick={handleClose}> <KeyboardDoubleArrowRightIcon/>ALl Staff </MenuItem></Link>
       <Link style={{textDecoration:'none'}} to='/staff/a'> <MenuItem onClick={handleClose}><KeyboardDoubleArrowRightIcon  />Adminastrator </MenuItem></Link>
       <Link style={{textDecoration:'none'}} to='/staff/t'> <MenuItem onClick={handleClose}><KeyboardDoubleArrowRightIcon  />Instructor</MenuItem></Link>
       <Link style={{textDecoration:'none'}} to='/staff/o'><MenuItem onClick={handleClose}><KeyboardDoubleArrowRightIcon  />Other</MenuItem></Link>
      </Menu>
            
              <Link style={{textDecoration:'none'}} to='/gallary'>
              <Button   className={textColor}>
                Gallery
              </Button>
              </Link>
              <Link style={{textDecoration:'none'}} to='/contact'>
              <Button   className={textColor}>
                Contact Us
              </Button>
              </Link>
          </Box>
            
            </>
          )}
        </Toolbar>
            </AppBar>
        </div >
    );
}