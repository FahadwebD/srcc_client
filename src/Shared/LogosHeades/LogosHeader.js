import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const LogosHeader = () => {
    return (

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