import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Navbar from '../../Shared/Navbar/Navbar'
import Footer from '../../Shared/Footer/Footer'
import AllNotices from './AllNotices';
import AsideEvent from './AsideEvent';
import useNotice from '../../hooks/useNotice';
import useEvent from '../../hooks/useEvent';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflowY:'scroll'
  }));


const NoticesMain = () => {

    const [notices , setNotices ] = useNotice()
   const [staffs , setStaffs] = useEvent()


    return (
        <div>
            <Navbar></Navbar>
           <div style={{marginTop:'140px' , padding:'20px'}}>
           <Box  sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <h1 style={{textAlign:'left' , color:'green'}}>Recent Notices</h1>
          <AllNotices 
          notices={notices}
          ></AllNotices>
        </Grid>
        <Grid item xs={4}>
        <h2 style={{textAlign:'left' , color:'green' , marginTop:'32px'}}>Events</h2>
          <Item  style={{height:'400px' }}>
       <div >
       {staffs.map(event=> <AsideEvent
          event={event}
          ></AsideEvent>)}
       </div>
          
          </Item>
        </Grid>
      </Grid>
    </Box>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default NoticesMain;