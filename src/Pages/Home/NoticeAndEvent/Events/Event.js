import React from 'react';

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Typography from '@mui/material/Typography';

import { useTheme } from 'styled-components';
import { Button } from '@material-ui/core';

import { Link } from 'react-router-dom';




const Event = ({ev ,handleOpen}) => {
  const theme = useTheme();

  // My card preferences
  
  const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 10,
    margin:2
  };
    return (
        
   <>
      <div style={{textAlign:'left'}}>
       <Card sx={CARD_PROPERTY}>
              <CardMedia
                component="img"
                height="194"
                image={`data:image/png;base64,${ev.image}`}
              />
              <CardContent sx={{ p: 3 }} style={{height:'150px' }}>
              <span style={{fontSize:'10px' , color:'red'}} >{ev.date}</span>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  {ev.headline}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {ev.description.slice(0, 20)+'...'}<Link style={{textDecoration:'none'}} to={`/evdetail/${ev._id}`}> <Button size="small">Read More</Button></Link>
                </Typography>
                
              </CardContent>
              
        
            </Card>
      </div>
   
      
      </>
       
    );
};

export default Event;