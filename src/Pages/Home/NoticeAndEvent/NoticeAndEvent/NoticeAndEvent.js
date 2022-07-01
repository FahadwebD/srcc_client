import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Notices from '../Notices/Notices';
import Events from '../Events/Events';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const NoticeAndEvent = () => {
    return (
       <Container>
         <div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid  item xs={12} md={7}>
          <Events></Events>
        </Grid>
        <Grid item xs={12} md={5}>
        <h1>Notices</h1>
        <hr style={{width:'10%' , backgroundColor:'red' , border: '1px solid red'}} />
          <Item><Notices></Notices></Item>
        </Grid>
        </Grid>
    </Box>
        </div>
       </Container>
    );
};

export default NoticeAndEvent;