import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CarouselManage from './CarouselManage/CarouselManage';
import CollegeNumber from './CollegeNumbersManage/CollegeNumber';
import WelcomeMassage from './WelcomeMassage/WelcomeMassage';
import FooterManage from './FooterManage/FooterManage';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomeCustome = () => {
    return (
        <div style={{marginTop:'70px'}}>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <h3>Banner Management</h3>
          <Item><CarouselManage></CarouselManage></Item>
        </Grid>
        <Grid item xs={12} md={5}>
          <h3>Numbers Management</h3>
          <Item><CollegeNumber></CollegeNumber></Item>
        </Grid>
        <Grid item xs={12} md={7}>
          <h3>Welcome Massage and Video Manage</h3>
          <Item><WelcomeMassage></WelcomeMassage></Item>
        </Grid>
        <Grid item xs={12} md={5}>
          <h3>Footer Manage</h3>
          <Item><FooterManage></FooterManage></Item>
        </Grid>
      </Grid>
    </Box>
        </div>
    );
};

export default HomeCustome;