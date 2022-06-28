import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const LogosHeader = () => {
    return (
        // <div  position="fixed">
        //        <Avatar src='https://upload.wikimedia.org/wikipedia/commons/7/74/Bangladesh_Red_Crescent_Society_Logo.png' alt='srcc' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1  , width:'50px' , height:'50px'}} />
        //   <Typography
        //     variant="h6"
        //     noWrap
        //     component="a"
        //     href="/"
        //     sx={{
        //       mr: 2,
        //       display: { xs: 'none', md: 'flex' },
        //       fontFamily: 'monospace',
        //       fontWeight: 700,
        //       letterSpacing: '.3rem',
        //       color: 'inherit',
        //       textDecoration: 'none',
        //     }}
        //   >
        //     SRCNC
        //   </Typography>
        // </div>
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
         
           
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
       
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default LogosHeader;