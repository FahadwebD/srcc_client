import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';import FooterManage from '../HomeCutomization/FooterManage/FooterManage';
;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Customization = () => {
    return (
        <div>
             <div style={{marginTop:'70px'}}>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Item></Item>
        </Grid>
        <Grid item xs={12} md={5}>
          <Item></Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><FooterManage></FooterManage></Item>
        </Grid>
      </Grid>
    </Box>
        </div>
        </div>
    );
};

export default Customization;