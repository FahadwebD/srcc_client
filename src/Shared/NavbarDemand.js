import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import logo from '../assets/images/WEB HEAD.png'
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default function NavbarDemand(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{backgroundColor:'#c60000' , borderBottom:"5px solid green"}} sx={{display: { xs: 'none', sm: 'block' }}}>
         <Link to="/"> <Toolbar>
            
            <img id='navImg' src={logo} alt='srcc' style={{ height:'50px' , width:'500px'}} />
           
          </Toolbar></Link>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        
      </Container>
    </React.Fragment>
  );
}
