import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CarouselManage from './CarouselManage/CarouselManage';
import CollegeNumber from './CollegeNumbersManage/CollegeNumber';
import WelcomeMassage from './WelcomeMassage/WelcomeMassage';

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
          <Item><CarouselManage></CarouselManage></Item>
        </Grid>
        <Grid item xs={12} md={5}>
          <Item><CollegeNumber></CollegeNumber></Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item><WelcomeMassage></WelcomeMassage></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
        </div>
    );
};

export default HomeCustome;