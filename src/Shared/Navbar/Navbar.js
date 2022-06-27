import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const useStyles = makeStyles((theme) => ({

    appBarTransparent: {
        backgroundColor: 'rgba(241, 6, 6, 0.01)'
    },
    appBarSolid: {
        backgroundColor: 'rgba(241, 6, 6, 0.91)'
    }
}));

export default function Navbar() {
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const [anchorElNav, setAnchorElNav] = React.useState(null);






    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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

    return (
        <div >
            <AppBar position="fixed" className={classes[navRef.current]}>
           
                   <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar src='https://upload.wikimedia.org/wikipedia/commons/7/74/Bangladesh_Red_Crescent_Society_Logo.png' alt='srcc' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1  , width:'50px' , height:'50px'}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SRCNC
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                 <Link to="/about">
                <MenuItem  >
                  <Typography textAlign="center">About Us</Typography>
                </MenuItem>
                </Link>
                <Link style={{textDecoration:'none'}} to="/staff">
                <MenuItem  >
                  <Typography textAlign="center">Staff</Typography>
                </MenuItem>
                </Link>
                <Link style={{textDecoration:'none'}} to="/gallary">
                <MenuItem  >
                  <Typography textAlign="center">About Us</Typography>
                </MenuItem>
                </Link>
                <MenuItem  >
                  <Typography textAlign="center">About Us</Typography>
                </MenuItem>
            </Menu>
          </Box>
         <div style={{marginRight:'auto'}}>
         <Avatar src='https://upload.wikimedia.org/wikipedia/commons/7/74/Bangladesh_Red_Crescent_Society_Logo.png' alt='srcc' sx={{ display: {xs: 'flex', md: 'none'  }, mr: 1 , width:'70px' , height:'70px'}} />
         </div>
         
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SRCNC
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link style={{textDecoration:'none'}} to="/about">
              <Button

                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{color:'white'}}
              >
                About Us
              </Button>
              </Link>
              <Link style={{textDecoration:'none'}} to="/staff">
              <Button
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              style={{color:'white'}}
            >
              Staff
            </Button>
            </Link>
            <Link style={{textDecoration:'none'}} to="/gallary">

            <Button
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              style={{color:'white'}}
            >
              Gallary
            </Button>
            
            </Link>
            
            <Button
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              style={{color:'white'}}
            >
              Contact Us
            </Button>
        
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          {
            user &&  <Link to="/dashboard">
            <Button
            
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
            style={{color:'white'}}
          >
            Dashboard
          </Button>
          </Link>
        }
          {user ?<button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login"><Button size="small" variant="contained" startIcon={<KeyIcon />}>
          SRCNC Log In
      </Button></Link>}
           
          </Box>
        </Toolbar>
      </Container>
            </AppBar>
        </div >
    );
}