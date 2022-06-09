import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import RankedProffesorProfile from './RankedProffesorProfile';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const RankedProffesors = () => {

    return (
        <div>
             <Container style={{marginTop:'20px'}}>
             <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <RankedProffesorProfile></RankedProffesorProfile>
          </Grid>
        ))}
      </Grid>
    </Box>
             </Container>
        </div>
    );
};

export default RankedProffesors;