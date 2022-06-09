import { Grid } from '@mui/material';
import React from 'react';

import Box from '@mui/material/Box';

import { Container } from '@mui/system';
import ViceCCard from './ViceCCard';
import ViceCMassage from './ViceCMassage';









const ViceCContainer = () => {
    return (
        <div>
        <Container style={{marginTop:'30px'}}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12} md={4}>
                  <ViceCCard></ViceCCard>
              </Grid>
              <Grid item xs={12} md={8}>
                    <ViceCMassage></ViceCMassage>
              </Grid>
            </Grid>
         </Box>
        </Container>
        </div>
    );
};

export default ViceCContainer;