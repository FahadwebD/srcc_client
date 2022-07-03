import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTheme } from 'styled-components';
import { Button } from '@material-ui/core';





const Event = ({ev}) => {
  const theme = useTheme();

  // My card preferences

  const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 10,
    margin:2
  };
    return (
        
      <div style={{textAlign:'left'}}>
       <Card sx={CARD_PROPERTY}>
              <CardMedia
                component="img"
                height="194"
                image={`data:image/png;base64,${ev.image}`}
              />
              <CardContent sx={{ p: 3 }} style={{maxHeight:'180px' , overflowY:'scroll'}}>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  {ev.headline}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {ev.description}
                </Typography>
                <span style={{fontSize:'10px' , color:'red'}} >{ev.date}</span>
              </CardContent>
              
              <CardActions sx={{ pt: 0, px: 3, pb: 3 }}>
                
                <Button size="small">Share</Button>
              </CardActions>
            </Card>
      </div>
       
    );
};

export default Event;